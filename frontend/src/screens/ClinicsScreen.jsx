import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import Row from '../components/Row'

const ClinicsList = () => {
  const navigate = useNavigate()
  const disptach = useDispatch()

  const [searchRange, setSearchRange] = useState(1)
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
    console.log(userData)
  }, [disptach, navigate, user, userInfo, userData])

  return (
    <div className='clinics-map'>
      <div className='blue-strip'></div>
      <Container>
        <main>
          <div className="locations">
            {userData && userData.places.map(place => (
              <div key={place._id} className='location'>
                id: {place._id} <br />
                lat: {place.latitude} <br />
                lat: {place.longitude} <br />
              </div>
            ))}
          </div>
          <div className='map'>
            <div>
              <input value={searchRange} onChange={(e) => setSearchRange(e.target.value)} type='range' min={1} max={5} />
            </div>
            {userData && (
              <MapContainer center={[userData.locations[0].latitude, userData.locations[0].longitude]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
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
