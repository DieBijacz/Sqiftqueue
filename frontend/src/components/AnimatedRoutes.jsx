import React from 'react'
import { useLocation, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ClinicsScreen from '../screens/ClinicsScreen'
import HelpDeskScreen from '../screens/HelpDeskScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import Profile from '../screens/Profile'
import RegisterScreen from '../screens/RegisterScreen'
import SearchScreen from '../screens/SearchScreen'
import WIPScreen from '../screens/WIPScreen'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/wip' element={<WIPScreen />} />
        <Route path='/helpdesk' element={<HelpDeskScreen />} />
        <Route path='/search' element={<SearchScreen />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/clinicsmap' element={<ClinicsScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes