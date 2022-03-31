import React from 'react'
import bgPhoto from "../images/hero.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'

const LoginScreen = () => {
  return (
    <div className='login-screen'>
      <div className="blue-strip"><h1>Login/Register</h1></div>
      <section>
        <img src={bgPhoto} alt='...' />
        <div className="card" id='roles' >
          <h1>Select your Role</h1>
          <div className="options">
            <div className="option">
              <i className="fa-solid fa-user" id='icon'></i>
              <button className='btn btn-green'>Patient</button>
              <p>Login to view, edit or cancel your appointment(s)</p>
            </div>
            <div className="option">
              <i className="fa-solid fa-hospital" id='icon'></i>
              <button className='btn btn-green'>Clinic</button>
              <p>Login to manage your clinics</p>
            </div>
            <div className="option">
              <FontAwesomeIcon icon={faUserDoctor} id='icon' />
              <button className='btn btn-green'>GP</button>
              <p>Login to view or create patient referrals/appointments</p>
            </div>
          </div>
        </div>
        <div id='login' className="card active">
          <div className='box'>
            <h1>Existing user login</h1>
            <form>
              <input type="text" />
              <input type="password" />
              <div className="buttons">
                <button className='btn'>I Forgot my Password</button>
                <button className='btn btn-green'>Sign In</button>
              </div>
            </form>
          </div>
          <hr />
          <div className='box'>
            <h1>Are you a new user?</h1>
            <button className='btn' id='register-btn'>Register here</button>
          </div>
        </div>
      </section >
      <div className="blue-strip">Need help booking online? <button className='btn btn-green'>Visit Our Help Centre</button></div>
    </div >
  )
}

export default LoginScreen