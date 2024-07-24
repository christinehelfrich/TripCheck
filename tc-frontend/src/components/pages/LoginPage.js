import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { login } from '../../services/backend/authService';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom'
import '../../styles/Login.css'

const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isFormEdited, setIsFormEdited] = useState(false)
    const [displayMessage, setDisplayMessage] = useState('');
    const {
        register,
        handleSubmit,
      } = useForm({
        // defaultValues: defaultFormValues
      });

      const onFormChange = (event) => {
        setIsFormEdited(true)
      }

    const Login = async (event) => {
        let res = await login(event)
        if(res.status === 200){
          console.log(res);
          dispatch(updateUser({user: res.data.user, isAuthenticated: true}))
          setDisplayMessage('You are successfully logged in!')
          navigate("/", {state: {showLoginSuccess: true}})
        }else {
          setDisplayMessage(res.response?.data?.msg ? res.response?.data?.msg : 'There was an error with your login.')
        }
         
        

    }

  return (
    <div className='login-container'>
        <h2>Log In</h2>
        {displayMessage !== '' && (
          <div><p>{displayMessage}</p></div>
        )}
       
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
