import React, { useEffect, useState } from 'react'
import { getAllItineraries } from '../../services/backend/itinerariesService'
import ItineraryCard from '../organisms/ItineraryCard'
import '../../styles/MyTrips.css'

const MyTripsPage = () => {

    const [itineraries, setItineraries] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchItineraries()
    }, [])

    const fetchItineraries = async () => {
        let res = await getAllItineraries();
        res?.data ? setItineraries(res.data) : setItineraries([])
        setIsLoading(false)
    }

  return (
    <div >

        {isLoading && (
            <p>loading....</p>
        )}
    {!isLoading && (
        <div className='my-trips'>
        {itineraries.map((itinerary, index) => (
            <ItineraryCard key={index} itinerary={itinerary}></ItineraryCard>
        ))}
        </div>
    )}
      
    </div>
  )
}

export default MyTripsPage
