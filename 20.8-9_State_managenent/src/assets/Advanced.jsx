import React, { useState } from 'react'

function Advanced() {
    let [val, setVal] = useState({name : 'Ritesh', isBanned : false});

  return (
    <div className='p-6'>
      <h1>Name : {val.name}</h1>
      <h2>Banned : {val.isBanned.toString()}</h2>
      <button onClick={ ()=>setVal({...val, isBanned : !val.isBanned})}
       className={`${val.isBanned ? "bg-blue-500" : "bg-red-600"}
        px-2 py-2 mt-2 rounded-full text-xs text-white font-semibold`}>change</button>
    </div>
  )
}

export default Advanced
