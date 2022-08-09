import React from 'react'
import logo from "../images/Swiftqueue_Logo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Swiftqueue" />
      </Link>
      <div className="panel">
        <Link to={userInfo ? '/profile' : '/login'}>
          <button className='btn btn-blue'>{userInfo ? 'Profile' : 'Login / Create Account'}</button>
        </Link>
        <Link to="/search">
          <button className='btn btn-green'>Book an Appointment</button>
        </Link>
      </div>
    </div>
  )
}
export default Header