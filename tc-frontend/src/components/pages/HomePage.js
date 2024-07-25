import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useLocation } from 'react-router-dom'

const HomePage = () => {

    const {state} = useLocation()
    const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false)
    const [showCreateSuccessMessage, setShowCreateSuccessMessage] = useState(false)
    const [showLoginSuccessMessage, setShowLoginSuccessMessage] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((state) => {
      return state.user.user
      });
  
    useEffect(() => {
        
      if(state?.showDeleteSuccess){
          setShowDeleteSuccessMessage(true)
        setTimeout(() => {
          setShowDeleteSuccessMessage(false)
        }, 2000)
      }
      if(state?.showCreateSuccess){
        setShowCreateSuccessMessage(true)
      setTimeout(() => {
        setShowCreateSuccessMessage(false)
      }, 2000)
      }
  
      if(state?.showLoginSuccess){
      setShowLoginSuccessMessage(true)
    setTimeout(() => {
      setShowLoginSuccessMessage(false)
    }, 2000)
      }
  
    }, [state])


  return (
    <div>
      {showCreateSuccessMessage && (<div className='success-panel'>Successfully Created!</div>)}
      {showDeleteSuccessMessage && (<div className='success-panel'>Successfully Deleted!</div>)}
      {showLoginSuccessMessage && (<div className='success-panel'>Successfully Logged In!</div>)}

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
