import React from 'react'
import FormComponent from '../FormComponent/FormComponent'
import './contact.css'
import formBackground from '../../assets/formBackground.jpg'

const ContactForm = () => {
  return (
    <div className='contact-form m-0 p-5 pb-0'>
      <div className='container'>
        <div className='contact-form-container d-flex'>
            <div className='img-container'>
              <img src={formBackground} alt="" className='img-fluid img-backg' />
            </div>
            <div className='form-container'>
              <FormComponent/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
