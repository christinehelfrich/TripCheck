import React from 'react'
import '../../../styles/Calendar.css'

const CalendarDayDetails = ({currentDay, currentDayItinerary, onUpdateItinerary}) => {

    const addAttribute = (type) => {
        console.log(type)
      }

  return (
    <div className="calendar-day-details">
            <h3>{currentDay.toDateString()}</h3>
            <button className='button-secondary' onClick={() => addAttribute('activity')}> + add activity</button>&emsp; 
            <button className='button-secondary' onClick={() => addAttribute('night')}> + add night</button>&emsp; 
            <button className='button-secondary' onClick={() => addAttribute('transportation')}> + add transportation</button>
            <br/>
            <br/>
            {currentDayItinerary?.attributes?.length > 0 && (
              currentDayItinerary.attributes.map((attribute) => {
                return (
                  <div>
                    <label>{attribute.attributeType}</label><input defaultValue={attribute.attributeContent}/>
                  </div>
                ) 
              })
            )}

            <button className='button-primary' onClick={onUpdateItinerary}> UPDATE</button>&emsp; 
    </div>
  )
}

export default CalendarDayDetails
