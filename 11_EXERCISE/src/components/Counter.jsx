import React from 'react'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './style.css'

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleIncrement =()=>{
        setCount(count+1);
        console.log("Clicked on increment button | value updated..")
    }

    const handleDecrement = ()=>{
        setCount(count-1);
        console.log("Clicked on decrement button | value updated..")
    }

  return (
    <div id='wrapper'>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={handleDecrement}><FaChevronLeft /></button>
        <button onClick={handleIncrement}><FaChevronRight /></button>
      </div>
    </div>
  )
}

export default Counter
