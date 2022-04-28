import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../animationsVariants'

const WIPScreen = () => {
  return (
    <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit'>
      <h1>WORK IN PROGRESS</h1>
    </motion.div>
  )
}

export default WIPScreen