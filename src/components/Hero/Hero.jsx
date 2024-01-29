import React from 'react'
import './hero.css' 
import ButtonComponent from '../ButtonComponent' 
import imageHero from '../../assets/imageHero.png'

const Hero = () => {
  return (
    <div className='hero m-0 p-5'>
      <div className='container d-flex justify-content-between'>
        <div className='d-flex left-container justify-content-center'>
            <h1>EXPLORE ORDER AND <br /> SAVOR!</h1>
            <p style={{fontWeight:'bold'}}>Elevate your order experience with a simple click!</p> 
            <p>Delight in a seamless process as you discover, order, and savor with ease.</p>
            <div>
              <ButtonComponent/> 
            </div>
        </div>
        <div className='right-container'>
            <img src={imageHero} alt="" />
        </div> 
      </div>
    </div>
  )
}

export default Hero
