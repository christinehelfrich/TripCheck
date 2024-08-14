import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { login } from '../../services/backend/authService';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/userSlice';
import { useNavigate, useLocation } from 'react-router-dom'
import '../../styles/Login.css'

const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {state} = useLocation()

    const [showSignUpSuccessMessage, setShowSignUpSuccessMessage] = useState(false)
    const [isFormEdited, setIsFormEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const {
        register,
        handleSubmit,
      } = useForm({
        // defaultValues: defaultFormValues
      });

      useEffect(() => {
        
        if(state?.showSignUpSuccess){
            setShowSignUpSuccessMessage(true)
          setTimeout(() => {
            setShowSignUpSuccessMessage(false)
            state.showSignUpSuccess = false
          }, 2000)
        }

      }, [state])

      const onFormChange = (event) => {
        setIsFormEdited(true)
      }

      const toggleHidePassword = () => {
        setHidePassword((prev) => !prev);
      };

    const Login = async (event) => {
        let res = await login(event)
        if(res.status === 200){
          dispatch(updateUser({user: res.data.user, isAuthenticated: true}))
          setErrorMessage('You are successfully logged in!')
          navigate("/", {state: {showLoginSuccess: true}})
        }else {
          setErrorMessage(res.response?.data?.msg ? res.response?.data?.msg : 'There was an error with your login.')
          setTimeout(() => {
            setErrorMessage('')
          }, 5000)
        }
         
        

    }

  return (
    <div className='login-container'>
        <h2>Log In</h2>
        {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
        {showSignUpSuccessMessage && (<div className='success-panel'>Account created! Please login.</div>)}
       
        <form className='createProfileForm' onSubmit={handleSubmit(Login)}>

            <div>
                <label>Email</label>
                <input 
                type="text"
                name="email" 
                {...register("email", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>

            <div>
                <label>Password</label>
                <input 
                type={hidePassword ? "password" : "text"}
                name="password" 
                {...register("password", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />

                <span className="icon" style={{height: "50px"}} onClick={toggleHidePassword}>
                  {
                    hidePassword 
                    ? 
                    <svg className="password-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="19" fill="none" >
                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                    : 
                    <svg className="password-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="19" fill="none">
                    <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                  }
                </span>
            </div>

            <input className='button-primary' type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value='Login' />
            
        </form>
    </div>
  )
}

export default LoginPage
