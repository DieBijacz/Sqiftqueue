import React from 'react'
import Hero from '../components/Hero'
import Herby from '../components/Herby'
import Container from '../components/Container'
import browserImage from '../images/browsers.png'
import onlineAppoitments from '../images/section-3/SQ_icon_online_appointments.png'
import integration from '../images/section-3/SQ_icon_integration-275.png'
import occupational from '../images/section-3/SQ_icon_occupational-health-275.png'
import results from '../images/section-3/SQ_icon_patient_results-275.png'
import security from '../images/section-3/SQ_icon_security-275.png'
import kiosk from '../images/section-3/SQ_icon_service_kiosk.png'
import macbook from '../images/macbook1.png'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const navigate = useNavigate()

  return (
    <>
      <Hero />
      <Herby />
      <hr />
      <div className="main-homescreen">
        <Container>
          <div className="main-section-2">
            <h1>Reduce Clinic Waiting Times from Day One</h1>
            <h3>Join #1 Online Healthcare Appointment Platform</h3>
            <button className='btn' onClick={() => navigate('/helpdesk')}>Visit Our Help Centre</button>
            <img src={browserImage} alt="browsers" />
          </div>
        </Container>
        <hr />
        <Container>
          <div className="main-section-3">
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
          </div>
        </Container>
          <div className="blue-strip">Improved Communication   |   Reduced DNA   |   Reduced Waiting Times   |   Cost Effective</div>
        <Container>
          <div className="main-section-4">
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
              <button className='btn' onClick={() => navigate('/helpdesk')}>Visit Our Help Centre</button>
            </div>
            <img src={macbook} alt="stats" />
          </div>
        </Container>
        <div className="blue-strip">Need help booking online?
          <button className='btn btn-green' onClick={() => navigate('/helpdesk')}>Visit Our Help Centre</button>
        </div>
      </div>
    </>
  )
}

export default HomeScreen