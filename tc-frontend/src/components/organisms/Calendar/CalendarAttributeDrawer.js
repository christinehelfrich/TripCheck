import React from 'react'
import '../../../styles/Calendar.css'

const CalendarAttributeDrawer = ({isOpen, onClose, attributeShown}) => {

  return (
    <div className={`Drawer__Container ${isOpen && "Drawer__Container--isOpen"}`}>
        <span onClick={onClose} style={{"marginRight": "0.5rem", "position": "absolute", "right": "0", "cursor": "pointer"}}>&#10005;</span>
        <h3>{attributeShown?.attributeTitle}</h3>
        <p>attribute drawer is open!</p>
      
    </div>
  )
}

export default CalendarAttributeDrawer
