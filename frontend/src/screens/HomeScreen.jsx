import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Herby from '../components/Herby'
import browserImage from '../images/browsers.png'
import onlineAppoitments from '../images/section-3/SQ_icon_online_appointments.png'
import integration from '../images/section-3/SQ_icon_integration-275.png'
import occupational from '../images/section-3/SQ_icon_occupational-health-275.png'
import results from '../images/section-3/SQ_icon_patient_results-275.png'
import security from '../images/section-3/SQ_icon_security-275.png'
import kiosk from '../images/section-3/SQ_icon_service_kiosk.png'
import macbook from '../images/macbook1.png'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fromLeft, pageTransition } from '../animationsVariants'

const HomeScreen = () => {
  const navigate = useNavigate()
  const controls = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const [sec2, inSec2] = useInView()
  const [sec3, inSec3] = useInView()
  const [sec4, inSec4] = useInView()

  // for animations
  useEffect(() => {
    if (inSec2) { controls.start('show') }
    if (inSec3) { controls2.start('show') }
    if (inSec4) { controls3.start('show') }
  }, [controls, controls2, controls3, inSec2, inSec3, inSec4])

  return (
    <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <Hero />
      <Herby />
      <hr />
      <div className="main-homescreen">
        <motion.div className="main-section-2 section" ref={sec2} variants={fromLeft} initial='hidden' animate={controls}>
          <h1>Reduce Clinic Waiting Times from Day One</h1>
          <h3>Join #1 Online Healthcare Appointment Platform</h3>
          <button className='btn' onClick={() => navigate('/helpdesk')}>Visit Our Help Centre</button>
          <img src={browserImage} alt="browsers" />
        </motion.div>
        <hr />
        <motion.div className="main-section-3 section" ref={sec3} variants={fromLeft} initial='hidden' animate={controls2}>
          <h1>See how Swiftqueue can improve your clinic today</h1>
          <h3>Create a seamless and integrated patient pathway experience</h3>
          <div className="icons">
            <div className="box">
              <img src={onlineAppoitments} alt="Online Appointments" />
              <h4>Online Appointments</h4>
              <p>Provide 24/7 visibility of available appointments, allow patients to book next visit in real time for all ages and technical ranges.</p>
            </div>
            <div className="box">
              <img src={integration} alt="Integration" />
              <h4>Seamless Integration</h4>
              <p>Swiftqueue can integrate with your PAS system through our bespoke API and HL7 integration, providing a full end to end solution.</p>
            </div>
            <div className="box">
              <img src={occupational} alt="Occupational Health" />
              <h4>Clinic Administration</h4>
              <p>Swiftqueue provides easy to use efficient solutions to manage clinic workflows and KPI's built on years of healthcare staff feedback & best practices.</p>
            </div>
            <div className="box">
              <img src={kiosk} alt="kiosk" />
              <h4>Touch Screen Tablet & Kiosk Check In</h4>
              <p>Reduce administration and data entry errors through easy to use patient self check in and validation of patient and appointment information.</p>
            </div>
            <div className="box">
              <img src={security} alt="Security" />
              <h4>Fast and Secure</h4>
              <p>Keeping your data secure is our number one priority. Our hosted centres are certified ISO27001 and comply with NHS Information Governance standards.</p>
            </div>
            <div className="box">
              <img src={results} alt="Patient results" />
              <h4>Patient Results</h4>
              <p>Swiftqueue provides a market leading patient portal, where patients can view, reschedule, cancel appointments and view specific results.</p>
            </div>
          </div>
        </motion.div>
        <div className="blue-strip">Improved Communication   |   Reduced DNA   |   Reduced Waiting Times   |   Cost Effective</div>
        <motion.div className="main-section-4 section" ref={sec4} variants={fromLeft} initial='hidden' animate={controls3}>
          <div className='section-4-info'>
            <h1>Co-ordinated Healthcare... Empowered</h1>
            <p>Growing demand... higher expectations... more patient interactions.
              This is the reality of healthcare today. Swiftqueue has delivered an enterprise
              platform to better manage the requirements of everyone involved - clinicians,
              administrators, health managers and patients - that empowers everyone to have:</p>
            <ul>
              <li>Certainty & Consistency</li>
              <li>Flexibility & Control</li>
              <li>Clarity & Transparency</li>
              <li>Integrated Solutions</li>
            </ul>
            <p>Delivering an all round greater personal experience.</p>
          </div>
          <img src={macbook} alt="stats" />
        </motion.div>
        <div className="blue-strip">Need help booking online?
          <button className='btn btn-green' onClick={() => navigate('/helpdesk')}>Visit Our Help Centre</button>
        </div>
      </div>
    </motion.div >
  )
}

export default HomeScreen