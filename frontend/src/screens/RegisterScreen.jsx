import React, { useState } from 'react'
import Container from '../components/Container'
import Row from '../components/Row'
import Column from '../components/Column'
import bgPhoto from "../images/hero.jpg"

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')



  return (
    <div className='register-screen'>
      <div className="blue-strip"><h1>Register as Patient</h1></div>
      <section>
        <Container>
          <img src={bgPhoto} alt='...' className='bg-img' />
          <div className="card">
            <form>
              <Row>
                <button className='btn'>Already have an account? Sign in here</button>
              </Row>
              <hr />
              <Row>
                <Column>
                  <h1>Login Details</h1>
                  <div>
                    <label htmlFor="email">Email*</label>
                    <input type='email' id='email'></input>
                  </div>
                  <div>
                    <label htmlFor="confirm-email">Confirm Email*</label>
                    <input type='email' id='confirm-email'></input>
                  </div>
                  <div>
                    <label htmlFor="password">Password*</label>
                    <input type='password' id='password'></input>
                  </div>
                  <div>
                    <label htmlFor="confirm-password">Confirm Password*</label>
                    <input type='password' id='confirm-password'></input>
                  </div>
                </Column>
                <Column>
                  <h1>Please Note</h1>
                  <div id='please-note'>
                    <div>
                      Required fields are marked with an asterisk (*).
                      <hr />
                    </div>
                    <div>
                      Password must be at least 8 characters long and contain the following:
                      <ul>
                        <li>It doesn't really matter as there is no regex</li>
                        <li>Just wonder if some read this</li>
                        <li>If you do I hope you have a good day</li>
                      </ul>
                      <hr />
                    </div>
                    <div>
                      For security reasons we don't recommend re-using passwords you have for other sites
                      <hr />
                    </div>
                    <div>
                      Your mobile number is used to receive text reminders for your appointments
                      <hr />
                    </div>
                    <div>
                      <span>Email Address:</span> you share an email address with a family member you do not need to re-register! Just log in as normal and add your family member in either the confirmation page or your patient portal.
                    </div>
                  </div>
                </Column>
              </Row>
              <hr />
              <Row>
                <Column>
                  <h1>Personal Details</h1>
                  <div>
                    <label htmlFor="name">Fisrt Name*</label>
                    <input type='text' id='name'></input>
                  </div>
                  <div>
                    <label htmlFor="surname">Surname*</label>
                    <input type='text' id='surname'></input>
                  </div>
                  <div>
                    <label htmlFor="email">Date Of Birth ( DD / MM / YYYY )*</label>
                    <Row>
                      <div className="number-input">
                        <input type='number' id='day'></input>
                        <span>/</span>
                        <input type='number' id='month'></input>
                        <span>/</span>
                        <input type='number' id='year'></input>
                      </div>
                    </Row>
                    <p>Example: 24/01/1993</p>
                  </div>
                  <div>
                    <label htmlFor="mobile-number">Mobile</label>
                    <input type='number' id='mobile-number'></input>
                    <p>Please enter your mobile number without spaces or dashes</p>
                  </div>
                  <div>
                    <label htmlFor="home-number">Home Phone</label>
                    <input type='number' id='home-number'></input>
                  </div>
                </Column>
                <Column>
                  <h1>Optional Information</h1>
                  <div>
                    <label htmlFor="nhs-number">NHS Number</label>
                    <input type='text' id='nhs-number'></input>
                  </div>                <div>
                    <label htmlFor="postcode">Postcode</label>
                    <input type='text' id='postcode'></input>
                  </div>
                </Column>
              </Row>
            </form>
          </div>
          <button className='btn register-btn'>Register</button>
        </Container>
      </section>
    </div >
  )
}

export default RegisterScreen