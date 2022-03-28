import React from 'react'
import logo from "../images/Swiftqueue_Logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Swiftqueue"/>
      </Link>
      <div className="panel">
        <Link to="/profile">Go To Your Account</Link>
        <Link to="/search">
          <button className='btn btn-green'>Book an Appointment</button>
        </Link>
      </div>
    </div>
  )
}
export default Header