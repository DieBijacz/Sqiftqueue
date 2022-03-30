import React from 'react'
import Container from '../components/Container'
import bgPhoto from "../images/hero.jpg"

const HelpDeskScreen = () => {
  return (
    <div className='helpdesk'>
      <img src={bgPhoto} alt='...' />
      <Container>
        <div className="main">
            <div className="blocks">
              <a href='/wip'>
                <span>BLOOD TESTS</span>
                <p>General FAQ's for how to book.</p>
              </a>
              <a href='/wip'>
                <span>UK COVID19 VACCINATIONS</span>
                <p>General FAQ's for how to book.</p>
              </a>
              <a href='/wip'>
                <span>SCHOOL IMMUNISATIONS</span>
                <p>General FAQ's for how to book.</p>
              </a>
              <a href='/wip'>
                <span>RADIOLOGY (Ultrasounds)</span>
                <p>General FAQ's for how to book.</p>
              </a>
              <a href='/wip'>
                <span>All Other Appoinment Types</span>
                <p>Click here to see FAQ's for any other test types.</p>
              </a>
            </div>
            <h2>Promoted articles</h2>
            <ul className='promoted-articles'>
              <li className='promoted-articles-item'>
                <a href="/wip">Blood Test Results</a>
              </li>
              <li className='promoted-articles-item'>
                <a href="/wip">How Do I Book My Blood Test Appointment?</a>
              </li>
              <li className='promoted-articles-item'>
                <a href="/wip">How To Cancel My Appointment</a>
              </li>
              <li className='promoted-articles-item'>
                <a href="/wip">I Didn't Receive An Activation Code As Part Of My Registration</a>
              </li>
              <li className='promoted-articles-item'>
                <a href="/wip">How Do I Reschedule My Appointment To Another Date Or Time? How Do I Change This Online?</a>
              </li>
              <li className='promoted-articles-item'>
                <a href="/wip">How Do I Reset My Password. I Cannot Login.</a>
              </li>
              <li className='promoted-articles-item'>
                <a href="/wip">How to check if I'm eligible for a Covid19 Vaccination Or a Covid Booster Vaccination</a>
              </li>
              <li className='promoted-articles-item'>
                <a href="/wip">Blood Test Results</a>
              </li>
              <li className='promoted-articles-item'>
                <a href="/wip">Blood Test Results</a>
              </li>
            </ul>
        </div>
        </Container>
    </div>

  )
}

export default HelpDeskScreen