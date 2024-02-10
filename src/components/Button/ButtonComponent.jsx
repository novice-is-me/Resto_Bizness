import React from 'react'
import './button.css'

const ButtonComponent = ({text, className}) => {
  return (
    <div className='button'>
      <button className={className}>{text}</button>
    </div>
  )
}

export default ButtonComponent
