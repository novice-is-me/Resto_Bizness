import React, { useState } from 'react'
import MenuCard from '../MenuCard/MenuCard';
import { breakfastData, lunchData, dinnerData} from '../MenuFile'
import './menu.css'

const Menu = () => {
  const [isShow, setShow] = useState('default');

  return (
    <div className='menu m-0 p-5'>
      <div className='container text-center'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h3>Food Menu</h3>
            <h2>Most Popular Items</h2>
            <div className='d-flex justify-content-evenly w-50 choices'>
              <a href="" className='nav-link p-2 breakfast'
                onClick={(e) => {
                  e.preventDefault();
                  setShow('default');
                }}>Breakfast</a>
              <a href="" className='nav-link p-2 lunch' 
              onClick={(e) => {
                  e.preventDefault();
                  setShow('lunch')
                }}>Lunch</a>
              <a href="" className='nav-link p-2 dinner' 
                onClick={(e) => {
                  e.preventDefault();
                  setShow('dinner')
                }}>Dinner</a>
            </div>
        </div>
        <div className='choices'>
          {/* {show ?  : } */}
          {/* <MenuCard data={}/> */}
          {isShow === 'default' && <MenuCard data={breakfastData}/>}
          {isShow === 'lunch' && <MenuCard data={lunchData}/>}
          {isShow === 'dinner' && <MenuCard data={dinnerData}/>}
        </div>
      </div>
    </div>
  )
}

export default Menu
