import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Skills from './sections/skills/skills'
import Projects from './sections/projects/projects'
import Contact from './sections/contact/contact'
import About from './sections/about/about'
import GradientOverlay from './components/GradientOverlay/GradientOverlay'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
      <div className="gridBackground"></div>
      <div className="appContainer">
        <GradientOverlay/>
        <Sidebar className='sidebar'/>
        <main className='info_section'>
          <Skills id='skills'/>
          <Projects id='projects'/>
          <About id='about' />
          <Contact id='contact' />
        </main>
      </div>
    </div>
  )
}

export default App
