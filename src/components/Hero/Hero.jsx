import React from 'react'
import imageHero from '../../assets/imageHero.png'

const Hero = () => {
  return (
    <div className='hero m-0 p-5'>
      <div className='container d-flex'>
        <div className='left-container'>
            <h1>Explore Order and <br /> Savor</h1>
            <p>Elevate your order experience with a simple click!</p>
        </div>
        <div className='right-container'>
            <img src={imageHero} alt="" />
        </div> 
      </div>
    </div>
  )
}

export default Hero
