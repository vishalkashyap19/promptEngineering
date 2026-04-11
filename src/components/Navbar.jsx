import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    // Scroll to top on navigation
    window.scrollTo(0, 0)
  }, [location])

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-current={isActive('/') ? 'page' : undefined}>
          <span className="logo-icon">✨</span>
          MyWebsite
        </Link>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul
          className={`navbar-menu ${isOpen ? 'active' : ''}`}
          id="navbar-menu"
        >
          {navItems.map((item) => (
            <li key={item.path} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link ${isActive(item.path) ? 'active' : ''}`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="navbar-item navbar-dark-mode">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
