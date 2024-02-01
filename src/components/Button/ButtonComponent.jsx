import React from 'react'
import './button.css'

const ButtonComponent = ({text}) => {
  return (
    <div className='button'>
      <button>{text}</button>
    </div>
  )
}

export default ButtonComponent
