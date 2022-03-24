import React from 'react'
import logo from "../images/Swiftqueue_Logo.png"
import { useNavigate } from 'react-router-dom'
import Container from './Container'

const Header = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <div className="header">
        <img src={logo} alt="Swiftqueue" onClick={() => navigate('/')}/>
        <div className="panel">
          <a href="/profile">Go To Your Account</a>
          <button className='btn btn-green' onClick={()=>navigate('/search')}>Book an Appointment</button>
        </div>
      </div>
    </Container>
  )
}
export default Header