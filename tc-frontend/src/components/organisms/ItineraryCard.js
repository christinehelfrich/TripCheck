import React from 'react'
import '../../styles/ItineraryCard.css'
import { useNavigate } from 'react-router-dom'
const imageBasePath = '../../../../tc-backend'

const ItineraryCard = (itinerary) => {
  const navigate = useNavigate()

  const onClickCard = () => {
    navigate(`/itinerary/${itinerary.itinerary._id}`)
  }
  console.log(itinerary)

  return (
    <div className='itinerary-card' onClick={onClickCard}>
    <img alt='img' src={imageBasePath + '/' + itinerary.itineraryImage}/>
        <p>{itinerary.itinerary.itineraryName}</p>
    </div>
  )
}

export default ItineraryCard
