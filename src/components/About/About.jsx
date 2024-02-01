import React from 'react'
import './about.css'
import CardComponent from '../CardComponent/CardComponent'

const About = () => {
  return (
    <div className='about m-0 p-5'>
        <div className='container'>
            <CardComponent title={"Master Chefs"} text={"Good Quality"}/>
            <CardComponent title={"Fast Delivery"} text={"Fast Delivery"}/>
            <CardComponent title={"Best Quality"} text={"Best Quality"}/>
            <CardComponent title={"Best Quality"} text={"Best Quality"}/>
        </div>
    </div>
  )
}

export default About
