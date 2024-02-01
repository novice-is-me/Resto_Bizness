import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Navbar.jsx'
import './index.css'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/> 
    <Hero/> 
    <About/>
  </React.StrictMode>,
)
