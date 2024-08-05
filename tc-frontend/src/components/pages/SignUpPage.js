import React, { useState } from 'react'
import '../../styles/Signup.css'
import { createProfile } from '../../services/backend/profileService';
import { useNavigate } from 'react-router-dom'
import ProfileForm from '../organisms/ProfileForm';

const SignUpPage = () => {
  const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');

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
    <div className='signup-container form-container'>
        <h2>Create an Account</h2>
        {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
        <ProfileForm onFormSubmitted={onSubmit} submitButtonText={'Submit'} showPassword={true}></ProfileForm>
    </div>
  )
}

export default SignUpPage
