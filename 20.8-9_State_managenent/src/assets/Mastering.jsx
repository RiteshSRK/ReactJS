import React, { useState } from 'react'

function Mastering() {
    let [val, setVal] = useState({name: 'Ritesh', isBanned: false});
  return (
    <div className='p-4'>
      <h2>{val.name}</h2>
      <h3>{val.isBanned.toString()}</h3>
      <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className={`${val.isBanned ? "bg-blue-600" : "bg-red-600"} p-1.5 rounded-full text-xs text-white font-semibold`}>change</button>
    </div>
  )
}

export default Mastering
