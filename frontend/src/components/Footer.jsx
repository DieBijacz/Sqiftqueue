import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
            <div className="top split">
              <p>Contact Us</p>
              <p>Quick Links</p>
            </div>
            <div className="mid split">
              <div className="left">
                <p id='Ireland'>Ireland:</p>
                <p id='UK'>UK:</p>
                <a href="/helpdesk">Click Here To Visit Our Help Centre</a>
              </div>
              <div className="right">
                <div>Home</div>
                <div>Services</div>
                <div>About</div>
                <div>Contact</div>
              </div>
            </div>
            <hr />
            <div className="bottom">
              <p>2022 © Masta</p>
            </div>
        </Container>
      </div>
    </>
  )
}

export default Footer