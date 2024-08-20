import React, { useEffect, useState } from 'react'
import { getAllItineraries } from '../../services/backend/itinerariesService'
import ItineraryCard from '../organisms/ItineraryCard'
import '../../styles/MyTrips.css'
import HeaderProfile from '../molecules/HeaderProfile'
import ItineraryFilters from '../molecules/ItineraryFilters'
import { useCookies } from "react-cookie";

const MyTripsPage = () => {

    const [itineraries, setItineraries] = useState([])
    const [filteredItineraries, setFilteredItineraries] = useState(itineraries)
    const [isLoading, setIsLoading] = useState(false)
    const [cookies, removeCookie] = useCookies([]);

    useEffect(() => {
        verifyCookie();
        setIsLoading(true)
        fetchItineraries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const verifyCookie = () => {
        console.log(cookies)
        
      };

    const fetchItineraries = async () => {
        let res = await getAllItineraries();
        res?.data !== undefined ? setItineraries(res.data) : setItineraries([])
        console.log(res)
        onFilterStatusUpdate('future', res?.data)
        setIsLoading(false)
    }

    const onFilterStatusUpdate = (event, unfilteredItineraries = itineraries) => {
        setIsLoading(true)
        let today = new Date()
        const filteredItinerariess = unfilteredItineraries.filter((item) => {
            let endDate = new Date(item.endDate)
            let startDate = new Date(item.startDate)
            if(event === 'future') {
                return startDate > today
            } if(event === 'past') {
                return startDate < today
            } if(event === 'current') {
                return startDate <= today && endDate >= today
            }
        })
        setFilteredItineraries(filteredItinerariess)
        setIsLoading(false)
        // TO DO: finish filtering itineraries
    }

  return (
    <div>

        <HeaderProfile></HeaderProfile>
        <ItineraryFilters onFilterStatusUpdate={onFilterStatusUpdate}></ItineraryFilters>

        {isLoading && (
            <p>loading....</p>
        )}
        {!isLoading && (
        <div className='my-trips'>
        {filteredItineraries.map((itinerary, index) => (
            <ItineraryCard key={index} itinerary={itinerary}></ItineraryCard>
        ))}
        </div>
        )}
      
    </div>
  )
}

export default MyTripsPage
