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
          <Link href='/#milestone' className="mr-5 hover:text-gray-300 hover:scale-110">Milestones</Link>
          <Link href='/#connect' className="mr-5 hover:text-gray-300 hover:scale-110">Connect</Link>
          <Link href='/booknotes' className="mr-5 hover:text-gray-300 hover:scale-110">Book Notes</Link>
          <a href="https://substack.com/@pranavchandra?utm_source=user-menu" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-gray-300 hover:scale-110">Substack</a>
        </nav>
        <div className='flex gap-5'>
          {/* Resume Link */}
          <a href="https://drive.google.com/file/d/17dcDBnDnvE948BU26KpXX2Ct4mOsaGiH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-800 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Resume</a>
          {/* Book a Call Link */}
          <a href="https://calendly.com/pranav-7ge/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">Book a Call</a>
        </div>
      </div>
    </header>
  )
}


export default Navbar
