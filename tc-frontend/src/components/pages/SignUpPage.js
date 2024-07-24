import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import '../../styles/Signup.css'
import { createProfile } from '../../services/backend/profileService';

const SignUpPage = () => {
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

    const onSubmit = async (event) => {
        let res = await createProfile(event)
        console.log('res', res)

    }
  return (
    <div className='signup-container'>
        <h2>Create an Account</h2>
        <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input 
                type="text"
                name="name" 
                {...register("name", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>

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

            <input className='button-primary' type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value='Submit' />
            
        </form>
    </div>
  )
}

export default SignUpPage
