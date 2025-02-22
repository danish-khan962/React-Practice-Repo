import React from 'react'
import { useState } from 'react'
import './style.css'

const TextResizer = () => {
    const [FontSize, setFontSize] = useState(16);

    const handleIncrease = ()=>{
        setFontSize(FontSize+1);
    }
    const handleDecrease = ()=>{
        setFontSize(FontSize-1);
    }
  return (
    <div id='wrapper'>
      <p className="text" style={{fontSize:`${FontSize}px`}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi a reprehenderit inventore illum quibusdam veniam, illo numquam voluptatem nostrum!
      </p>
      <div className="buttons">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>

      <p className="currentSize">Current Size: {FontSize}px</p>
    </div>
  )
}

export default TextResizer
