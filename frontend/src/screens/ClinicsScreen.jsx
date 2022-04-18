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

  const [userCoords, setUserCoords] = useState(null)
  const [avaiableLocations, setAvailableLocations] = useState([])
  const [searchRange, setSearchRange] = useState(1)

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector(state => state.userDetails)
  const { user } = userDetails

  useEffect(() => {
    if (!userInfo) navigate('/login')
    if (!user) {
      disptach(getUserDetails(userInfo._id))
    } else {
      const updatedCoords = [Number(user.locations[0].latitude), Number(user.locations[0].longitude)]
      setUserCoords(updatedCoords)
      // genereteRandomLocations(updatedCoords)
    }
  }, [disptach, navigate, user, userInfo])

  function genereteRandomLocations(coords) {
    let generetedLocations = []
    let id = 1
    while (generetedLocations.length < (searchRange * 30)) {
      const newLocation = {
        id,
        latitude: coords[0] + randomNumber(),
        longitude: coords[1] + randomNumber(),
      }
      // const newLocation = [coords[0] + randomNumber(), coords[1] + randomNumber(), id]
      generetedLocations.push(newLocation)
      id += 1
    }
    console.log(generetedLocations)
    setAvailableLocations(generetedLocations)
  }

  function randomNumber() {
    return (Math.random() * (Math.random() > 0.5 ? -searchRange / 10 : searchRange / 10))
  }

  return (
    <div className='clinics-map'>
      <div className='blue-strip'></div>
      <Container>
        <main>
          <div className="locations">
            {avaiableLocations && avaiableLocations.map(loc => (
              <div className='location'>
                id: {loc.id} <br />
                lat: {loc.latitude} <br />
                lat: {loc.longitude} <br />
              </div>
            ))}
          </div>
          <div className='map'>
            <div>
              <input value={searchRange} onChange={(e) => setSearchRange(e.target.value)} type='range' min={1} max={5} />
              <button className='btn btn-green' onClick={() => genereteRandomLocations(userCoords)}>LOG</button>
            </div>
            {userCoords && (
              <MapContainer center={userCoords} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={userCoords}>
                  <Popup>
                    You are here!
                  </Popup>
                </Marker>
                {avaiableLocations.map(loc => {
                  return <Marker key={loc.id} riseOnHover position={[loc.latitude, loc.longitude]}>
                    <Popup>
                      Location Id: {loc.id} <br />
                      lat: {loc.latitude.toFixed(2)} <br />
                      long: {loc.longitude.toFixed(2)}
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
