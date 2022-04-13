import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLocation } from '../actions/userActions'
import Container from '../components/Container'
import Row from '../components/Row'

const Search = () => {
  const [myCurrentLocation, setMyCurrentLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const [allowed, setAllowed] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (myCurrentLocation) {
      console.log(myCurrentLocation)
      dispatch(userLocation(myCurrentLocation))

    } else {
      allowed && navigator.geolocation.getCurrentPosition((pos) => {
        setMyCurrentLocation([pos.coords.latitude, pos.coords.longitude])
      })
    }
  }, [navigate, myCurrentLocation, allowed])

  return (
    <div className="search-for-appointment">
      <Container>
        <Row>
          <div className="top">
            <div>
              <button onClick={() => setAllowed(true)}>Use my current location</button>
              {loading && <h1>You will be moved</h1>}
            </div>
            <span>Find a GP/Clinic and Book an Appointment</span>
            <span>Simple Instant Healthcare Bookings</span>
          </div>
        </Row>
        <Row>
          <div className="searchbar">
            <div className="item d-flex-column">
              <label htmlFor="search-gp">GP/Hospital Name or Location</label>
              <input type="text" id='search-gp' placeholder='Enter GP/Hospital name or locarion' />
            </div>
            <div className="item d-flex-column">
              <label htmlFor=" Speciality"> Speciality</label>
              <input type="text" id=' Speciality' placeholder='Speciality' />
            </div>
            <button className='btn btn-green'>Search</button>
          </div>
        </Row>
        <Row>
          <div className="icons">
            <div className="icon">
              <p>1. Search for a GP/Clinic</p>
              <p>Swiftqueue is your hassle free guide to finding a clinic/GP near you.</p>
            </div>
            <div className="icon">
              <p>2. Choose a Date and Time</p>
              <p>Find an appointment that suits you and see real time availability.</p>
            </div>
            <div className="icon">
              <p>3. Easy Instant Booking</p>
              <p>Your appointment is instantly confirmed. Quickly reschedule or cancel if something changes.</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Search