import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { USER_REGISTER_RESET } from '../constants/userConstants'
import { motion } from 'framer-motion'
import { pageTransition } from '../animationsVariants'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [homePhone, setHomePhone] = useState('')

  const disptach = useDispatch()
  const navigate = useNavigate()

  const { loading, success, error } = useSelector(state => state.userRegister)

  useEffect(() => {
    if (success) {
      disptach({ type: USER_REGISTER_RESET })
      navigate('/')
    }
  }, [success, disptach, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      if (email === confirmEmail) {
        disptach(register(name, email, password))
      }
    }
  }

  return (
    <motion.div className='register-screen bg-image' variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <div className="blue-strip"><h1>Register as Patient</h1></div>
      <motion.div className="card" initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        <form onSubmit={submitHandler}>
          <button className='btn'>Already have an account? Sign in here</button>
          <hr />
          <div className='top'>
            <div className="content">
              <div className='field'>
                <h1>Login Details</h1>
                <label htmlFor="email">Email*</label>
                <input value={email} type='email' id='email' onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='field'>
                <label htmlFor="confirm-email">Confirm Email*</label>
                <input value={confirmEmail} type='email' id='confirm-email' onChange={(e) => setConfirmEmail(e.target.value)}></input>
              </div>
              <div className='field'>
                <label htmlFor="password">Password*</label>
                <input value={password} type='password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className='field'>
                <label htmlFor="confirm-password">Confirm Password*</label>
                <input value={confirmPassword} type='password' id='confirm-password' onChange={(e) => setConfirmPassword(e.target.value)}></input>
              </div>
            </div>
            <div id='please-note' className='content'>
              <h1>Please Note</h1>
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
          </div>
          <hr />
          <div className="mid">
            <div className="content">
              <h1>Personal Details</h1>
              <div className='field'>
                <label htmlFor="name">Fisrt Name*</label>
                <input value={name} type='text' id='name' onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div className='field'>
                <label htmlFor="surname">Surname*</label>
                <input value={surname} type='text' id='surname' onChange={(e) => setSurname(e.target.value)}></input>
              </div>
              <div>
                <label htmlFor="email">Date Of Birth ( DD / MM / YYYY )*</label>
                <div className="number-input">
                  <input type='number' id='day'></input>
                  <span>/</span>
                  <input type='number' id='month'></input>
                  <span>/</span>
                  <input type='number' id='year'></input>
                </div>
                <p>Example: 24/01/1993</p>
              </div>
              <div className='field'>
                <label htmlFor="mobile-number">Mobile</label>
                <input value={mobile} type='number' id='mobile-number' onChange={(e) => setMobile(e.target.value)}></input>
                <p>Please enter your mobile number without spaces or dashes</p>
              </div>
              <div className='field'>
                <label htmlFor="home-number">Home Phone</label>
                <input value={homePhone} type='number' id='home-number' onChange={(e) => setHomePhone(e.target.value)}></input>
              </div>
            </div>
            <div className="content">
              <h1>Optional Information</h1>
              <div className='field'>
                <label htmlFor="nhs-number">NHS Number</label>
                <input type='text' id='nhs-number'></input>
              </div>
              <div className='field'>
                <label htmlFor="postcode">Postcode</label>
                <input type='text' id='postcode'></input>
              </div>
            </div>
          </div>
          {loading ? <div>LOADING....</div> :
            <button type='submit' className='btn register-btn'>Register Now</button>
          }
        </form>
      </motion.div >
    </motion.div >
  )
}

export default RegisterScreen