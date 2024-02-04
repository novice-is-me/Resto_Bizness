import React, { useEffect } from 'react'
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const CountComponent = ({end}) => {
  const [counterOn, setCountterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={()=> setCountterOn(true)} 
    onExit={()=> setCountterOn(false)}>
      <div className=''>
        {counterOn && <h5><CountUp start={0} end={end} delay={0} duration={2}/></h5>}
      </div>
    </ScrollTrigger>
  )
}

export default CountComponent
