import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to='/'> products</NavLink>
        <NavLink to='/NewProducts'>NewProducts</NavLink>

    </div>
  )
}
