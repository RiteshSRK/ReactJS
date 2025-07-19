import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <div>
      <nav className='mt-6 flex justify-center gap-12 '>
        <Link to='/' >Home</Link>
        <Link to='/user' >User</Link>
        <Link to='/about' >About</Link>
      </nav>

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/user' element={ <User /> } />
        <Route path='/user/:id' element={ <UserDetails /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
      
    </div>
  )
}

export default App
