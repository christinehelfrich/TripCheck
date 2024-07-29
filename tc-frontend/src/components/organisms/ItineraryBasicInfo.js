import React from 'react'
import '../../styles/ItineraryPage.css'
import ItineraryForm from './ItineraryForm'

const ItineraryBasicInfo = ({itineraryData}) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }
    
  return (
    <>
    <h3>Basic Info</h3>
    <div className='itinerary-basic-info form-container'>
        <ItineraryForm onFormSubmitted={onSubmit} defaultFormValues={itineraryData}></ItineraryForm>
    </div>
    </>
  )
}

export default ItineraryBasicInfo
