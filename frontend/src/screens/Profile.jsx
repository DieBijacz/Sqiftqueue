import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../actions/userActions'
import Container from '../components/Container'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (!userInfo) navigate('/')
  })

  return (
    <Container>
      <div>{userInfo && userInfo.email}</div>
      <button onClick={logoutHandler}>Logout</button>
    </Container>
  )
}

export default Profile