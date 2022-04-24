import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const ClinicsList = () => {
  const navigate = useNavigate()
  const disptach = useDispatch()

  const [userData, setUserData] = useState(null)
  const [showLocation, setShowLocation] = useState()

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

  function setLocationHandler(e) {
    const location = userData.places.filter(p => p._id === e.currentTarget.value)[0]
    const coords = [location.latitude, location.longitude]
    setShowLocation(coords)
  }

  function GoTo({ location }) {
    const map = useMap()
    map.flyTo(location, 14, { duration: 1.5 })
    return null
  }

  function bookAppointmentHandler(e) {
    e.preventDefault()
  }

  return (
    <motion.div className='clinics-map' initial={{ width: '0' }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: 0.02 } }}>
      <div className='blue-strip'></div>
      <Container>
        <main>
          <div className="locations">
            {userData && userData.places.map(place => (
              <div key={place._id} className='location'>
                <>
                  {place.name} <br />
                  {`(${place.phone})`} <br />
                  8:00 - 18:00
                </>
                <div className='align-right'>
                  <button value={place._id} className='icon' onClick={(e) => setLocationHandler(e)}><FontAwesomeIcon icon={faCrosshairs} /></button>
                  <div>
                    Next available appointment: <br />
                    {place.availableAppointments.length > 0 && place.availableAppointments[0].time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='map'>
            {userData && (
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
                          <select onChange={(e) => console.log(e.target.value)}>
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
            )}
          </div>
        </main>
      </Container>
    </motion.div >
  )
}

export default ClinicsList
