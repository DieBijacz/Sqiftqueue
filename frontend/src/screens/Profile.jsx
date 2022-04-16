import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserDetails, logout } from '../actions/userActions'
import Container from '../components/Container'

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
    <Container>
      <div>{userInfo && userInfo.email}</div>
      <div>{user && user.email}</div>
      <button onClick={logoutHandler}>Logout</button>
    </Container>
  )
}

export default Profile