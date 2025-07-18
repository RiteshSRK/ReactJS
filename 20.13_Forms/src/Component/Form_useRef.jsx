import React, { useRef } from 'react'

function Form_useRef() {
    let name = useRef(null);
    let age = useRef(null);
    let email = useRef(null);

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value, age.current.value, email.current.value)
    }

  return (
    <form action='' onSubmit={handleSubmit} className='p-4'>
      <input ref={name} className='border-2 m-1' type="text" placeholder='Name' /> <br />
      <input ref={age} className='border-2 m-1' type="text" placeholder='Age' /> <br />
      <input ref={email} className='border-2 m-1' type="text" placeholder='Email' /> <br />
      {/* <input type="submit" /> */}
      <button className='bg-zinc-600 text-white px-4 py-1 rounded-md'>Submit</button>
    </form>
  )
}

export default Form_useRef
