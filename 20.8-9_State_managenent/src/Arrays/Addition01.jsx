import React, { useState } from 'react'

function Addition01() {
    let [val, setVal] = useState([1,2,3,4,5])
  return (
    <div className='p-4'>
      {val.map((item)=> <div>{item}</div>)}
      <button onClick={()=>setVal([...val, 6])} className='bg-green-700 px-2 py-2 mt-2 rounded-full text-xs text-white font-semibold'>Add</button>
    </div>
  )
}

export default Addition01