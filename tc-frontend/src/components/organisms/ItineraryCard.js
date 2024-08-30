import React from 'react'
import '../../styles/ItineraryCard.css'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
const imageBasePath = 'https://raw.githubusercontent.com/christinehelfrich/TripCheck/master/tc-backend/'

const ItineraryCard = (itinerary) => {
  const navigate = useNavigate()

  const onClickCard = () => {
    navigate(`/itinerary/${itinerary.itinerary._id}`)
  }

  const startDate = new Date(itinerary.itinerary.startDate)
  const endDate = new Date(itinerary.itinerary.endDate)

  return (
    <div className='itinerary-card' onClick={onClickCard}>
    <LazyLoadImage 
    effect="blur"
    className='itinerary-card-img' 
    alt={itinerary.itinerary.itineraryName + '-cover-image'} 
    src={itinerary.itinerary.itineraryImage ? imageBasePath + itinerary.itinerary.itineraryImage : imageBasePath + 'images/itineraryImages/image-not-found.png'}/>
    <p>{itinerary.itinerary.itineraryName}
    {itinerary.itinerary.startDate !== undefined && (
      <span className='itinerary-card-date'>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</span>
    )}
    </p>

    </div>
  )
}

export default ItineraryCard
