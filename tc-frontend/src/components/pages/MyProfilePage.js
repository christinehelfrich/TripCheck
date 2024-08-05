import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import ProfileForm from '../organisms/ProfileForm';
import { updateUser } from '../../redux/userSlice';
import { updateProfile } from '../../services/backend/profileService';

const MyProfile = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user.user
    });

  const onSubmit = async (event) => {
    let res = await updateProfile(user.user._id, event)
    if(res.status === 200){
      dispatch(updateUser({user: res.data, isAuthenticated: true}))
      setSuccessMessage('You are successfully logged in!')
      setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
    }else {
      setErrorMessage(res.response?.data?.msg ? res.response?.data?.msg : 'There was an error with your login.')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }
  
  return (
    <div className='form-container'>
              {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
                {successMessage !== '' && (
          <div className='success-panel'>{successMessage}</div>
        )}
        <ProfileForm onFormSubmitted={onSubmit} defaultFormValues={{name: user?.user?.name, email: user?.user?.email}} submitButtonText={'Update'} showPassword={false}></ProfileForm>
    </div>
  )
}

export default MyProfile
