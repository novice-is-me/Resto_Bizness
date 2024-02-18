import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Menu from './components/Menu/Menu.jsx'
import './index.css'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'

function App() {
  
  return (
    <>
    <Navbar/> 
    <Hero/> 
    <About/>
    <Menu/>
    <ContactForm/>
    <ProfileCard/>
    </>
  )
}

export default App
