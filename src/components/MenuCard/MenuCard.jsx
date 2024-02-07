import React from 'react'
import { breakfastData } from '../MenuFile'

const MenuCard = () => {
  return (
    <div className='menuCard m-0 p-5'>
      <div className='row'>
            {breakfastData.map((item, index) => {
                return <div className='col col-lg-6 col-md-12'> 
                     <div>
                         <img src={item.img} alt="" className='img-fluid' />
                     </div>
                    <div>
                         <h3>{item.title}</h3>
                         <p>{item.description}</p>
                     </div>
                 </div>
            })}
        </div>
    </div>
  )
}

export default MenuCard
