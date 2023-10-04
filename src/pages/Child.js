import React, { memo } from 'react'

const Child = ({ greet }) => {
  console.log('hello world');


  return (
    <div>

      <button onClick={greet}>askjd</button>

    </div>
  )
}

export default memo(Child)
