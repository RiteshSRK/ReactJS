import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'
import { useContext } from 'react'

function User() {
  const {users, setUsers} = useContext(UserContext)

  return (
    <div className='w-1/2 m-auto my-4 '>
      <h1 className='text-2xl font-semibold text-red-300'>Home</h1>
      <div className='flex flex-col '>
        {users.map( user => (
          <Link key={user.id} to={`/user/${user.id}`}
           className='mb-3 bg-blue-200 p-3'>{user.username}</Link>
        ))}
        
      </div>
    </div>
  )
}

export default User
