import React, { useState }  from 'react'
import CalendarDays from './Calendar/CalendarDays';
import '../../styles/Calendar.css'
import { updateItinerary } from '../../services/backend/itinerariesService';
import CalendarDayDetails from './Calendar/CalendarDayDetails';

const ItineraryCalendar = ({itineraryData}) => {

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const [currentDay, setCurrentDay] = useState(new Date(itineraryData.startDate))
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [calendar, setCalendar] = useState(itineraryData.calendar)
    const [currentDayItinerary, setCurrentDayItinerary] = useState(calendar.length > 0 ? calendar[0] : {date: currentDay, attributes: []})

    const changeCurrentDay = (day) => {
        setCurrentDay(new Date(day.year, day.month, day.number));
        let dt = new Date()
        dt.setDate(day.number)
        dt.setMonth(day.month)
        dt.setYear(day.year)
        dt.setHours(0,0,0,0);
        const currItin = calendar.filter((d) => {
          return d.date === dt.toISOString()
        })

        setCurrentDayItinerary(currItin.length > 0 ? currItin[0] : [])

      }

    const nextMonth = () => {
        let nextMonthDate = new Date(currentDay.setMonth(currentDay.getMonth() + 1))
        changeCurrentDay({year: nextMonthDate.getFullYear(), month: nextMonthDate.getMonth(), number: nextMonthDate.getDate()})

    }

    const perviousMonth = () => {
        let prevMonthDate = new Date(currentDay.setMonth(currentDay.getMonth() - 1))
        changeCurrentDay({year: prevMonthDate.getFullYear(), month: prevMonthDate.getMonth(), number: prevMonthDate.getDate()})
    }

    const onAttributeUpdated = (event) => {
      setCurrentDayItinerary(event)
      let updatedCalendar = calendar.map((d) => {
        if(d.date === event.date) {
          return event
        }else {
          return d
        }
      })
      setCalendar(updatedCalendar)
    }

    const onUpdateItinerary = async () => {
      let tempItinObj = {
        description: itineraryData.description,
        endDate: itineraryData.endDate,
        itineraryImage: itineraryData.itineraryImage,
        itineraryName: itineraryData.itineraryName,
        ownerId: itineraryData.ownerId,
        startDate: itineraryData.startDate,
        calendar: calendar
      }
      let res = await updateItinerary(itineraryData._id, tempItinObj)
      if(res.status === 200) {
        setSuccessMessage('SUCCESS!!')
        setTimeout(() => {
          setSuccessMessage('')
        }, 5000)
    } else {
        setErrorMessage(res?.data?.msg ? res?.data?.msg : 'there was an error')
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
    }
    }
    
  return (
    <>
    <h3>Planned Itinerary</h3>
    <div className='itinerary-basic-info form-container'>
    <div className="calendar">
        <div className="calendar-header">

        <button className='button-secondary' onClick={perviousMonth}>
            <span className="material-icons">
              &larr;
            </span>
        </button>
        <div className="title">
            <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
        </div>
        <button className='button-secondary'  onClick={nextMonth}>
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
        {errorMessage !== '' && (
          <div className='error-panel'>{errorMessage}</div>
        )}
        {successMessage !== '' && (
              <div className='success-panel'>{successMessage}</div>
        )}
        <CalendarDayDetails onUpdateItinerary={onUpdateItinerary} currentDay={currentDay} currentDayItinerary={currentDayItinerary} onAttributeUpdated={onAttributeUpdated}></CalendarDayDetails>
      </div>
    </div>
    </>
  )
}

export default ItineraryCalendar
