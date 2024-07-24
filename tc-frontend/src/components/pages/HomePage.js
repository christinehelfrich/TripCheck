import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
const HomePage = () => {

  const user = useSelector((state) => {
    return state.user.user
    });


  return (
    <div>

      {user.isAuthenticated && (
        <h2>Hello, {user.user.name} </h2>
      )}
      {!user.isAuthenticated && (
        <>
        <Link className='homeLink' to={'/login'}><p>Log In</p></Link>
        <Link className='homeLink' to={'/signup'}><p>Sign Up</p></Link>
        </>
      )}

      
    </div>
  )
}

export default HomePage
