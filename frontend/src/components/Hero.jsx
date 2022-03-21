import React from 'react'
import bgPhoto from "../images/hero.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <img src={bgPhoto} alt='...' />
      <div className="card">
        <div className="card-text">
          <p>The complete enterprise scheduling platform for healthcare</p>
          <p>Patient Engagement made easy</p>
          <p>Working with Hospitals and Clinics we are revolutionising healthcare appointments to enable a more efficient patient centered process to deliver on growing patient expectations.</p>
        </div>
        <div className="buttons">
          <button className='btn'>Visit Our Help Centre</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className="hero-bottom">
        Online Appointments | Electronic Referrals | Automated Patient Flow | Real Time Metrics
      </div>
    </div>
  )
}

export default Hero