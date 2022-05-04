import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
  const [assistance, setAssistance] = useState([])

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
    }
    userData && console.log(userData)
  }, [disptach, navigate, user, userInfo, userData])

  function handleCheckbox(e) {
    // check if there was it before. if thats a case then remove it
    // else add it to assistance
  }

  return (
    <motion.div className='booking' variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <div className="blue-strip"></div>
      <main>
        {userData && <>
          <div className="top">
            <h1>Confirm Your Appointment</h1>
          </div>
          <div className="body">
            <h4>Appointment For: <span>{userData.name}</span></h4>
            <hr />
            <h4>Clinic</h4>
            <hr />
            <h4>Appointment Reason</h4>
            <p>Blood Test · 10 minutes </p>
            <hr />
            <h4>Appointment Date/Time</h4>
            <hr />
            <h4>Do you require any special assistance?</h4>
            <div className='assistance'>
              <div>
                <div className='checkbox' onClick={(e) => handleCheckbox(e)}>
                  <input type='checkbox' id='Sight' />
                  <img src={hearing} alt="Sight" /> Sight
                </div>
                <div className='checkbox'>
                  <input type='checkbox' id='Hearing' />
                  <img src={hearing} alt="Hearing" /> Hearing
                </div>
                <div className='checkbox'>
                  <input type='checkbox' id='Wheelchair' />
                  <img src={wheelchair} alt="Wheelchair" /> Wheelchair
                </div>
              </div>
              <div>
                <div className='checkbox'>
                  <input type='checkbox' id='Immobility' />
                  <img src={immobility} alt="Immobility" /> Immobility
                </div>
                <div className='checkbox'>
                  <input type='checkbox' id='Learning' />
                  <img src={learning_disabilities} alt="Learning Difficulties" /> Learning Difficulties
                </div>
                <div className='checkbox'>
                  <input type='checkbox' id='Translator' />
                  <img src={requires_translator} alt="Translator" /> Requires Translator/Interpreter
                </div>
              </div>
            </div>
            <hr />
            <h4>Additional Comments (optional):</h4>
            <textarea />
            <hr />
            <h4>Terms & Conditions of this Appointment</h4>
            <div className='checkbox'>
              <input type='checkbox' id='terms' />
              <label htmlFor='terms'> I agree to the terms of this appointment</label>
            </div>
            <div className='checkbox'>
              <input type='checkbox' id='gp' />
              <label htmlFor='gp'> I agree to bring my GP referral card/letter with me to this appointment</label>
            </div>
          </div>
        </>
        }
      </main >
    </motion.div >
  )
}

export default BookingScreen