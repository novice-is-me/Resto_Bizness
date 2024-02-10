import React, { useState } from 'react'
import MenuCard from '../MenuCard/MenuCard';
import { breakfastData, lunchData, dinnerData} from '../MenuFile'
import './menu.css'

const Menu = () => {
  const [show, isShow] = useState(false);

  return (
    <div className='menu m-0 p-5'>
      <div className='container text-center'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h3>Food Menu</h3>
            <h2>Most Popular Items</h2>
            <div className='d-flex justify-content-evenly border border-2 w-50 choices'>
              <a href="" className='nav-link p-2'>Breakfast</a>
              <a href="" className='nav-link p-2'>Lunch</a>
              <a href="" className='nav-link p-2'>Dinner</a>
            </div>
        </div>
        <div className='choices'>
          {/* {show ?  : } */}
          {/* <MenuCard data={}/> */}
        </div>
      </div>
    </div>
  )
}

export default Menu
