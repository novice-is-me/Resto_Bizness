import React, { useState } from 'react'
import { breakfastData } from '../MenuFile';

const Menu = () => {
  const [show, isShow] = useState(false);

  return (
    <div className='m-0 p-5'>
      <div className='container'>
        <div>
            <h3>Food Menu</h3>
            <h2>Most Popular Items</h2>
        </div>
        <div className='choices'>
        <p>{breakfastData.map((item, index) =>{
                      return <p key={index}>{item.title}</p>
                    })}</p>
            
        </div>
      </div>
    </div>
  )
}

export default Menu
