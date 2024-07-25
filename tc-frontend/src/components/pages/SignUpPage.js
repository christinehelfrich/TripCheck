import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import '../../styles/Signup.css'
import { createProfile } from '../../services/backend/profileService';
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate()
    const [isFormEdited, setIsFormEdited] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
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
        if(res.status === 200 || res.status === 201) {
          navigate("/login", {state: {showSignUpSuccess: true}})
        } else{
          setErrorMessage(res?.data?.msg ? res.data.msg : "An error has occured");
          setTimeout(() => {
            setErrorMessage('')
          }, 5000)
        }

    }
  return (
    <div className='signup-container'>
        <h2>Create an Account</h2>
        {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
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
