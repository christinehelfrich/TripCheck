import React, { useState } from 'react'
import '../../styles/CreateItinerary.css'
import { createItinerary } from '../../services/backend/itinerariesService';
import { useNavigate } from 'react-router-dom'
import ItineraryForm from '../organisms/ItineraryForm';

const CreateItineraryPage = () => {
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState('');

      const onSubmit = async (formData) => {
        const req = {};
        Array.from(formData.entries()).forEach(([key, value]) => {
          req[key] = value;
        })
        let res = await createItinerary(formData)
        if(res.status === 201) {
            // redirect to itinerary page
            navigate(`/itinerary/${res.data._id}`, {state: {showCreateSuccess: true}})
        } else {
            setErrorMessage(res?.data?.msg ? res?.data?.msg : 'there was an error')
        }
      }

  return (
    <div className='create-itinerary form-container'>
        <h2>Create an Itinerary</h2>
        {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
        <ItineraryForm onFormSubmitted={onSubmit} submitButtonText={'Create'}></ItineraryForm>
    </div>
  )
}

export default CreateItineraryPage
