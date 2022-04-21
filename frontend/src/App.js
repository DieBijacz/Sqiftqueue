import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ClinicsScreen from './screens/ClinicsScreen'
import HelpDeskScreen from './screens/HelpDeskScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import Profile from './screens/Profile'
import RegisterScreen from './screens/RegisterScreen'
import SearchScreen from './screens/SearchScreen'
import WIPScreen from './screens/WIPScreen'

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/wip' element={<WIPScreen />} />
          <Route path='/helpdesk' element={<HelpDeskScreen />} />
          <Route path='/search' element={<SearchScreen />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/clinicsmap' element={<ClinicsScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
