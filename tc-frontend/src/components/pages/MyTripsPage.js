import React, { useEffect, useState } from 'react'
import { getAllItineraries } from '../../services/backend/itinerariesService'

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
    <div>

        {itineraries.map((itinerary, index) => (
            <div>
                {itinerary.itineraryName}
            </div>
        ))}
      
    </div>
  )
}

export default MyTripsPage
