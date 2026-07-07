import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/Ayush.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
     <div className='overflow-hidden bg-[#c8c7ff] h-12 flex align-middle justify-between px-4 md:px-6'>
        <Link to='/' className='p-1'>
          <img
           src={Image}
           alt='Home'
           className='w-10'
          />
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu}
          className='md:hidden flex flex-col gap-1.5 cursor-pointer mt-3'
        >
          <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Nav links - Desktop */}
         <nav className='hidden md:flex overflow-hidden gap-4 p-3'>
          <Link to='/' className='pb-1 border-b-2 border-transparent hover:border-amber-700 transition-all duration-300'>Home</Link>
           <Link to='/About' className='pb-1 border-b-2 border-transparent hover:border-amber-700 transition-all duration-300'>About</Link>
             <Link to='/Contact' className='pb-1 border-b-2 border-transparent hover:border-amber-700 transition-all duration-300'>Contact</Link>
         </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='absolute top-12 left-0 right-0 bg-[#c8c7ff] md:hidden flex flex-col gap-2 p-4 border-b-2 border-amber-700'>
            <Link to='/' onClick={toggleMenu} className='pb-1 border-b-2 border-transparent hover:border-amber-700 transition-all duration-300'>Home</Link>
            <Link to='/About' onClick={toggleMenu} className='pb-1 border-b-2 border-transparent hover:border-amber-700 transition-all duration-300'>About</Link>
            <Link to='/Portfolio' onClick={toggleMenu} className='pb-1 border-b-2 border-transparent hover:border-amber-700 transition-all duration-300'>Portfolio</Link>
            <Link to='/Contact' onClick={toggleMenu} className='pb-1 border-b-2 border-transparent hover:border-amber-700 transition-all duration-300'>Contact</Link>
          </div>
        )}
     </div>
    </>
  )
}

export default Navbar