import React from 'react'
import './aboutComponents.css'
import ButtonComponent from '../Button/ButtonComponent'

const AboutComponents = () => {
  return (
    <div className='about ps-2 d-flex'>
        <div>
            <h3>About Us</h3>
            <h2>Welcome to Resto-Bizness</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aspernatur voluptates nihil consequuntur ab nobis aperiam, sunt autem nam, eaque rem minus eligendi veniam magnam, et earum excepturi maxime. Dolorem?</p>
        </div>
        <div>

        </div>
        <div>
            <ButtonComponent/>
        </div>
      
    </div>
  )
}

export default AboutComponents
