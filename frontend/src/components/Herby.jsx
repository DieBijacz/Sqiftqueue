import React from 'react'
import bandcf from '../images/Herby/bandcf.png'
import nhs from '../images/Herby/nhs.jpg'
import tallaght from '../images/Herby/tallaght.jpg'
import beaumount from '../images/Herby/beaumount.jpg'
import james from '../images/Herby/james.gif'
import hse from '../images/Herby/hse.png'

const Herby = () => {
  return (
    <div className="herby">
      <img src={beaumount} alt="beaumount" />
      <img src={tallaght} alt="tallaght" />
      <img src={hse} alt="hse" />
      <img src={nhs} alt="nhs" />
      <img src={bandcf} alt="bandcf" />
      <img src={james} alt="james" />
    </div>
  )
}

export default Herby