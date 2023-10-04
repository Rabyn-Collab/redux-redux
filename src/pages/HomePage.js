import React, { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child';

const HomePage = () => {

  const [incre, setIncre] = useState(0);
  const [decre, setDecre] = useState(0);

  const checkN = () => {

    let i = 0;
    while (i < 1000000000) i++;
    return incre % 2 == 0;
  }

  const increment = () => {
    setIncre((prev) => prev + 1);
  }

  const decrement = () => {
    setDecre((prev) => prev - 1);
  }

  const greet = useCallback(() => {
    alert('hello world')
  }, [incre])


  return (
    <div className='p-4'>
      <button onClick={increment} className='text-2xl'>{incre} Increment</button>
      <h1>{checkN() ? 'Even' : 'Odd'}</h1>
      <button onClick={decrement} className='text-2xl'>{decre} Decrement</button>
      <Child greet={greet} />
    </div>
  )
}

export default HomePage
