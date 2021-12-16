import { Container, Split } from './styles/global.styled'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/theme'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import GlobalStyles from './styles/Global'
import Welcome from './components/Welcome/Welcome'
import Home from './components/Home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useGlobalContext } from './GlobalContext'
import { AnimatePresence } from 'framer-motion'
function App() {
  const location = useLocation()
  const { user } = useGlobalContext()
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Navbar />
        <Split>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={user ? <Home /> : <Welcome />} />
              <Route path="/category/:id/:name" element={<Main />} />
            </Routes>
          </AnimatePresence>
        </Split>
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
