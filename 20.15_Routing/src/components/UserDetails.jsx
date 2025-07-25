import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const {name} = useParams()
    const Navigate = useNavigate()

    const GoBackHandler = () => {
        // Navigate('/user');
        Navigate(-1)
    }

  return (
    <div className='mt-5'>
      <h1 className='text-cyan-400 font-semibold text-lg mb-2'>User Details</h1>
      <h1 className='text-3xl m-2'>{name}</h1>
      <button onClick={GoBackHandler} className='text-semibold bg-red-400 mt-2 text-white rounded px-2 py-1'>Go Back</button>
    </div>
  )
}

export default UserDetails