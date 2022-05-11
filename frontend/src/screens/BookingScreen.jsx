import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageTransition } from '../animationsVariants'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import hearing from '../images/icons/hearing.png'
import immobility from '../images/icons/immobility.png'
import learning_disabilities from '../images/icons/learning_disabilities.png'
import requires_translator from '../images/icons/requires_translator.png'
import wheelchair from '../images/icons/wheelchair.png'

const BookingScreen = () => {
  const params = useParams()
  const disptach = useDispatch()
  const navigate = useNavigate()

  const [userData, setUserData] = useState(null)
  const [assistances, setAssistances] = useState([])
  const [appointmentDetails, setAppointmentDetails] = useState(null)

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector(state => state.userDetails)
  const { user } = userDetails

  useEffect(() => {
    if (!userInfo) navigate('/login')
    if (!user) {
      disptach(getUserDetails(userInfo._id))
    } else {
      setUserData(user)
      if (appointmentDetails === null) {
        user.places.map(place => place.availableAppointments.map(a => a._id === params.id ? setAppointmentDetails({ place, time: a.time }) : ''))
      }
    }
  }, [disptach, navigate, user, userInfo, params, appointmentDetails])

  function handleCheckbox(newAssistance) {
    // check if there was it before. if thats a case then remove it else add it to assistances
    setAssistances(prevAssistances => prevAssistances.includes(newAssistance) ? prevAssistances.filter(assistance => assistance !== newAssistance) : [...prevAssistances, newAssistance])
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <motion.div className='booking' variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <div className="blue-strip"></div>
      <form onSubmit={handleSubmit}>
        {userData && <>
          <div className="top">
            <h1>Confirm Your Appointment</h1>
          </div>
          <div className="body">
            <h4>Appointment For: <span>{userData.name}</span></h4>
            <hr />
            <h4>Clinic: {appointmentDetails && <span>{appointmentDetails.place.name}</span>}</h4>
            <hr />
            <h4>Appointment Reason</h4>
            <p>Blood Test · 10 minutes </p>
            <hr />
            <h4>Appointment Time: {appointmentDetails && <span>{appointmentDetails.time}</span>}</h4>
            <hr />
            <h4>Do you require any special assistance?</h4>
            <div className='assistance'>
              <div>
                <div className='checkbox' >
                  <input type='checkbox' value='sight' id='Sight' onChange={(e) => handleCheckbox(e.target.value)} />
                  <img src={hearing} alt="Sight" /> <span>Sight</span>
                </div>
                <div className='checkbox'>
                  <input type='checkbox' value='hearing' id='Hearing' onChange={(e) => handleCheckbox(e.target.value)} />
                  <img src={hearing} alt="Hearing" /> <span>Hearing</span>
                </div>
                <div className='checkbox'>
                  <input type='checkbox' value='wheelchair' id='Wheelchair' onChange={(e) => handleCheckbox(e.target.value)} />
                  <img src={wheelchair} alt="Wheelchair" /> <span>Wheelchair</span>
                </div>
              </div>
              <div>
                <div className='checkbox'>
                  <input type='checkbox' value='immobility' id='Immobility' onChange={(e) => handleCheckbox(e.target.value)} />
                  <img src={immobility} alt="Immobility" /> <span>Immobility</span>
                </div>
                <div className='checkbox'>
                  <input type='checkbox' value='learning' id='Learning' onChange={(e) => handleCheckbox(e.target.value)} />
                  <img src={learning_disabilities} alt="Learning Difficulties" /> <span>Learning Difficulties</span>
                </div>
                <div className='checkbox'>
                  <input type='checkbox' value='translator' id='Translator' onChange={(e) => handleCheckbox(e.target.value)} />
                  <img src={requires_translator} alt="Translator" /> <span>Requires Translator/Interpreter</span>
                </div>
              </div>
            </div>
            <hr />
            <h4>Additional Comments (optional):</h4>
            <textarea />
            <hr />
            <h4>Terms & Conditions of this Appointment</h4>
            <div className='checkbox'>
              <input type='checkbox' id='terms' required />
              <label htmlFor='terms'>I agree to the terms of this appointment<span style={{ color: 'red' }}>*</span> </label>
            </div>
            <div className='checkbox'>
              <input type='checkbox' id='gp' />
              <label htmlFor='gp'> I agree to bring my GP referral card/letter with me to this appointment</label>
            </div>
            <hr />
            <div className="buttons">
              <Link to='/'>Cancel</Link>
              <button className='btn btn-green' type='submit'>Confirm</button>
            </div>
          </div>
        </>
        }
      </form >
    </motion.div >
  )
}

export default BookingScreen