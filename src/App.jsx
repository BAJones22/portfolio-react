import { useState } from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import './App.css'

function App() {
  const [displayState, setDisplayState] = useState('')

  const DisplaySwitch = (state) => {
    switch (state) {
      case '':
        return <Home />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'portfolio':
        return <Portfolio />
      case 'resume':
        return <Resume />
      default:
        return <Home />
    }
  }
  
  return (
    <>
  <Navbar setDisplayState={setDisplayState} />  
  {DisplaySwitch(displayState)}
    </>
  )
}

export default App
