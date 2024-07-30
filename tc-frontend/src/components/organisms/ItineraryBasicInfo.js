import React, { useState } from 'react'
import '../../styles/ItineraryPage.css'
import ItineraryForm from './ItineraryForm'
import { updateItinerary } from '../../services/backend/itinerariesService'
import { useNavigate } from 'react-router-dom'

const ItineraryBasicInfo = ({itineraryData}) => {

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');
    console.log(itineraryData)

    const onSubmit = async (formData) => {
        const req = {};
        Array.from(formData.entries()).forEach(([key, value]) => {
          req[key] = value;
        })
        console.log(req)
        let res = await updateItinerary(itineraryData._id, formData)
        if(res.status === 200) {
          // redirect to itinerary page
          navigate(`/itinerary/${res.data._id}`, {state: {showCreateSuccess: true}})
      } else {
          setErrorMessage(res?.data?.msg ? res?.data?.msg : 'there was an error')
      }
    }
    
  return (
    <>
    <h3>Basic Info</h3>
    {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
    <div className='itinerary-basic-info form-container'>
        <ItineraryForm onFormSubmitted={onSubmit} defaultFormValues={itineraryData} submitButtonText={'Save Updates'}></ItineraryForm>
    </div>
    </>
  )
}

export default ItineraryBasicInfo
