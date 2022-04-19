import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import Row from '../components/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { Map } from 'leaflet'

const ClinicsList = () => {
  const navigate = useNavigate()
  const disptach = useDispatch()

  const mapRef = useRef()
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

  return (
    <div className='clinics-map'>
      <div className='blue-strip'></div>
      <Container>
        <main>
          <div className="locations">
            {userData && userData.places.map(place => (
              <div key={place._id} className='location'>
                <>
                  id: {place._id} <br />
                  lat: {place.latitude} <br />
                  lat: {place.longitude} <br />
                </>
                <div className='align-right'>
                  <button value={place._id} className='icon' onClick={(e) => setLocationHandler(e)}><FontAwesomeIcon icon={faCrosshairs} /></button>
                  <div>
                    Next available appointment: <br />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='map'>
            {showLocation}
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
                    <Popup>
                      Location Id: {place._id} <br />
                      lat: {place.latitude} <br />
                      long: {place.longitude}
                    </Popup>
                  </Marker>
                })}
              </MapContainer>
            )}
          </div>
        </main>

      </Container>
    </div >
  )
}

export default ClinicsList
