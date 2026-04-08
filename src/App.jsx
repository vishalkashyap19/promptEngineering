import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import DesignPage from './pages/features/DesignPage'
import ResponsiveLayoutPage from './pages/features/ResponsiveLayoutPage'
import PerformancePage from './pages/features/PerformancePage'
import SecurityPage from './pages/features/SecurityPage'
import ScalabilityPage from './pages/features/ScalabilityPage'
import InnovationPage from './pages/features/InnovationPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feature/design" element={<DesignPage />} />
            <Route path="/feature/responsive" element={<ResponsiveLayoutPage />} />
            <Route path="/feature/performance" element={<PerformancePage />} />
            <Route path="/feature/security" element={<SecurityPage />} />
            <Route path="/feature/scalability" element={<ScalabilityPage />} />
            <Route path="/feature/innovation" element={<InnovationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
