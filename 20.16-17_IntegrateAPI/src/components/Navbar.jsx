import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
        <div className='mt-8 flex justify-center gap-10'>
          <Link to="/"> Home </Link>
          <Link to="/user"> User </Link>
          <Link to="/about"> About </Link>
        </div>
        
        <hr />
    </>
  )
}

export default Navbar
