import React from 'react'
import Container from '../components/Container'

const Search = () => {
  return (
    <div className="search-for-appointment">
      <Container>
        <div className='top d-flex-column'>
          <span>Find a GP/Clinic and Book an Appointment</span>
          <span>Simple Instant Healthcare Bookings</span>
        </div>
        
        <div className="searchbar">
          <div className="d-flex-column">
            <label htmlFor="search-gp">GP/Hospital Name or Location</label>
            <input type="text" id='search-gp' placeholder='Enter GP/Hospital name or locarion'/>
          </div>
          <div className="d-flex-column">
            <label htmlFor="search-gp">GP/Hospital Name or Location</label>
            <input type="text" id='search-gp' placeholder='Enter GP/Hospital name or locarion'/>
          </div>
          <button className='btn'>Search</button>
        </div>
      </Container>
    </div>
  )
}

export default Search