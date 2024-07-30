import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import '../../styles/Signup.css'

const ProfileForm = ({onFormSubmitted, defaultFormValues, submitButtonText}) => {

    const [isFormEdited, setIsFormEdited] = useState(false)
    const {
        register,
        handleSubmit,
      } = useForm({
        defaultValues: defaultFormValues
      });

      const onFormChange = (event) => {
        setIsFormEdited(true)
      }

    const onSubmit = async (event) => {
        console.log('onsubmit')
        onFormSubmitted(event)
    }
  return (
    <div>
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

            <input className='button-primary' type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value={submitButtonText} />
            
        </form>
    </div>
  )
}

export default ProfileForm
