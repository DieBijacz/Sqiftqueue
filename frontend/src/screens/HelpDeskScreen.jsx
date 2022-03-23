import React from 'react'
import Container from '../components/Container'
import bgPhoto from "../images/hero.jpg"

const HelpDeskScreen = () => {
  return (
    <div className='helpdesk'>
      <div className="hero">
        <img src={bgPhoto} alt='...' />
        {/* SEARCH BAR GOES HERE */}
      </div>
      <div className="main">
        <Container>
          <div className="buttons">
            <button className='span-2'>
              <span>BLOOD TESTS</span>
              <span>General FAQ's for how to book.</span>
            </button>
            <button className='span-2'>
              <span>UK COVID19 VACCINATIONS</span>
              <span>General FAQ's for how to book.</span>
            </button>
            <button className='span-2'>
              <span>SCHOOL IMMUNISATIONS</span>
              <span>General FAQ's for how to book.</span>
            </button>
            <button className='span-3'>
              <span>RADIOLOGY (Ultrasounds)</span>
              <span>General FAQ's for how to book.</span>
            </button>
            <button className='span-3'>
              <span>All Other Appoinment Types</span>
              <span>Click here to see FAQ's for any other test types.</span>
            </button>
          </div>
        </Container>
      </div>
    </div>

  )
}

export default HelpDeskScreen