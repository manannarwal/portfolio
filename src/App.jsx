import { useState } from 'react'
import Skills from './pages/Skills'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="work"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  )
}

export default App
