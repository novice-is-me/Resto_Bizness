import React from 'react'
import './card.css'

const CardComponent = ({img, title, text}) => {
  return (
    <div className='card'>
        <img src={img} alt="" className='card-img-top' />
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{text}</p>
        </div>
    </div>
  )
}

export default CardComponent
