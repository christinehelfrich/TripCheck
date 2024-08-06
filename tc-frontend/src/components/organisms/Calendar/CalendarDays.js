import React, { useEffect, useState } from 'react'
import '../../../styles/Calendar.css'

const CalendarDays = ({day, changeCurrentDay, startDate, endDate}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [currentDays, setCurrentDays] = useState([])
    let firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();

    const onNewDateSelected = (d) => {
      currentDays.map((cal) => {
        if(cal.selected) {
          cal.selected = false
        }
        if(cal.month === d.month && cal.number === d.number && cal.year === d.year) {
          cal.selected = true
        }
        return cal
      })
      changeCurrentDay(d)
    }

    useEffect(() => {
        setIsLoading(true)
        setCalendarList()
        setTimeout(() => {
          setIsLoading(false)
        }, 10)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [day])

    const setCalendarList = () => {
        let calList = []
        let today = new Date()
        for (let d = 0; d < 42; d++) {
            if (d === 0 && weekdayOfFirstDay === 0) {
              firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
            } else if (d === 0) {
              firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (d - weekdayOfFirstDay));
            } else {
              firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
            }

            let calendarDay = {
              currentMonth: (firstDayOfMonth.getMonth() === day.getMonth()),
              date: (new Date(firstDayOfMonth)),
              month: firstDayOfMonth.getMonth(),
              number: firstDayOfMonth.getDate(),
              selected: (firstDayOfMonth.toDateString() === day.toDateString()),
              year: firstDayOfMonth.getFullYear(),
              isToday: firstDayOfMonth.getDate() === today.getDate() && firstDayOfMonth.getMonth() === today.getMonth() && firstDayOfMonth.getYear() === today.getYear(),
              isDuringItinerary: firstDayOfMonth >= new Date(startDate) && firstDayOfMonth <= new Date(endDate)
            }

            calList.push(calendarDay);
          }
          setCurrentDays(calList)
          firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
    }

  return (

    <>    
    {isLoading && (
        <div className="table-content">Loading...</div>
    )}
    {!isLoading && (
    <div className="table-content">
      {
        currentDays.map((d) => {
          return (
            <div className={"calendar-day" + (d.currentMonth ? " current" : "") + (d.selected ? " selected" : "") + (d.isToday ? " today" : "") + (d.isDuringItinerary ? " is-during-itinerary" : "")}
                  onClick={() => onNewDateSelected(d)}>
              <p>{d.number}</p>
            </div>
          )
        })
      }
    </div>
    )}
    </>
  )
}

export default CalendarDays
