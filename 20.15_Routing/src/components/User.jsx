import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='w-1/2 m-auto'>
        <h1 className='text-red-400 font-semibold text-xl'>User</h1>
        <div className='w-1/2 flex flex-col mt-5'>
          <Link className='bg-red-200 p-3 text-2xl mt-3 hover:bg-red-300' to="/user/john">John</Link>
          <Link className='bg-red-200 p-3 text-2xl mt-3 hover:bg-red-300' to="/user/ayush">Ayush</Link>
          <Link className='bg-red-200 p-3 text-2xl mt-3 hover:bg-red-300' to="/user/anubhav">Anubhav</Link>

          <hr />
          
          <Outlet />
        </div>
    </div>
  )
}

export default User
