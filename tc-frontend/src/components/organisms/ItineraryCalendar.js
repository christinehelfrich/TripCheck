import React, { useState }  from 'react'
import CalendarDays from '../molecules/CalendarDays';
import '../../styles/Calendar.css'

const ItineraryCalendar = ({itineraryData}) => {

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const [currentDay, setCurrentDay] = useState(new Date())
    const [errorMessage, setErrorMessage] = useState('');

    const changeCurrentDay = (day) => {
        setCurrentDay(new Date(day.year, day.month, day.number));
      }

    const nextMonth = () => {

    }

    const perviousMonth = () => {
        
    }
    
    // const nextDay = () => {
    //     setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 1)) );
    //   }
    
    // const previousDay = () => {
    //     setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)) );
    //   }

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

          {/* <div className="tools">
            <button onClick={previousDay}>
              <span className="material-icons">
              &larr;
                </span>
            </button>
            <p>{months[currentDay.getMonth()].substring(0, 3)} {currentDay.getDate()}</p>
            <button onClick={nextDay}>
              <span className="material-icons">
              &rarr;
                </span>
            </button>
          </div> */}

        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
        </div>
      </div>
    </div>
    </>
  )
}

export default ItineraryCalendar
