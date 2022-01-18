import { Container, Split } from './styles/global.styled'
import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'

import theme from './styles/theme'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import GlobalStyles from './styles/Global'
import Welcome from './components/Welcome/Welcome'
import Settings from './components/Settings/Settings'
import Home from './components/Home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useGlobalContext } from './GlobalContext'
import { AnimatePresence } from 'framer-motion'
import DateAdapter from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
function App() {
  const location = useLocation()
  const { user } = useGlobalContext()
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'dark'
  })
  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])
  const activeTheme = theme[mode]
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <ThemeProvider theme={activeTheme}>
        <Container>
          <Navbar />
          <Split>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={user ? <Home /> : <Welcome />} />
                <Route path="/category/:id/:name" element={<Main />} />
                <Route
                  path="/settings"
                  element={<Settings mode={mode} setMode={setMode} />}
                />
              </Routes>
            </AnimatePresence>
          </Split>
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
