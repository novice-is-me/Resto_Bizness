import React, { useState } from 'react'
import MenuCard from '../MenuCard/MenuCard';

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
          <MenuCard/>
        </div>
      </div>
    </div>
  )
}

export default Menu
