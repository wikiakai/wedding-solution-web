import Home from './sections/Home'
import Services from './sections/Services'
import Description from './sections/Description'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
        <Description />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
