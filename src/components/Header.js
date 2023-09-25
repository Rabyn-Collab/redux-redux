import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black
    items-baseline
    text-white flex justify-between px-7 py-2'>
      <h1 className='text-2xl'>Web Tailwind</h1>

      <nav className='space-x-4'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/'>Contact</NavLink>
      </nav>

    </div>
  )
}

export default Header
