import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/MyTrips.css'
const imageBasePath = 'https://raw.githubusercontent.com/christinehelfrich/TripCheck/master/tc-backend/'


const HeaderProfile = () => {

    const user = useSelector((state) => {
        return state.user.user
      })
  return (
    <div className='header-profile'>
        <div className='header-profile-content'>
        <img alt='profile-picture' src={imageBasePath + 'images/itineraryImages/image-not-found.png'}></img>
        <h2>{user.user.name}</h2>
        </div>
    </div>
  )
}

export default HeaderProfile
