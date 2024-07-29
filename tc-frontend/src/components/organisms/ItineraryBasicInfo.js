import React from 'react'
import '../../styles/ItineraryPage.css'
import ItineraryForm from './ItineraryForm'
import { updateItinerary } from '../../services/backend/itinerariesService'

const ItineraryBasicInfo = ({itineraryData}) => {
    console.log(itineraryData)

    const onSubmit = async (formData) => {
        const req = {};
        Array.from(formData.entries()).forEach(([key, value]) => {
          req[key] = value;
        })
        let res = await updateItinerary(itineraryData._id, req)
        console.log('RES', res)
        // handle errors, fix images
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
