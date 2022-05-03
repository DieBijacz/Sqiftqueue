import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageTransition } from '../animationsVariants'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'

const BookingScreen = () => {
  const params = useParams()
  const disptach = useDispatch()
  const navigate = useNavigate()

  const [userData, setUserData] = useState(null)

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
          </div>
        </>
        }
      </main>
    </motion.div>
  )
}

export default BookingScreen