import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { createProfile } from '../../services/backend/profileService';


const LoginPage = () => {
    const [isFormEdited, setIsFormEdited] = useState(false)
    const {
        register,
        handleSubmit,
        // reset,
        // setValue,
        // watch,
        // formState: { errors },
      } = useForm({
        // defaultValues: defaultFormValues
      });

      const onFormChange = (event) => {
        setIsFormEdited(true)
      }

    const Login = async (event) => {
        // let res = await createProfile(event)
        // console.log('res', res)

    }

  return (
    <div>
        <h2>Log In</h2>
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

            <input type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value='Submit' />
            
        </form>
    </div>
  )
}

export default LoginPage
