import React from 'react'
import bandcf from '../images/Herby/bandcf.png'
import nhs from '../images/Herby/nhs.jpg'
import tallaght from '../images/Herby/tallaght.jpg'
import beaumount from '../images/Herby/beaumount.jpg'
import james from '../images/Herby/james.gif'
import Container from './Container'

const Herby = () => {
  return (
    <Container>
      <div className="herby">
        <img src={james} alt="james" />
        <img src={beaumount} alt="beaumount" />
        <img src={tallaght} alt="tallaght" />
        <img src={nhs} alt="nhs" />
        <img src={bandcf} alt="bandcf" />
      </div>
    </Container>
  )
}

export default Herby