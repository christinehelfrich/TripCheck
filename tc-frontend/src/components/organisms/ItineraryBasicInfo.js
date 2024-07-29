import React from 'react'
import '../../styles/ItineraryPage.css'
import ItineraryForm from './ItineraryForm'
import { updateItinerary } from '../../services/backend/itinerariesService'

const ItineraryBasicInfo = ({itineraryData}) => {
    console.log(itineraryData)

    const onSubmit = async (formData) => {
        console.log(formData)
        let res = await updateItinerary(itineraryData._id, formData)
        console.log('RES', res)
    }
    
  return (
    <>
    <h3>Basic Info</h3>
    <div className='itinerary-basic-info form-container'>
        <ItineraryForm onFormSubmitted={onSubmit} defaultFormValues={itineraryData} submitButtonText={'Save Updates'}></ItineraryForm>
    </div>
    </>
  )
}

export default ItineraryBasicInfo
