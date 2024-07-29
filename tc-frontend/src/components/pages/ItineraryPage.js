import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { getItineraryById } from '../../services/backend/itinerariesService'
import ItineraryBasicInfo from '../organisms/ItineraryBasicInfo'

const ItineraryPage = () => {
    const { itineraryId } = useParams()
    const {state} = useLocation()
    const navigate = useNavigate()
    const [itinerary, setItinerary] = useState({})
    const [showCreateSuccessMessage, setShowCreateSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if(state?.showCreateSuccess){
            setShowCreateSuccessMessage(true)
          setTimeout(() => {
            setShowCreateSuccessMessage(false)
          }, 2000)
          }

        fetchItineraryById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchItineraryById = async () => {
        let res = await getItineraryById(itineraryId)
        console.log(res)
        if(res.status === 200) {
            setItinerary(res.data)
        } else {
            console.log(res)
            setErrorMessage(res?.data?.msg ? res?.data?.msg : 'an error occurred')
            navigate("/", {state: {showNotFoundErrorMessage: true}})
        }
    }

  return (
    <div>
        {showCreateSuccessMessage && (<div className='success-panel'>Successfully Created!</div>)}
        {errorMessage !== '' && (<div className='error-panel'>{errorMessage}</div>)}
      <h2>Your {itinerary.itineraryName} Itinerary</h2>
      <ItineraryBasicInfo itineraryData={itinerary}></ItineraryBasicInfo>
    </div>
  )
}

export default ItineraryPage
