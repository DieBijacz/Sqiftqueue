import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}

export default App
