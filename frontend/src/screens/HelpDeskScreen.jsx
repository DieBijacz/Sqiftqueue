import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageTransition } from '../animationsVariants'

const HelpDeskScreen = () => {
  const navigate = useNavigate()
  return (
    <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <div className="helpdesk">
        <div className="bg-image hero"></div>
        <div className="main">
          <div className="blocks">
            <button onClick={() => navigate('/wip')}>
              <p>BLOOD TESTS</p>
              <p>General FAQ's for how to book.</p>
            </button>
            <button onClick={() => navigate('/wip')}>
              <p>UK COVID19 VACCINATIONS</p>
              <p>General FAQ's for how to book.</p>
            </button>
            <button onClick={() => navigate('/wip')}>
              <p>SCHOOL IMMUNISATIONS</p>
              <p>General FAQ's for how to book.</p>
            </button>
            <button onClick={() => navigate('/wip')}>
              <p>RADIOLOGY (Ultrasounds)</p>
              <p>General FAQ's for how to book.</p>
            </button>
            <button onClick={() => navigate('/wip')}>
              <p>All Other Appoinment Types</p>
              <p>Click here to see FAQ's for any other test types.</p>
            </button>
          </div>
          <h2>Promoted articles</h2>
          <ul className='promoted-articles'>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>Blood Test Results</p>
            </li>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>How Do I Book My Blood Test Appointment?</p>
            </li>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>How To Cancel My Appointment</p>
            </li>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>I Didn't Receive An Activation Code As Part Of My Registration</p>
            </li>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>How Do I Reschedule My Appointment To Another Date Or Time? How Do I Change This Online?</p>
            </li>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>How Do I Reset My Password. I Cannot Login.</p>
            </li>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>How to check if I'm eligible for a Covid19 Vaccination Or a Covid Booster Vaccination</p>
            </li>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>Blood Test Results</p>
            </li>
            <li className='promoted-articles-item'>
              <p onClick={() => navigate('/wip')}>Blood Test Results</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>

  )
}

export default HelpDeskScreen