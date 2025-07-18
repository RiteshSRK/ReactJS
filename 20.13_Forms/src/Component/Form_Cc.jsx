import React, { useState } from 'react'

function Form_Cc() {
    let [val, setVal] = useState({name: "", email: ""})

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(val)
    }
  return (
    <div>
      <form action='' className='p-4' onSubmit={handleSubmit}>
        <input onChange={(e)=>setVal({...val, name: e.target.value})} className='border-2 m-1' type="text" placeholder='name' />
        <input onChange={(e)=>setVal({...val, email: e.target.value})} className='border-2' type="email" placeholder='Email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form_Cc
