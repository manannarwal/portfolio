import { useState } from 'react'
import Skills from './pages/Skills'
import Home from './pages/home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </>
  )
}

export default App
