import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { login } from '../../services/backend/authService';


const LoginPage = () => {
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
          setDisplayMessage('You are successfully logged in!')
        }else {
          setDisplayMessage(res.response?.data?.msg ? res.response?.data?.msg : 'There was an error with your login.')
        }
         
        

    }

  return (
    <div>
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

            <input type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value='Login' />
            
        </form>
    </div>
  )
}

export default LoginPage
