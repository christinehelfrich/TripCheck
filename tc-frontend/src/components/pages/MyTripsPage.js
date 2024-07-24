import React, { useEffect, useState } from 'react'
import { getAllItineraries } from '../../services/backend/itinerariesService'
import ItineraryCard from '../organisms/ItineraryCard'
import '../../styles/MyTrips.css'

const MyTripsPage = () => {

    const [itineraries, setItineraries] = useState([])

    useEffect(() => {
        fetchItineraries()
    }, [])

    const fetchItineraries = async () => {
        let res = await getAllItineraries();
        res?.data ? setItineraries(res.data) : setItineraries([])
    }

  return (
    <div className='my-trips'>

        {itineraries.map((itinerary, index) => (
            <ItineraryCard itinerary={itinerary}></ItineraryCard>
        ))}
      
    </div>
  )
}

export default MyTripsPage
