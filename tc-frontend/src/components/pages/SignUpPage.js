import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

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

    const onSubmit = (event) => {
        console.log('submitted', event)
    }
  return (
    <div>
        <h2>Create an Account</h2>
        <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input 
                type="text"
                name="Name" 
                {...register("Name", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>

            <div>
                <label>Email</label>
                <input 
                type="text"
                name="email" 
                {...register("Email", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>

            <div>
                <label>Password</label>
                <input 
                type="text"
                name="password" 
                {...register("Password", {
                  onChange: (e) => {onFormChange(e)}
                })}
                />
            </div>

            <input type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value='Submit' />
            
        </form>
    </div>
  )
}

export default SignUpPage
