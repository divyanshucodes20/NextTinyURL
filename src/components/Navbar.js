import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-orange-600 h-16 flex justify-between items-center px-3 text-white'>
    <div className="logo font-bold text-lg ">NextTinyURL</div>
    <ul className=' flex justify-center items-center gap-4'>
      <Link href="/"><li>Home</li></Link>
      <Link href="/generate"><li>Shoten URL</li></Link>
      <Link href="/about"><li>About</li></Link>
      <Link href="/contact"><li>Contact Us</li></Link>
      <li className='flex gap-3'>
      <Link href="/generate"><button className='bg-orange-300 shadow-lg p-3 rounded-lg font-bold py-1'>Try Now</button></Link>
      <Link href="/github"><button className='bg-orange-300 shadow-lg p-3 rounded-lg font-bold py-1'>Github</button></Link>
      </li>
    </ul>
   </nav>
  )
}

export default Navbar
