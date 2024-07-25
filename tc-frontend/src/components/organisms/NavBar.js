import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'
import coverimage from '../../assets/vector/default-monochrome.svg'
import {useSelector, useDispatch} from "react-redux"
import { logout } from '../../redux/userSlice'

const NavBar = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => {
      return state.user.user
      });

    const onLogout = () => {
        dispatch(logout())
      }


  return (
    <div className='navbar'>
        <img className='navbar-image' src={coverimage} alt='profile-img'></img>

        <ul className='navlist'>

        {user.isAuthenticated && (
            <>
                <li><Link className='navLink' to={'/createitinerary'}><p>Create Itinerary</p></Link></li>
                <li><Link className='navLink' to={'/mytrips'}><p>My Trips</p></Link></li>
                <li><Link className='navLink' onClick={onLogout}><p className='button-primary'>Log Out</p></Link></li>
            </>
        )}
        {!user.isAuthenticated && (
            <>
                <li><Link className='navLink' to={'/signup'}><p>Sign Up</p></Link></li>
                <li><Link className='navLink' to={'/login'}><p className='button-primary'>Log In</p></Link></li>
            </>
        )}
        </ul>


      
    </div>
  )
}

export default NavBar
