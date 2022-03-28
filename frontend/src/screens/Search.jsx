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
          <div className="item d-flex-column">
            <label htmlFor="search-gp">GP/Hospital Name or Location</label>
            <input type="text" id='search-gp' placeholder='Enter GP/Hospital name or locarion'/>
          </div>
          <div className="item d-flex-column">
            <label htmlFor=" Speciality"> Speciality</label>
            <input type="text" id=' Speciality' placeholder='Speciality'/>
          </div>
          <button className='btn btn-green'>Search</button>
        </div>

        <div className="icons">
          <div className="icon">
            <p> 1. Search for a GP/Clinic</p>
            <p>Swiftqueue is your hassle free guide to finding a clinic/GP near you.</p>
          </div>
          <div className="icon">
            <p>  2. Choose a Date and Time</p>
            <p>Find an appointment that suits you and see real time availability.</p>
          </div>
          <div className="icon">
            <p>  3. Easy Instant Booking</p>
            <p>Your appointment is instantly confirmed. Quickly reschedule or cancel if something changes.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Search