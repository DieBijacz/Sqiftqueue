import React from 'react'
import Container from '../components/Container'
import bgPhoto from "../images/hero.jpg"

const HelpDeskScreen = () => {
  return (
    <div className='helpdesk'>
      <div className="hero">
        <img src={bgPhoto} alt='...' />
        {/* SEARCH BAR GOES HERE */}
      </div>
      <div className="main">
        <Container>
          <div className="buttons">
            <button className='btn span-2 blocks-item'>
              <span>BLOOD TESTS</span>
              <span>General FAQ's for how to book.</span>
            </button>
            <button className='btn span-2 blocks-item'>
              <span>UK COVID19 VACCINATIONS</span>
              <span>General FAQ's for how to book.</span>
            </button>
            <button className='btn span-2 blocks-item'>
              <span>SCHOOL IMMUNISATIONS</span>
              <span>General FAQ's for how to book.</span>
            </button>
            <button className='btn span-3 blocks-item'>
              <span>RADIOLOGY (Ultrasounds)</span>
              <span>General FAQ's for how to book.</span>
            </button>
            <button className='btn span-3 blocks-item'>
              <span>All Other Appoinment Types</span>
              <span>Click here to see FAQ's for any other test types.</span>
            </button>
          </div>
          <h3>Promoted articles</h3>
          <ul className='promoted-articles'>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">Blood Test Results</a>
            </li>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">How Do I Book My Blood Test Appointment?</a>
            </li>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">How To Cancel My Appointment</a>
            </li>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">I Didn’t Receive An Activation Code As Part Of My Registration</a>
            </li>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">
How Do I Reschedule My Appointment To Another Date Or Time? How Do I Change This Online?</a>
            </li>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">
How Do I Reset My Password. I Cannot Login.</a>
            </li>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">
How to check if I'm eligible for a Covid19 Vaccination Or a Covid Booster Vaccination</a>
            </li>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">Blood Test Results</a>
            </li>
            <li className='promoted-articles-item'>
              <a href="/helpdesk">Blood Test Results</a>
            </li>
          </ul>
        </Container>
      </div>
    </div>

  )
}

export default HelpDeskScreen