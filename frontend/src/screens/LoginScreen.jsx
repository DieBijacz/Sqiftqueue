import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgPhoto from "../images/hero.jpg"

const LoginScreen = () => {
  const [showDataInfo, setShowDataInfo] = useState(false)
  const navigate = useNavigate()

  if (showDataInfo) {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        setShowDataInfo(false)
        document.removeEventListener('keydown', () => { })
      }
    })
  }

  return (
    <div className='login-screen'>
      <div className="blue-strip"><h1>Login/Register</h1></div>
      {showDataInfo && (
        <div className='register-data-info'>
          <div onClick={() => setShowDataInfo(false)} className="bg"></div>
          <div className="card">
            <h1>Data Processing Consent</h1>
            <hr />
            <p>Swiftqueue are assigned to process the appointment information on behalf of the clinic you have chosen to book with. Swiftqueue is a registered Data Processor and will not use your information for any other reason other than the following:</p>
            <ul>
              <li>Booking your appointment</li>
              <li>Sending you a confirmation and reminder notifications (these can be turned off within your patient portal)</li>
              <li>Following up on any incomplete registrations</li>
              <li>Support around your appointments</li>
              <li>Following up on no shows</li>
              <li>Anonymised statistics for the clinics</li>
              <li>Recording patient referrals and referral letters and optional notifications of referrals (these can be turned off within the portal)</li>
            </ul>
            <p>By continuing to register you agree that Swiftqueue will process your information on behalf of the clinic. Swiftqueue never shares information with third parties.</p>
            <p>Your continued consent can also be managed or revoked by you within your patient portal after you first register.</p>
            <hr />
            <h4>Why do you need my contact details?</h4>
            <p>In order to register, we require you to enter your email (mandatory) and phone number (optional). We do not use that information for any purpose other than sending you notifications regarding appointments or creating your online account. These communication settings can be turned on or off within your patient portal from the 25th May 2018.</p>
            <hr />
            <div className="buttons">
              <button onClick={() => setShowDataInfo(false)} className='btn'>I Do Not Agree (Go Back)</button>
              <button onClick={() => navigate('/register')} className='btn btn-green'>I Agree (Proceed)</button>
            </div>
          </div>
        </div>
      )}
      <section>
        <img src={bgPhoto} alt='...' />
        <div id='login' className="card">
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
            <button onClick={() => setShowDataInfo(true)} className='btn' id='register-btn'>Register here</button>
          </div>
        </div>

      </section >
      <div className="blue-strip">Need help booking online? <button className='btn btn-green'>Visit Our Help Centre</button></div>
    </div >
  )
}

export default LoginScreen