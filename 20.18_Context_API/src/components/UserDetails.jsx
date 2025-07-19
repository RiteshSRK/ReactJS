import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const {id} = useParams()
    const navigate = useNavigate()
    const {users} = useContext(UserContext)
    console.log(users[id])
    
    const goBack = () => {
      navigate(-1)
    }

  return (
    <div className='w-1/2 m-auto '>
      <button onClick={goBack} className='bg-red-200 my-2 p-3 rounded-full'>Go Back</button>
      <h2 className='bg-zinc-200 my-2 p-3'>{users[id].username}</h2>
      <h2 className='bg-zinc-200 my-2 p-3'>{users[id].city}</h2>
    </div>
  )
}

export default UserDetails
