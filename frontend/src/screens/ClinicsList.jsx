import React from 'react'
import Container from '../components/Container'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const ClinicsList = () => {
  const position = [51.505, -0.09]
  return (
    <div className='clinics-map'>
      <div className='blue-strip'></div>
      <Container>
        <main>
          <h2>lewa strona odpowiada</h2>
          <div className='map'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </main>

      </Container>
    </div>
  )
}

export default ClinicsList
