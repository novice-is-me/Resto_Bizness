import React, { useState } from 'react'
import './navbar.css'  
import spoonFork from '../../assets/spoon-fork.png'
import { MdOutlineClose, MdOutlineMenu  } from "react-icons/md";

const NavList = () => (
  <div className='nav-list d-flex align-items-center'>   
    <a href="" className='nav-link active'>Home</a>
    <a href="" className='nav-link active'>About</a>
    <a href="" className='nav-link active'>Service</a>
    <a href="" className='nav-link active'>Menu</a>
    <a href="" className='nav-link active'>Testimonials</a>
    <a href="" className='nav-link active'>Contacts</a>
  </div>
)

const Navbar = () => {    
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <> 
     <div className='navbar navbar-expand-lg text-white px-4 py-3'> 
        <div className='container-fluid'>     
            <div className='d-flex align-items-center'>  
                <img src={spoonFork} alt="logo" className='logo'/>    
                <a href="" className='navbar-brand'>RESTO-BIZNESS</a> 
            </div>
            <div className='navbar-list'>  
              <NavList/>
            </div>
            <form action="" className='form d-flex' style={{gap:"1em"}}> 
              <input type="search"  placeholder='Search...'/>
              <button className='btn text-white' style={{backgroundColor: "#FF5F00"}} type='submit'>Search</button>
            </form>
            <div className='nav-list-collapse'>
              {toggleMenu ? <MdOutlineClose size={25} onClick={()=> setToggleMenu(false)}/> 
              : <MdOutlineMenu size={25} onClick={()=> setToggleMenu(true)}/>}
              <div className='nav-list-show'>
                {toggleMenu &&( 
                <div className='nav-list-toggle'> 
                  <div className='nav-list-menu'>
                    <NavList/> 
                  </div>
                </div> )}
              </div>
            </div>
        </div>    
     </div>
    </> 
  )
}

export default Navbar
