import React from 'react'

const ImageComponent = ({image}) => {
  return (
    <div className='col'>
        <img src={image} alt="" className='img-fluid'/>
    </div>
  )
}

export default ImageComponent
