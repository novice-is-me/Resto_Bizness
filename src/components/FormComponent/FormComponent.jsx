import React from 'react'
import './form.css'
import ButtonComponent from '../Button/ButtonComponent'

const FormComponent = () => {
  return (
    <div className='form-child-container text-white p-4'>
        <h3>Reservation</h3>
        <h1 className='pb-2'>Book A Table Online</h1>
      <form action="" className='flex-form'>
        <div className='row pb-3 first-row'>
          <div className='col col-12 col-md-6'>
            <input type="text" placeholder='First Name'/>
          </div>
          <div className='col col-12'>
            <input type="text" placeholder='Last Name' />
          </div>
        </div>
        <div className='row pb-3'>
          <div className='col'>
              <input type="text" placeholder='Date & Time'/>
          </div>
          <div className='col'>
            <select name="option" id="option">
              <option value="People 1">People 1</option>
              <option value="People 2">People 2</option>
              <option value="People 3">People 3</option>
            </select>
          </div>
        </div>
        <div className='row message'>
          <div className='col'>
            <input type="text" placeholder='Special Request' />
          </div>
        </div>
        <div>
          <ButtonComponent text={"Book Now"} className={'button-form'}/>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
