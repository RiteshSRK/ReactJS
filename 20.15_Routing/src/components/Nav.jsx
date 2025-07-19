import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className='mt-8 flex justify-center gap-10'>
        <NavLink 
            style={(e) => {
                return {
                    color: e.isActive ? "tomato" : "",
                    fontWeight: e.isActive ? "bold" : "",
                }
            }}
            to="/">Home</NavLink>

        <NavLink to="/user">User</NavLink>

        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  )
}

export default Nav
