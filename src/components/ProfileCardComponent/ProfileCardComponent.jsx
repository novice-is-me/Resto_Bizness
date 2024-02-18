import React from 'react'
import './profileCard.css'
import { profileCardData } from '../MenuFile'

const ProfileCardComponent = () => {
  return (
    <div className='profile-card d-flex justify-content-between pt-4'>
        {profileCardData.map((item,index)=>{
              return <div className='profile-card-container'>
                <div className='row '>
                    <div className='col'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h4>{item.name}</h4>
                            <p>{item.designation}</p>
                        </div>
                    </div>
                </div>
               </div>
        })}
    </div>
  )
}

export default ProfileCardComponent
