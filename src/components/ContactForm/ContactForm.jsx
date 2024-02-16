import React from 'react'
import FormComponent from '../FormComponent/FormComponent'
import order from '../../assets/order.jpg'
import './contact.css'

const ContactForm = () => {
  return (
    <div className='contact-form m-0 p-5 pb-0'>
      <div className='container'>
        <div className='contact-form-container d-flex'>
            <div className='w-50 image-backg'></div>
            <div className='w-50 pt-3'>
                <FormComponent/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
