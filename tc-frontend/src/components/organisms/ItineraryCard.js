import React from 'react'
import '../../styles/ItineraryCard.css'
import { useNavigate } from 'react-router-dom'
const imageBasePath = 'https://raw.githubusercontent.com/christinehelfrich/TripCheck/master/tc-backend/'

const ItineraryCard = (itinerary) => {
  const navigate = useNavigate()

  const onClickCard = () => {
    navigate(`/itinerary/${itinerary.itinerary._id}`)
  }
  console.log(itinerary.itinerary.itineraryImage)

  return (
    <div className='itinerary-card' onClick={onClickCard}>
      <p>{itinerary.itinerary.itineraryName}</p>
    <img className='itinerary-card-img' alt={itinerary.itinerary.itineraryName + '-cover-image'} src={itinerary.itinerary.itineraryImage ? imageBasePath + itinerary.itinerary.itineraryImage : imageBasePath + 'images/itineraryImages/image-not-found.png'}/>
    </div>
  )
}

export default ItineraryCard
