import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUserLocation } from '../actions/userActions'
import { motion } from 'framer-motion'
import { USER_LOCATION_RESET } from '../constants/userConstants'

const Search = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading: loadingUser, error, userInfo } = userLogin

  const updatedUserLocation = useSelector(state => state.updatedUserLocation)
  const { success } = updatedUserLocation

  useEffect(() => {
    if (!userInfo) navigate('/login')
    if (success) {
      dispatch({ type: USER_LOCATION_RESET })
      navigate('/clinicsmap')
    }
  }, [navigate, dispatch, userInfo, success])

  function updateLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      dispatch(updateUserLocation([pos.coords.latitude, pos.coords.longitude]))
    })
  }

  return (
    <motion.div className="search-for-appointment" initial={{ width: '0' }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: 0.02 } }}>
      <section>
        <div className="top">
          <div>
            <button onClick={() => updateLocation()}>Use my current location</button>
            {loadingUser && <h1>You will be moved</h1>}
          </div>
          <h1>Find a GP/Clinic and Book an Appointment</h1>
          <p>Simple Instant Healthcare Bookings</p>
        </div>
        <div className="searchbar">
          <div className="item">
            <label htmlFor="search-gp">GP/Hospital Name or Location</label>
            <input type="text" id='search-gp' placeholder='Enter GP/Hospital name or locarion' />
          </div>
          <div className="item">
            <label htmlFor=" Speciality"> Speciality</label>
            <input type="text" id=' Speciality' placeholder='Speciality' />
          </div>
          <button className='btn btn-green'>Search</button>
        </div>
        <div className="icons">
          <div className="icon">
            <h1>1. Search for a GP/Clinic</h1>
            <p>Swiftqueue is your hassle free guide to finding a clinic/GP near you.</p>
          </div>
          <div className="icon">
            <h1>2. Choose a Date and Time</h1>
            <p>Find an appointment that suits you and see real time availability.</p>
          </div>
          <div className="icon">
            <h1>3. Easy Instant Booking</h1>
            <p>Your appointment is instantly confirmed. Quickly reschedule or cancel if something changes.</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Search