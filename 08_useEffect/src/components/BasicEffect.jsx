import React from 'react'
//importing useState and useEffect
import { useState , useEffect } from 'react'

const BasicEffect = () => {

    //writing down useEffect callback 
    useEffect( () =>{
            console.log("You clicked ... | useState() activated..");
    });

    const handleClick = () =>{
        console.log("Click event fired .. | ", Math.floor(Math.random() * 100))
    }
  return (
    <div>
      <h2>Hello! Click on button and see console to undesrtand working of useEffect</h2>
      <button onClick={handleClick}>Click to see useEffect()</button>
    </div>
  )
}

export default BasicEffect
