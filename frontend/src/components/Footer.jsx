import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="box">
            <div className="top">
              <div className="category">
                Contact Us
                <div className="contact">
                  <p id='Ireland'>Ireland:</p>
                  <p id='UK'>UK:</p>
                </div>
                <p>
                  Click Here To Visit Our Help Centre
                </p>
              </div>
              <div className="category">
                Quick Links
                  <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
              </div>
            </div>
            <hr />
            <div className="bottom">
              <p>2022 © Masta</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer