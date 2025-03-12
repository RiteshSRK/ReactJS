import React, { useState } from 'react'

function Array() {
  let [val, setVal] = useState([1,2,3,4,5,6]);

  return (
    <div className='p-4'>

      {val.map( (item) => <h1>{item}</h1>)}

      <button onClick={()=>setVal(
         ()=>val.filter(
             (elem, index)=> index != val.length -1)
        )}

       className='bg-red-700 px-2 py-2 mt-2 rounded-full text-xs text-white font-semibold'>remove</button>
    </div>
  )
}

export default Array
