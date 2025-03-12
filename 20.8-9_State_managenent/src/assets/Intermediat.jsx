import React, { useState } from 'react'

function Intermediat() {
    let [count, setCount] = useState(0);

  return (
    <div className='p-4'>
      <div className='mb-4'>{count}</div>
      <button onClick={()=>setCount(count+1)} className='bg-gray-700 px-2 py-2 mt-2 rounded-full text-xs text-white font-semibold'>Increment</button>
    </div>
  )
}

export default Intermediat
