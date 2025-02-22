import React from 'react'
import { useState } from 'react';
import './ColorSwitcher.css'

const ColorSwitcher = () => {

    const [click, setClick] = useState(0);
    const handleClick = () =>{
        setClick(click+1);
        console.log(Math.floor(Math.random()*100));
    }

    const randomColor = () => {
        const hex = '0123456789ABCDEF'
        let color = '#'
        for(let i=0; i<6; i++){
            color += hex[Math.floor(Math.random()*16)]
        }
        return color;
    };

    const switchColor = ()=>{
        let background = document.getElementById('wrapper');
        background.style.backgroundColor = randomColor();
    }


  return (
    <div onClick={handleClick} id='wrapper'>
      <p>You clicked <span>{click}</span> times...</p>

      <button onClick={switchColor}>Click to change color</button>
    </div>
  )
}

export default ColorSwitcher
