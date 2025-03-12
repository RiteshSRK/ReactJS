import React, { useState } from 'react'

function Mastering02() {
    let [val, setVal] = useState({name: "Harsh Sharma", age: 24});
  return (
    <div className='p-4'>
      <h2>{val.name}</h2>
      <h3>{val.age}</h3>
      <button onClick={()=>{
        setVal({...val, city: "Prayagraj"});
        console.log(val);
      }}
       className='bg-blue-500 p-2 rounded-md text-xs text-white font-bold mt-2'>change</button>
    </div>
  )
}

export default Mastering02
