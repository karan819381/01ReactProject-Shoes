import React from 'react'
import brand_logo from '../assets/brand_logo.png'

const Header = () => {
  return (
    <header className=' w-[90%] mx-auto my-5 flex items-center justify-between font-sans font-semibold'>
      <img src={brand_logo} alt="brand_logo" />
      <ul className='flex gap-5 '>
        <a className='hover:bg-red-300 hover:text-white' href='#'>Menu</a>
        <a className='hover:bg-red-300 hover:text-white' href='#'>Location</a>
        <a className='hover:bg-red-300 hover:text-white' href='#'>About</a>
        <a className='hover:bg-red-300 hover:text-white' href='#'>Contact</a>
      </ul>
      <button className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'>Login</button>
    </header>
  )
}

export default Header