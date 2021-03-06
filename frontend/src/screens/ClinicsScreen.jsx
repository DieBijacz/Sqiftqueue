import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import { motion } from 'framer-motion'
import { itemTimes, pageTransition } from '../animationsVariants'
import { item } from '../animationsVariants'

const ClinicsList = () => {
  const navigate = useNavigate()
  const disptach = useDispatch()

  const [userData, setUserData] = useState(null)
  const [showLocation, setShowLocation] = useState()
  const [showMoreInfo, setShowMoreInfo] = useState(null)
  const [bookingTime, setBookingTime] = useState(null)

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector(state => state.userDetails)
  const { user } = userDetails

  // Variants for framer-motion
  const container = {
    show: {
      transition: {
        staggerChildren: .2,
      }
    }
  }

  useEffect(() => {
    if (!userInfo) navigate('/login')
    if (!user) {
      disptach(getUserDetails(userInfo._id))
    } else {
      setUserData(user)
    }
  }, [disptach, navigate, user, userInfo, userData])

  function GoTo({ location }) {
    const map = useMap()
    map.flyTo(location, 14, { duration: 1.5 })
    return null
  }

  function bookAppointmentHandler(e) {
    e.preventDefault()
    bookingTime && navigate(`/booking/${bookingTime}`)
  }

  function setLocationHandler(e, place) {
    setBookingTime(e.target.value)
    setShowLocation([place.latitude, place.longitude])
  }

  function locationClickHandler(place, e) {
    e.stopPropagation()
    setShowLocation([place.latitude, place.longitude])
    setShowMoreInfo(() => showMoreInfo === place._id ? null : place._id)
  }

  return (
    <motion.div className='clinics-map' variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <div className='blue-strip'></div>
      <main>
        {userData && (
          <>
            <div className='map'>
              <MapContainer center={[51.30, -0.7]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <GoTo location={showLocation ? showLocation : [userData.locations[0].latitude, userData.locations[0].longitude]} />
                <Marker position={[userData.locations[0].latitude, userData.locations[0].longitude]}>
                  <Popup>
                    You are here!
                  </Popup>
                </Marker>
                {userData.places.map(place => {
                  return <Marker key={place._id} riseOnHover position={[place.latitude, place.longitude]}>
                    <Popup className='popup'>
                      <span>{place.name}</span> <br />
                      {`(${place.phone})`} <br />
                      <div className="popup-bottom">
                        <form onSubmit={(e) => bookAppointmentHandler(e)}>
                          Next available time: <br />
                          <select onChange={(e) => setLocationHandler(e, place)}>
                            <option>Select time</option>
                            {place.availableAppointments.map(a => <option key={a._id} value={a._id}>{a.time}</option>)}
                          </select>
                          <br />
                          <button type='submit' className='btn'>Book an appointment</button>
                        </form>
                      </div>
                    </Popup>
                  </Marker>
                })}
              </MapContainer>
            </div>
            <motion.div className="locations" variants={container} initial='hidden' animate='show' exit='exit' >
              {userData.places.map(place => (
                <motion.div key={place._id} className='location' onClick={(e) => locationClickHandler(place, e)} variants={item} whileHover={{ scale: 1.02 }}>
                  <div className='top'>
                    <div>
                      <h1 className='location-place-name'>{place.name}</h1> <br />
                      {`(${place.phone})`} <br />
                      8:00 - 18:00
                    </div>
                    <div>
                      <div className='top-right'>
                        <p>Next available appointment:</p> <br />
                        {place.availableAppointments.length > 0 && place.availableAppointments[0].time}
                      </div>
                    </div>
                  </div>
                  {showMoreInfo === place._id && (
                    <motion.div className="more-info" key={place._id} variants={itemTimes} initial='hidden' animate='show' exit='exit'>
                      <h1>Times available:</h1>
                      {place.availableAppointments.map(ap => <div value={ap._id} onClick={() => navigate(`/booking/${ap._id}`)} className='location-time-available' key={ap._id}>{ap.time}</div>)}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </main >
    </motion.div >
  )
}

export default ClinicsList
