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
        <a href="/profile">Go To Your Account</a>
      </div>
    </Container>
  )
}
export default Header