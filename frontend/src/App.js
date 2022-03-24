import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HelpDeskScreen from './screens/HelpDeskScreen'
import HomeScreen from './screens/HomeScreen'
import Search from './screens/Search'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/helpdesk' element={<HelpDeskScreen />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
