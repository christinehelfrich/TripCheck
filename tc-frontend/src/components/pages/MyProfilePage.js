import React from 'react'
import {useSelector} from "react-redux"

const MyProfile = () => {

  const user = useSelector((state) => {
    return state.user.user
    });
    console.log(user)
  
  return (
    <div>

        my profile!
      
    </div>
  )
}

export default MyProfile
