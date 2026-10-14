import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function useLiveClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return time
}

function App() {
  const [theme, setTheme] = useState('light')
  const time = useLiveClock()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">HM</div>

          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="topbar-actions">
            <div className="live-clock" aria-live="polite">
              {formattedTime}
            </div>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
