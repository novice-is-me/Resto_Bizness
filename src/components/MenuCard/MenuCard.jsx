import React from 'react'
import './menuCard.css'

const MenuCard = ({data}) => {

  return (
    <div className='menuCard m-0 p-5'>
      <div className='row'>
            {data.map((item, index) => {
                return <div className='col col-lg-6 col-12 d-flex align-items-center menu-container'> 
                     <div className='image w-25'>
                         <img src={item.img} alt="" className='img-fluid' />
                     </div>
                    <div className='description w-75 ms-2 text-start'>
                        <div className='d-flex justify-content-between align-items-center border-bottom'>
                            <h3>{item.title}</h3>
                            <span style={{color: "#FF5F00", fontWeight: "bold"}}>{item.price}</span>
                        </div>
                            <p className='pt-1'>{item.description}</p>
                     </div>
                 </div>
            })}
        </div>
    </div>
  )
}

export default MenuCard
