import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import { AnimatePresence, motion } from 'framer-motion'
import Modal from '../components/Modal/Modal'

const LoginScreen = () => {
  const [email, setEmail] = useState('masta@example.com') //!TO BE REMOVED
  const [password, setPassword] = useState('')

  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  // on SignIn
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    userInfo && navigate('/')
  }, [userInfo, navigate])

  return (
    <motion.div initial={{ width: '0' }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: 0.02 } }}>
      <div className='login-screen bg-image'>
        <div className="blue-strip">
          <h1>Login/Register</h1>
        </div>
        <section>
          {loading && 'LOADING...'}
          <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => null}>
            {openModal ? <Modal handleClose={() => setOpenModal(false)} text={
              <div className='modal-register'>
                <div>
                  <h1>Data Processing Consent</h1>
                  <hr />
                  <p>Swiftqueue are assigned to process the appointment information on behalf of the clinic you have chosen to book with. Swiftqueue is a registered Data Processor and will not use your information for any other reason other than the following:</p>
                  <ul>
                    <li>Booking your appointment</li>
                    <li>Sending you a confirmation and reminder notifications (these can be turned off within your patient portal)</li>
                    <li>Following up on any incomplete registrations</li>
                    <li>Support around your appointments</li>
                    <li>Following up on no shows</li>
                    <li>Anonymised statistics for the clinics</li>
                    <li>Recording patient referrals and referral letters and optional notifications of referrals (these can be turned off within the portal)</li>
                  </ul>
                  <p>By continuing to register you agree that Swiftqueue will process your information on behalf of the clinic. Swiftqueue never shares information with third parties.</p>
                  <p>Your continued consent can also be managed or revoked by you within your patient portal after you first register.</p>
                  <hr />
                  <h4>Why do you need my contact details?</h4>
                  <p>In order to register, we require you to enter your email (mandatory) and phone number (optional). We do not use that information for any purpose other than sending you notifications regarding appointments or creating your online account. These communication settings can be turned on or off within your patient portal from the 25th May 2018.</p>
                  <hr />
                </div>
                <div className="buttons">
                  <button onClick={() => setOpenModal(false)} className='btn'>I Do Not Agree (Go Back)</button>
                  <button onClick={() => navigate('/register')} className='btn btn-green'>I Agree (Proceed)</button>
                </div>
              </div>
            } />
              : (
                <motion.div className="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
                  <div className='side'>
                    <h1>Existing user login</h1>
                    <form onSubmit={submitHandler}>
                      <input value={email} type="text" autoFocus={true} placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                      <input value={password} type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                      <div>
                        <button className='btn'>I Forgot my Password</button>
                        <button className='btn btn-green'>Sign In</button>
                      </div>
                    </form>
                  </div>
                  <hr />
                  <div className='side'>
                    <h1>Don't have an account yet?</h1>
                    <button onClick={openModal ? () => setOpenModal(false) : () => setOpenModal(true)} className='btn register-btn'>Register here</button>
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </section>
        <div className="blue-strip">
          Need help booking online? <button className='btn btn-green'>Visit Our Help Centre</button>
        </div>
      </div >
    </motion.div >
  )
}

export default LoginScreen