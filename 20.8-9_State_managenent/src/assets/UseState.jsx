import React, { useState } from 'react'

function UseState() {
    let [banned, setBanned] = useState(false);

  return (
    <div className='p-4'>
      <div>
        {banned.toString()}
      </div>
      
      <button onClick={ ()=> setBanned(!banned)} className={`bg-gray-700 px-2 py-2 mt-2 rounded-full text-xs text-white font-semibold`}>Change</button>
    
    </div>
  )
}

export default UseState
