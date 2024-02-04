import React, { useEffect } from 'react'
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './count.css'

const CountComponent = ({end}) => {
  const [counterOn, setCountterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={()=> setCountterOn(true)} 
    onExit={()=> setCountterOn(false)}>
      <div className='count'>
        <h2>{counterOn && <h5><CountUp start={0} end={end} delay={0} duration={2} style={{fontSize: "2em", color: "#FF5F00"}}/></h5>}</h2>
      </div>
    </ScrollTrigger>
  )
}

export default CountComponent
