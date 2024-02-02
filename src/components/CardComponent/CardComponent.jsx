import React, { useState } from 'react'
import './card.css'

const CardComponent = ({image, title, text}) => {

  const changeBackgroundEnter= (e) =>{
    e.currentTarget.style.background = '#FF5F00';
    e.currentTarget.querySelector('.card-title').style.color = 'white'
    e.currentTarget.querySelector('.card-text').style.color = 'white'

  }

  const changeBackgroundLeave= (e) =>{
    e.currentTarget.style.background = 'white';
    e.currentTarget.querySelector('.card-title').style.color = 'black'
    e.currentTarget.querySelector('.card-text').style.color = 'black'
   
  }

  return (
    <div className='card col-lg col-md-4 p-3 me-3 mb-5' 
    onMouseEnter={changeBackgroundEnter}
    onMouseLeave={changeBackgroundLeave}>
        <img src={image} alt="" className='card-img-top' />
        <div className='card-body pt-3 p-0'> 
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{text}</p>
        </div>
    </div>
  )
}

export default CardComponent
