import './App.css'
import { useRef } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Logo from '/logo2.png'
import Topbar from './pages/Topbar.jsx'

// Pages
import Homepage from './pages/home/Page.jsx'
import About from './pages/about/Page.jsx'
import Projects from './pages/projects/Page.jsx'

import { NavContextProvider } from './context/NavContext.jsx' 

function Navbar () { 
  return (
    <div className='navbar'>
      <div className='nav-logo'> <img src={Logo} /></div>
      <span className='nav-menu'> <HiOutlineMenuAlt1 /> </span>
      <div className='nav-items'>
        <span> Home </span>
        <span> Projects </span>
        <span> Contact Us </span>
      </div>
    </div>
  )
}


function App() {

  return (
    <NavContextProvider>
      <div className='app'>
        <Navbar />

        <Routes> 
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>

      </div>
    </NavContextProvider>
  )
}

export default App
