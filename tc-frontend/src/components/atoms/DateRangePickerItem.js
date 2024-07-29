import React, { useState } from 'react'
import DatePicker from "react-multi-date-picker"


const DateRangePickerItem = ({onDateRangeSelected, defaultDates}) => {

  const [range, setRange] = useState({start: defaultDates.start, end: defaultDates.end});
  
  const onDateChange = (dates) => {
    
    if(dates && dates.length === 2) {
      setRange({start: Date.parse(dates[0].format()), end: Date.parse(dates[1].format())})
      onDateRangeSelected({start: new Date(Date.parse(dates[0].format())), end: new Date(Date.parse(dates[1].format()))})
    }
  }

  return (
    <DatePicker
      value={[range.start, range.end]}
      onChange={onDateChange}
      range
      rangeHover
    />
  )

}

export default DateRangePickerItem
