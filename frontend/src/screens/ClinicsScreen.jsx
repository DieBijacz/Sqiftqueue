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
  const [searchRange, setSearchRange] = useState(10)

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
    while (generetedLocations.length < 10) {
      const newLocation = [coords[0] + randomNumber(), coords[1] + randomNumber(), id]
      generetedLocations.push(newLocation)
      id += 1
    }
    setAvailableLocations(generetedLocations)
  }

  function randomNumber() {
    return (Math.random() * searchRange / 10)
  }

  return (
    <div className='clinics-map'>
      <div className='blue-strip'></div>
      <Container>
        <main>
          <Row>
            <h2>lewa strona odpowiada</h2>
            <input value={searchRange} onChange={(e) => setSearchRange(e.target.value)} type='range' min={0} max={20} />
            <p>{searchRange}</p>
            <button onClick={() => console.log(genereteRandomLocations(userCoords))}>LOG</button>
          </Row>
          <div className='map'>
            {userCoords && (
              <MapContainer center={userCoords} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={userCoords}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
                {avaiableLocations.map(loc => {
                  return <Marker key={loc[2]} position={[loc[0], loc[1]]}>
                    <Popup>
                      {loc[2]}
                    </Popup>
                  </Marker>
                })}
              </MapContainer>
            )}
          </div>
        </main>

      </Container>
    </div>
  )
}

export default ClinicsList
