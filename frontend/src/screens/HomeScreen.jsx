import React from 'react'
import Hero from '../components/Hero'
import Herby from '../components/Herby'
import browserImage from '../images/browsers.png'
import Container from '../components/Container'

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Herby />
      <hr />
      <Container>
        <div className="main-section-2">
            <div className="text">
              <p>Reduce Clinic Waiting Times from Day One</p>
              <p>Join #1 Online Healthcare Appointment Platform</p>
            </div>
            <button className='btn'>Visit Our Help Centre</button>
            <img src={browserImage} alt="browsers" />
        </div>
      </Container>
    </>
  )
}

export default HomeScreen