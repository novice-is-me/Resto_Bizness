import React from 'react'
import './about.css'
import CardComponent from '../CardComponent/CardComponent'
import {cart,chef,headset,spoonFork,bread,foods,fries,pizza} from '../../components/image.js'
import ImageComponent from '../ImageComponent/ImageComponent.jsx'
import AboutComponents from '../AboutComponents/AboutComponents.jsx'

const About = () => {

  return (
    <div className='about m-0 p-5'>
        <div className='container d-grid'>
          <div className='d-flex row justify-content-center'>
            <CardComponent image={chef} title={"Master Chefs"} 
            text={"Unleashing Culinary Excellence, where quality meets innovation in the art of gastronomy."}/>
            <CardComponent image={spoonFork} title={"Quality Food"} 
            text={"Elevating your dining experience with a delectable fusion of flavors and premium ingredients"}/>
            <CardComponent image={cart} title={"Online Order"} 
            text={"Browse, and place your orders for a delightful dining experience from the comfort of your home."}/>
            <CardComponent image={headset} title={"24/7 Services"} 
            text={" Providing  availability for your needs, ensuring prompt and reliable assistance whenever you require it"}/>
          </div>
        </div>
        <div className='container d-grid second'>
          <div className='row aboutRow'>
            <div className='col w-50 firstColumn'>
              <div className='firstRow row justify-content-center d-flex'>
                  <ImageComponent image={bread}/> 
                  <ImageComponent image={pizza} style={{width: "80%", marginTop: "13.5%"}}/>
              </div>
              <div className=' secondRow row'>
                  <ImageComponent image={fries} style={{width: "80%", marginLeft: "20%"}}/> 
                  <ImageComponent image={foods}/>
              </div>
            </div>
            <div className='col col-lg w-50 secondColumn'>
              <AboutComponents/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
