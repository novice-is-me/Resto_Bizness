import React from 'react'
import './card.css'

const CardComponent = ({image, title, text}) => {
  return (
    <div className='card col-lg col-md-4 p-3 me-3 mb-5'>
        <img src={image} alt="" className='card-img-top' />
        <div className='card-body pt-3 p-0'> 
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{text}</p>
        </div>
    </div>
  )
}

export default CardComponent
