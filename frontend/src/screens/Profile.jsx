import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserDetails, logout } from '../actions/userActions'
import { motion } from 'framer-motion'
import { pageTransition } from '../animationsVariants'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // get loged in user id so based on that can fetch user Details
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector(state => state.userDetails)
  const { user } = userDetails

  const logoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    } else {
      dispatch(getUserDetails(userInfo._id)) //get user details
    }
    console.log(user)
  }, [dispatch, navigate, userInfo])

  return (
    <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <div className="blue-strip"><h1>Profile</h1></div>
      {user && (
        <div className="profile-page">
          <div className="user-details">
            <div>
              <div>{user && user.name}</div>
              <div>{user && user.email}</div>
            </div>
            <button className='btn btn-logout' onClick={logoutHandler}>Log out</button>
          </div>
          <div className="summary-panel">
            <div className="panel">
              <div className="top">Upcoming Appointments</div>
              <div className="body">{user.appointmets.length}</div>
            </div>
            <div className="panel">
              <div className="top">Active Referrals</div>
              <div className="body">0</div>
            </div>
            <div className="panel">
              <div className="top">Past Appointments</div>
              <div className="body">0</div>
            </div>
            <div className="panel">
              <div className="top">Cancelled Appointments</div>
              <div className="body">0</div>
            </div>
          </div>
          <div className="appointments">
            {user.appointmets.map((appointmet, index) => <div key={index} className='appointment'>
              <div className="info">
                <div className="appointment-left">
                  <h1>{appointmet.place.name}</h1>
                  <div>
                    Assistances: {appointmet.assistances.map(assistance => <span className='assistance'>{assistance}</span>)}
                  </div>
                </div>
                <div className="appointment-right">
                  {appointmet.time}
                </div>
              </div>
              <hr />
            </div>)}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Profile