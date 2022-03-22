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
                  <div id='Ireland'>Ireland:</div>
                  <div id='UK'>UK:</div>
                </div>
                Click Here To Visit Our Help Centre
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