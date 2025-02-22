import React from 'react'
import { useState } from 'react'
import './style.css'

const Input = () => {
    const [inputvalue, setInputvalue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) =>{
        setInputvalue(e.target.value);
        setError(inputvalue.length>100?'Character word limit is 100' : '')
    }

  return (
    <div id='wrapper'>
      <input type="text" placeholder='Enter text...' value={inputvalue} onChange={handleChange}/>

      <p className="errorMessage">{error}</p>
    </div>
  )
}

export default Input
