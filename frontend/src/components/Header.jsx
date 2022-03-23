import React from 'react'
import logo from "../images/Swiftqueue_Logo.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="header">
      <img src={logo} alt="Swiftqueue" onClick={() => navigate('/')}/>
    </div>
  )
}
export default Header