import React from 'react'
import Container from './Container'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="hero bg-image">
      <Container>
        <div className="card">
          <div className="card-text">
            <p>The complete enterprise scheduling platform for healthcare</p>
            <p>Patient Engagement made easy</p>
            <p>Working with Hospitals and Clinics we are revolutionising healthcare appointments to enable a more efficient patient centered process to deliver on growing patient expectations.</p>
          </div>
          <div className="buttons">
            <button className='btn' onClick={() => navigate('/helpdesk')}>Visit Our Help Centre</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>
      </Container>
      <div className="blue-strip">
        Online Appointments | Electronic Referrals | Automated Patient Flow | Real Time Metrics
      </div>
    </div>
  )
}

export default Hero