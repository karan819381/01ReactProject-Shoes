import React from 'react'

const Header = () => {
  return (
    <header className=' w-[90%] mx-auto my-5 flex items-center justify-between font-sans font-semibold'>
      <img src="./src/assets/brand_logo.png" alt="brand_logo" />
      <ul className='flex gap-5'>
        <a href='#'>Menu</a>
        <a href='#'>Location</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </ul>
      <button className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'>Login</button>
    </header>
  )
}

export default Header