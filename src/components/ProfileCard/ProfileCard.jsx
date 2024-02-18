import React from 'react'
import './profile.css'
import ProfileCardComponent from '../ProfileCardComponent/ProfileCardComponent'

const ProfileCard = () => {
  return (
    <div className='profileCard m-0 p-5'>
      <div className='container text-center'>
          <h3>Team Members</h3>
          <h2>Our Master Chefs</h2>
          <div className='profileCard-container '>
              <ProfileCardComponent/>
          </div>
      </div>
    </div>
  )
}

export default ProfileCard
