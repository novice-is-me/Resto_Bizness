import React from 'react'
import './aboutComponents.css'
import ButtonComponent from '../Button/ButtonComponent'
import CountComponent from '../Counting/CountComponent'


const AboutComponents = () => {
  return (
    <div className='aboutColumn ps-2 d-flex'>
        <div className='content'>
            <h3>About Us</h3>
            <h2>Welcome to Resto-Bizness</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aspernatur voluptates nihil consequuntur ab nobis aperiam, sunt autem nam, eaque rem minus eligendi veniam magnam, et earum excepturi maxime. Dolorem?</p>
        </div>
        <div className='counting d-flex'>
          <div className='d-flex left-side'>
            <CountComponent end={15} />
            <div className='d-flex flex-column'>
              <p>Years of</p>
              <h4>EXPERIENCE</h4>
            </div>
          </div>
          <div className='d-flex ms-5 right-side'>
            <CountComponent end={50}/>
            <div className='d-flex flex-column'>
              <p>Years of</p>
              <h4>EXPERIENCE</h4>
            </div>
          </div>
        </div>
        <div className='button'>
            <ButtonComponent text={"Read More"}/>
        </div>
    </div>
  )
}

export default AboutComponents
