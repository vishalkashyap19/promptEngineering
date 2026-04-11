import { useState, useEffect } from 'react'
import './DarkModeToggle.css'

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return JSON.parse(saved)
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))

    // Apply dark mode to document
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="dark-mode-toggle-wrapper">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default DarkModeToggle
