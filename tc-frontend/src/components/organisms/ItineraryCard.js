import React from 'react'
import '../../styles/ItineraryCard.css'

const ItineraryCard = (itinerary) => {

  return (
    <div className='itinerary-card'>
        {itinerary.itinerary.itineraryName}
      
    </div>
  )
}

export default ItineraryCard
