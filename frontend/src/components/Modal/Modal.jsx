import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'

let dropIn

const variants = [
  dropIn = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: .1, type: 'spring', damping: 25, stiffness: 500 } },
    exit: { y: '100vh', opacity: 0 },
  },
]

const Modal = ({ handleClose, text, variant = 0 }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='modal'
        variants={variants[`${variant}`]}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {text}
      </motion.div>
    </Backdrop>
  )
}

export default Modal