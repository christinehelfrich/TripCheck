import React from 'react'
import '../../styles/ItineraryCard.css'
import { useNavigate } from 'react-router-dom'

const ItineraryCard = (itinerary) => {
  const navigate = useNavigate()

  const onClickCard = () => {
    navigate(`/itinerary/${itinerary.itinerary._id}`)
  }

  return (
    <div className='itinerary-card' onClick={onClickCard}>
        {itinerary.itinerary.itineraryName}
      
    </div>
  )
}

export default ItineraryCard
