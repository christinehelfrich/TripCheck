import React, { useState }  from 'react'
import CalendarDays from '../molecules/CalendarDays';
import '../../styles/Calendar.css'
import { updateItinerary } from '../../services/backend/itinerariesService';

const ItineraryCalendar = ({itineraryData}) => {

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const [currentDay, setCurrentDay] = useState(new Date(itineraryData.startDate))
    const [errorMessage, setErrorMessage] = useState('');
    const calendar = itineraryData.calendar
    const [currentDayItinerary, setCurrentDayItinerary] = useState(calendar ? calendar[0] : {})
    console.log(currentDayItinerary)

    const changeCurrentDay = (day) => {
        setCurrentDay(new Date(day.year, day.month, day.number));
        let dt = new Date(day.date)
        const currItin = calendar.filter((d) => {
          return d.date === dt.toISOString()
        })

        console.log('currItin', currItin)

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

    const addAttribute = (type) => {
      console.log(type)
    }

    const onUpdateItinerary = async () => {
      let tempItinObj = {
        description: itineraryData.description,
        endDate: itineraryData.endDate,
        itineraryImage: itineraryData.itineraryImage,
        itineraryName: itineraryData.itineraryName,
        ownerId: itineraryData.ownerId,
        startDate: itineraryData.startDate,
        calendar: [
              {
                  date: "2024-08-13T07:00:00.000Z",
                  attributes: [
                      {
                          attributeType: 'night',
                          attributeContent: 'hotel california'
                      },
                      {
                          attributeType: 'activity',
                          attributeContent: 'driving racecars'
                      },
                      {
                          attributeType: 'activity',
                          attributeContent: 'dinner at nobu'
                      },
                      {
                          attributeType: 'transportation',
                          attributeContent: 'rental porsche'
                      },
                  ]
              },
              {
                date: "2024-08-14T07:00:00.000Z",
                attributes: [
                    {
                        attributeType: 'night',
                        attributeContent: 'hotel california again'
                    },
                    {
                        attributeType: 'activity',
                        attributeContent: 'beach club'
                    },
                    {
                        attributeType: 'activity',
                        attributeContent: 'erwhon'
                    },
                    {
                        attributeType: 'transportation',
                        attributeContent: 'rental porsche again'
                    },
                ]
            },
        ],
      }
      let res = await updateItinerary(itineraryData._id, tempItinObj)
      if(res.status === 200) {
        setErrorMessage('SUCCESS!!')
    } else {
        setErrorMessage(res?.data?.msg ? res?.data?.msg : 'there was an error')
    }
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
                    <label>{attribute.attributeType}</label><input type='text' value={attribute.attributeContent}/>
                  </div>
                ) 
              })
            )}

            <button className='button-primary' onClick={onUpdateItinerary}> UPDATE</button>&emsp; 
        </div>
      </div>
    </div>
    </>
  )
}

export default ItineraryCalendar
