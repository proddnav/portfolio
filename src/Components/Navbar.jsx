import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <header className="text-white bg-[#141414] body-font hidden md:block">
  <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-bold items-center text-white text-xl mr-2 mb-4 md:mb-0">
      
      Pranav Chandra
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
      <Link href='/#about' className="mr-5 hover:text-gray-300 hover:scale-110">About me</Link>
      <Link href='/#portfolio' className="mr-5 hover:text-gray-300 hover:scale-110">Portfolio</Link>
      <Link href='/#skills' className="mr-5 hover:text-gray-300 hover:scale-110">Skils</Link>
      <Link href='/#milestone' className="mr-5 hover:text-gray-300 hover:scale-110">Milestone</Link>
      <Link href='/#connect' className="mr-5 hover:text-gray-300 hover:scale-110">Connect</Link>
    </nav>
    <div className='flex gap-5'>
    <button className="inline-flex items-center bg-gray-800 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Resume
    </button>
    <button className="inline-flex items-center bg-blue-700 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Book a Call
     
     </button>
    </div>
  </div>
</header>

  )
}

export default Navbar