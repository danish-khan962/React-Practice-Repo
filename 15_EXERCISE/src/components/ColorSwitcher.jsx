import React, { useState } from 'react'
import './style.css'

const ColorSwitcher = () => {
    const [bg, setBg] = useState('white');

    const handleRed = ()=>{
        setBg('red');
    }
    const handleBlue = ()=>{
        setBg('blue');
    }
    const handleGreen = ()=>{
        setBg('green');
    }
  return (
    <div id='wrapper' style={{backgroundColor:bg}}>
      <div id='radios'>
        <div className='radio-btns' id='red' onClick={handleRed}></div>
        <div className='radio-btns' id='blue'onClick={handleBlue}></div>
        <div className='radio-btns' id='green' onClick={handleGreen}></div>
      </div>

      <p>Current color : <span>{bg}</span>
      </p>
    </div>
  )
}

export default ColorSwitcher
