import React, { useEffect, useState } from 'react'
import '../../../styles/Calendar.css'

const CalendarDayDetails = ({currentDay, currentDayItinerary, onUpdateItinerary, onAttributeUpdated, editAttribute}) => {

  const [isLoading, setIsLoading] = useState(false)

    const addAttribute = (type) => {
      if(currentDayItinerary.attributes === undefined) {
        currentDayItinerary.attributes = []
      }
        if(type === 'activity') {
          currentDayItinerary.attributes.push({
            attributeType: "activity",
            attributeTitle: "",
          })
        }
        if(type === 'night') {
          currentDayItinerary.attributes.push({
            attributeType: "night",
            attributeTitle: "",
          })
        }
        if(type === 'transportation') {
          currentDayItinerary.attributes.push({
            attributeType: "transportation",
            attributeTitle: "",
          })
        }

        onAttributeUpdated(currentDayItinerary)
        resetState()
        
      }

    const removeAttribute = (i) => {
      currentDayItinerary.attributes.splice(i, 1)
      onAttributeUpdated(currentDayItinerary)
      resetState()
    }

    const onAttributeChanged = (event, attribute, index) => {
      let newAttribute = attribute
      newAttribute.attributeTitle = event
      currentDayItinerary.attributes.splice(index, 1, newAttribute)
      onAttributeUpdated(currentDayItinerary)
    }

    const resetState = () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 10)
    }

      useEffect(() => {
        resetState()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentDay])

  return (
    <div className="calendar-day-details">
      {isLoading && (
        <p>loading...</p>
      )}
      {!isLoading && (
        <>            
            <h3>{currentDay.toDateString()}</h3>
            <button className='button-secondary' onClick={() => addAttribute('activity')}> + add activity</button>&emsp; 
            <button className='button-secondary' onClick={() => addAttribute('night')}> + add night</button>&emsp; 
            <button className='button-secondary' onClick={() => addAttribute('transportation')}> + add transportation</button>
            <br/>
            <br/>
            {currentDayItinerary?.attributes?.length > 0 && (
              currentDayItinerary.attributes.map((attribute, i) => {
                return (
                  <div key={i}>
                    <label>{attribute.attributeType}</label><input onChange={(e) => onAttributeChanged(e.target.value, attribute, i)} defaultValue={attribute.attributeTitle}/>
                    <span onClick={() => removeAttribute(i)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg>
                    </span>
                    <span onClick={() => editAttribute(currentDayItinerary.attributes[i])}>
                    <svg class="feather feather-edit" fill="none" width="16" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </span>
                  </div>
                ) 
              })
            )}

            <button className='button-primary' onClick={onUpdateItinerary}> UPDATE</button>&emsp; 
        </>
      )}

    </div>
  )
}

export default CalendarDayDetails
