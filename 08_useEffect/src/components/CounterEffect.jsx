import React from 'react'
import { useState , useEffect } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect( ()=> {
        console.log("useEffect through Counter..")
        document.title = `${count}`
    }, [count])

    const increment = () => setCount(count + 1);

  return (
    <div>
      <h2>Count value: {count}</h2>
      <button onClick={increment}>Increment Value</button>
    </div>
  )
}

export default CounterEffect
