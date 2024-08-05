import React, {useState} from 'react'

const ItineraryFilters = ({onFilterStatusUpdate}) => {

    const [filterStatus, setFilterStatus] = useState('future')

    const onChangeFilterStatus = (status) => {
        setFilterStatus(status)
        onFilterStatusUpdate(status)
    }

  return (
    <div className='header-profile-content'>

        <p className='filters'>
            <span onClick={() => onChangeFilterStatus('past')} className={'navLink' + (filterStatus === 'past' ? ' selected' : '')}>&ensp;Past&ensp;</span>
            &emsp; &emsp; 
            <span onClick={() => onChangeFilterStatus('current')} className={'navLink' + (filterStatus === 'current' ? ' selected' : '')}>&ensp;Current&ensp;</span>
            &emsp; &emsp; 
            <span onClick={() => onChangeFilterStatus('future')} className={'navLink' + (filterStatus === 'future' ? ' selected' : '')}>&ensp;Future&ensp;</span>
        </p> 
      
    </div>
  )
}

export default ItineraryFilters
