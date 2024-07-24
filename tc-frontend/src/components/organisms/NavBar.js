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

      console.log(user)

  return (
    <div className='navbar'>
        <img className='navbar-image' src={coverimage} alt='profile-img'></img>

        <ul className='navlist'>

        {user.isAuthenticated && (
            <>
                <li><Link className='navLink' to={'/home'}><p>My Trips</p></Link></li>
                <li><Link className='navLink' onClick={onLogout}><p>Log Out</p></Link></li>
            </>
        )}
        {!user.isAuthenticated && (
            <>
                <li><Link className='navLink' to={'/signup'}><p>Sign Up</p></Link></li>
                <li><Link className='navLink button-primary' to={'/login'}><p>Log In</p></Link></li>
            </>
        )}
        </ul>


      
    </div>
  )
}

export default NavBar
