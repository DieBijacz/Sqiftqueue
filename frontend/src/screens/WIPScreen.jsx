import React from 'react'
import { motion } from 'framer-motion'

const WIPScreen = () => {
  return (
    <motion.div initial={{ width: '0' }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: 0.02 } }}>
      <h1>WORK IN PROGRESS</h1>
    </motion.div>
  )
}

export default WIPScreen