import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full bg-slate-600 flex justify-around items-center h-20 text-white font-sans '>
      <h2 className='text-xl'>Mylogo</h2>
      <div className='flex gap-20'>
        <NavLink className={({ isActive }) => isActive ? "text-red-700" : " text-white"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-700" : " text-white"} to="about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-700" : " text-white"} to="contact">Contact</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-700" : " text-white"} to="gitapi">GitApi</NavLink>
      </div>
      <button className='w-40 h-12 bg-green-500 rounded-lg'>Get In Touch</button>
    </div>
  )
}

export default Header