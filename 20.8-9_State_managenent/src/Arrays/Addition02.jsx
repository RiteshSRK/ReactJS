import React, { useState } from 'react'

function Addition02() {
    let [val, setVal] = useState([
        {name: "Ritesh", age: 24},
        {name: "shivam", age: 25},
        {name: "virat", age: 35}
    ])

  return (
    <div className='p-4 bg-green-300' >
      {val.map((elem)=> 
        <div className='bg-zinc-200 m-1'>
          <h1>{elem.name}</h1>
          <h2>{elem.age}</h2>
        </div>
      )}
      
      <button  onClick={()=>setVal(()=>val.map((item)=> item.name == "shivam" ? ({name: "shivam", age: 26}) : item ))}
        className='bg-blue-700 px-2 py-2 mt-2 rounded-full text-xs text-white font-semibold'>change</button>
    </div>
  )
}

export default Addition02