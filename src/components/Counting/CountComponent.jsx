import React, { useEffect } from 'react'
import { useState } from 'react';
// import CountUp from 'react-countup';

const CountComponent = () => {
    const [count, setCount] = useState(0); 

    const addCount = () => {
        setCount(count + 1);
        console.log(count)
    }

    useEffect(()=>{
        if (count <= 5){

        }
    })
  return (
    <div className=''>
      <h5></h5>
    </div>
  )
}

export default CountComponent
