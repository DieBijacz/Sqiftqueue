import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="side">
            <p>Contact Us</p>
            <div>
              <p><span>Ireland:</span> Eolas Building, Maynooth, Co. Kildare, Ireland</p>
              <p><span>UK:</span> The Gridiron Building, 1 Pancras SQ, London, N1C 4AG</p>
            </div>
            <Link to='/helpdesk'>Click Here To Visit Our Help Centre</Link>
          </div>
          <div className="side">
            <p>Quick Links</p>
            <div>
              <Link to='/'>Home</Link>
              <Link to='/search'>Services</Link>
              <Link to='/'>About</Link>
              <Link to='/'>Contact</Link>
            </div>
          </div>
        </div>
        <hr />
        <p>2022 © Swiftqueue | Terms of Use | Privacy Policy | Cookie Policy</p>
      </div>
    </div>
  )
}

export default Footer