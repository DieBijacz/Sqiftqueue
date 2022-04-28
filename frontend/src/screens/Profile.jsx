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
  }, [dispatch, navigate, userInfo])

  return (
    <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <div className="container">
        <div className="profile">
          <div>{user && user.email}</div>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Profile