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
                type="text"
                name="password" 
                {...register("password", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>

            <input className='button-primary' type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value='Login' />
            
        </form>
    </div>
  )
}

export default LoginPage
