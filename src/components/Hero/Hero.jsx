import React from 'react'
import './hero.css' 
import ButtonComponent from '../Button/ButtonComponent' 
import imageHero from '../../assets/imageHero.png'

const Hero = () => {
  return (
    <div className='hero m-0 p-5 d-flex justify-content-center'>
      <div className='container d-flex justify-content-between m-0'>
        <div className='d-flex left-container justify-content-center align-items-center'>
          <div>
            <h1>EXPLORE ORDER AND SAVOR!</h1>
            <p style={{fontWeight:'bold'}}>Elevate your order experience with a simple click!</p> 
            <p>Delight in a seamless process as you discover, order, and savor with ease.</p>
          </div>
          <div className='button-container'> 
            <ButtonComponent text={"Get Started"}/> 
          </div>
        </div>
        <div className='right-container'>
            <img src={imageHero} alt="" className='img-fluid img'/>
        </div> 
      </div>
    </div>
  )
}

export default Hero
