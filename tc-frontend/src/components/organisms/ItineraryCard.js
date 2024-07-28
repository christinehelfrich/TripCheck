import React from 'react'
import '../../styles/ItineraryCard.css'
import { useNavigate } from 'react-router-dom'
const imageBasePath = 'https://raw.githubusercontent.com/christinehelfrich/TripCheck/master/tc-backend/'

const ItineraryCard = (itinerary) => {
  const navigate = useNavigate()

  const onClickCard = () => {
    navigate(`/itinerary/${itinerary.itinerary._id}`)
  }
  console.log(imageBasePath + '/' + itinerary.itinerary.itineraryImage)

  return (
    <div className='itinerary-card' onClick={onClickCard}>
      <p>{itinerary.itinerary.itineraryName}</p>
    <img className='itinerary-card-img' alt={itinerary.itinerary.itineraryName + '-cover-image'} src={imageBasePath + itinerary.itinerary.itineraryImage}/>
    </div>
  )
}

export default ItineraryCard
