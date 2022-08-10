import React from 'react'
import logo from "../images/Swiftqueue_Logo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [mobile, setMobile] = useState(false)

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  window.addEventListener('resize', handleResize)

  function handleResize() {
    if (window.innerWidth > 768) {
      setMobile(false)
    }
  }

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Swiftqueue" />
      </Link>
      <ul onAnimationEnd={() => console.log('ad')} className={mobile ? 'mobile-panel' : 'panel'} onClick={() => setMobile(false)}>
        <Link to={userInfo ? '/profile' : '/login'} className='btn btn-blue'>{userInfo ? 'Profile' : 'Login / Create Account'}</Link>
        <Link to="/search" className='btn btn-green'>Book an Appointment</Link>
      </ul>
      {mobile ? <>
        <button className='btn-menu' onClick={() => setMobile(false)}><FaTimes /></button>
      </> : <>
        <button className='btn-menu' onClick={() => setMobile(true)}><FaBars /></button>
      </>}
    </header>
  )
}
export default Header