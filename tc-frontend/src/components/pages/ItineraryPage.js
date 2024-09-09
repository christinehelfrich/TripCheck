import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { getItineraryById } from '../../services/backend/itinerariesService'
import ItineraryBasicInfo from '../organisms/ItineraryBasicInfo'
import ItineraryCalendar from '../organisms/ItineraryCalendar'
import {useSelector} from "react-redux"
import CalendarAttributeDrawer from '../organisms/Calendar/CalendarAttributeDrawer'

const ItineraryPage = () => {
    const { itineraryId } = useParams()
    const {state} = useLocation()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [itinerary, setItinerary] = useState({})
    const [showCreateSuccessMessage, setShowCreateSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showUpdateSuccess, setShowUpdateSuccess] = useState(false)
    const [attributeShown, setAttributeShown] = useState(null)
    const user = useSelector((state) => {
      return state.user.user
      });

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
      setIsLoading(true)
        let res = await getItineraryById(itineraryId, user.token)
        if(res.status === 200) {
            setItinerary(res.data)
            setIsLoading(false)
        } else {
            setIsLoading(false)
            setErrorMessage(res?.data?.msg ? res?.data?.msg : 'an error occurred')
            navigate("/", {state: {showNotFoundErrorMessage: true}})
        }
    }

    const onEditAttribute = (attribute) => {
      setAttributeShown(attributeShown === attribute ? null : attribute)
    }

  return (
    <div>
        {showCreateSuccessMessage && (<div className='success-panel'>Successfully Created!</div>)}
        {showUpdateSuccess && (<div className='success-panel'>Successfully Updated!</div>)}
        {errorMessage !== '' && (<div className='error-panel'>{errorMessage}</div>)}
        {isLoading && (
            <p>loading....</p>
        )}
        {!isLoading && (
            <>
            <h2>Your {itinerary.itineraryName} Itinerary</h2>
            <CalendarAttributeDrawer attributeShown={attributeShown} isOpen={attributeShown != null} onClose={() => setAttributeShown(null)}></CalendarAttributeDrawer>
            <ItineraryBasicInfo itineraryData={itinerary}></ItineraryBasicInfo>
            <ItineraryCalendar itineraryData={itinerary} onEditAttribute={onEditAttribute}></ItineraryCalendar>
            </>
        )}
    </div>
  )
}

export default ItineraryPage
