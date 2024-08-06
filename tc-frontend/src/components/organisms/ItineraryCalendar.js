import React, { useState }  from 'react'
import CalendarDays from '../molecules/CalendarDays';
import '../../styles/Calendar.css'

const ItineraryCalendar = ({itineraryData}) => {

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const [currentDay, setCurrentDay] = useState(new Date(itineraryData.startDate))
    const [errorMessage, setErrorMessage] = useState('');

    const changeCurrentDay = (day) => {
        setCurrentDay(new Date(day.year, day.month, day.number));
      }

    const nextMonth = () => {
        let nextMonthDate = new Date(currentDay.setMonth(currentDay.getMonth() + 1))
        changeCurrentDay({year: nextMonthDate.getFullYear(), month: nextMonthDate.getMonth(), number: nextMonthDate.getDate()})

    }

    const perviousMonth = () => {
        let prevMonthDate = new Date(currentDay.setMonth(currentDay.getMonth() - 1))
        changeCurrentDay({year: prevMonthDate.getFullYear(), month: prevMonthDate.getMonth(), number: prevMonthDate.getDate()})
    }

    const addAttribute = (type) => {
      console.log(type)
    }
    
  return (
    <>
    <h3>Planned Itinerary</h3>
    {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
    <div className='itinerary-basic-info form-container'>
    <div className="calendar">
        <div className="calendar-header">

        <button onClick={perviousMonth}>
            <span className="material-icons">
              &larr;
            </span>
        </button>
        <div className="title">
            <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
        </div>
        <button onClick={nextMonth}>
            <span className="material-icons">
              &rarr;
            </span>
        </button>

        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} startDate={itineraryData.startDate} endDate={itineraryData.endDate}/>
        </div>
        <div className="calendar-day-details">
            <h3>{currentDay.toDateString()}</h3>
            <button className='button-secondary' onClick={() => addAttribute('activity')}> + add activity</button>&emsp; 
            <button className='button-secondary' onClick={() => addAttribute('night')}> + add night</button>&emsp; 
            <button className='button-secondary' onClick={() => addAttribute('transportation')}> + add transportation</button>&emsp; 
        </div>
      </div>
    </div>
    </>
  )
}

export default ItineraryCalendar
