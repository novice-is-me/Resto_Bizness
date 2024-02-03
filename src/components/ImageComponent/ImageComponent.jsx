import React from 'react'
import './image.css'

const ImageComponent = ({image, style}) => {
  return (
    <div className='col p-0'>
        <img src={image} alt="" className='img-fluid' style={style}/>
    </div>
  )
}

export default ImageComponent
