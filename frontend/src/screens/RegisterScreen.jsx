import React from 'react'
import Container from '../components/Container'
import bgPhoto from "../images/hero.jpg"

const RegisterScreen = () => {
  return (
    <div className='register-screen'>
      <img src={bgPhoto} alt='...' />
      <form>
        <div className="card">

          <div className="row">
            <button className='btn'>Already have an account? Sign in here</button>
          </div>

          <div className="row">
            <div className="column">
              <h1>Login Details</h1>
              <div>
                <label htmlFor="email">Email</label>
                <input type='email' id='email'></input>
              </div>
              <div>
                <label htmlFor="confirm-password">Confirm Email</label>
                <input type='email' id='confirm-password'></input>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type='password' id='password'></input>
              </div>
              <div>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type='password' id='confirm-password'></input>
              </div>
            </div>
            <div className="column">
              <h1>Please Note</h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores voluptas assumenda modi! Quisquam aut eveniet tempore id sit quaerat aspernatur, et vero dolorem nulla harum possimus expedita sint aperiam fugiat, explicabo voluptates. Commodi, sapiente iure tenetur ipsam sequi tempore quam totam repudiandae perspiciatis deserunt velit consequatur delectus incidunt. Tenetur repellendus magnam odit architecto deserunt adipisci maiores in excepturi itaque earum facere sequi nemo suscipit alias eveniet rem, error quidem! Iure expedita maxime consequatur ipsum sint incidunt asperiores recusandae quod aspernatur. Ipsa veritatis ipsam ex neque dignissimos, cum nostrum architecto repellendus dolorem nesciunt aut quo unde excepturi illum, doloribus aspernatur ad.
            </div>
          </div>

          <div className="row">
            <div className="column">
              <h1>Personal Details</h1>
              <div>
                <label htmlFor="name">Fisrt Name</label>
                <input type='text' id='name'></input>
              </div>
              <div>
                <label htmlFor="surname">Surname</label>
                <input type='text' id='surname'></input>
              </div>
              <div>
                <label htmlFor="email">Date Of Birth(DD/MM/YYYY)</label>
                <div className="row">
                  <input className='number-input' type='number' id='day'></input>
                  <input className='number-input' type='number' id='month'></input>
                  <input className='number-input' type='number' id='year'></input>
                </div>
                Example: 24/01/1993
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type='email' id='email'></input>
              </div>
            </div>
            <div className="column">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, officia doloremque vero ex quia doloribus a quaerat debitis quibusdam aliquid.
            </div>
          </div>

        </div>
      </form>
    </div >
  )
}

export default RegisterScreen