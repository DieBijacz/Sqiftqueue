import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="hero">
      <div className="container">
        <div className="card">
          <div className="card-text">
            <h2>The complete enterprise scheduling platform for healthcare</h2>
            <h3>Patient Engagement made easy</h3>
            <h4>Working with Hospitals and Clinics we are revolutionising healthcare appointments to enable a more efficient patient centered process to deliver on growing patient expectations.</h4>
          </div>
          <div className="buttons">
            <button className='btn' onClick={() => navigate('/helpdesk')}>Visit Our Help Centre</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>
      </div>
      <div className="blue-strip">
        Online Appointments | Electronic Referrals | Automated Patient Flow | Real Time Metrics
      </div>
    </div>
  )
}

export default Hero