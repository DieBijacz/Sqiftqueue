import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ClinicsList from './screens/ClinicsList'
import HelpDeskScreen from './screens/HelpDeskScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import Profile from './screens/Profile'
import Search from './screens/Search'
import WIPScreen from './screens/WIPScreen'

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/helpdesk' element={<HelpDeskScreen />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/clinicsmap' element={<ClinicsList />} />
          <Route path='/wip' element={<WIPScreen />} />
          <Route path='/login' element={<LoginScreen />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
