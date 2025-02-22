import React, { use } from 'react'
import './style.css'
import { useState } from 'react'

const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');
  const [textColor, setTextColor] = useState('#212121')

  const toggleTheme = ()=>{
    setTheme(theme==='light'?'dark':'light');
    setTextColor(textColor==='#212121'?'#ffffff':'#212121')
  }


  return (
    <div id='wrapper' style={{ color:textColor}} className={theme}>
      <p>WELCOME DUDE!!</p>
      <button onClick={toggleTheme} style={{border:`1.5px solid ${textColor}`, color:textColor}}>
        Toggle theme
      </button>
    </div>
  )
}

export default ToggleTheme
