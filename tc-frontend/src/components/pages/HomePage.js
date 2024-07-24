import React from 'react'
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
        <h2>Hello, please create an account! </h2>
      )}

      
    </div>
  )
}

export default HomePage
