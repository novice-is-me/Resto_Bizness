import React from 'react'
import FormComponent from '../FormComponent/FormComponent'
import order from '../../assets/order.jpg'

const ContactForm = () => {
  return (
    <div className='contact-form m-0 p-5 pb-0'>
      <div className='container'>
        <div className='contact-form-container d-flex'>
            <div className='w-50'>
                <img src={order} alt="" className='img-fluid'/>
            </div>
            <div className='w-50'>
                <FormComponent/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
