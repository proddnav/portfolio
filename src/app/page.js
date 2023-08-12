"use client"
import Book from '@/Components/Book'
import Footer from '@/Components/Footer'
import MobileNavbar from '@/Components/MobileNavbar'
import Navbar from '@/Components/Navbar'
import Portfolio from '@/Components/Portfolio'
import Timeline from '@/Components/Timeline'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { useMediaQuery } from 'usehooks-ts'

const Home = () => {
  const isMobile = useMediaQuery('(max-width:1024px)')
  return (
    <>
    {/* {isMobile ?(<MobileNavbar/>):(<Navbar/>)} */}
    <MobileNavbar/>
    <Navbar/>
    {/* ... rest of the code ... */}
    </section>
    <Portfolio/>
    <section id='skills' className="bg-[#141414]">
    {/* ... rest of the code ... */}
    </section>
    <Book/>
    <Timeline/>
    <Book/>
    <Footer/>
    </>
  )
}

export default Home
