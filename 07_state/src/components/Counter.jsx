import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter+1);
    const decrement = () => setCounter(counter-1);

  return (
    <div className='counter'>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment Value</button>
      <button onClick={decrement}>Decrement Value</button>
    </div>
  )
}

export default Counter
