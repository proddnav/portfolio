"use client"
import Book from '@/Components/Book'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Portfolio from '@/Components/Portfolio'
import Timeline from '@/Components/Timeline'
import React from 'react'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <>
    <Navbar/>
   <section className="bg-[#141414]">
  <div className="container py-16 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-3/5">
        <div className="">
        <p className="mt-3 text-gray-200 font-extrabold text-2xl">Hello</p>

        {/* <h1 className="text-3xl font-semibold text-white lg:text-8xl">HELLO</h1> */}
        <div>
  <h1 className="text-5xl font-extrabold text-left lg:text-7xl 2xl:text-7xl">
    <span className=" text-white ">
      I am 
    </span>
  </h1>
  <h1 className="text-5xl font-extrabold text-left lg:text-6xl 2xl:text-7xl">
    <span className="text-transparent bg-gradient-to-tl bg-clip-text from-blue-500 to-pink-500 ">
      Pranav Chandra
    </span>
  </h1>
</div>
<div className='text-white font-bold text-3xl mt-2'>

<Typewriter
options={{
  strings: ['Ex-Lawyer', ' Entrepreneur','Aspiring Product Manager'],
  autoStart: true,
  loop: true,
}}
/>
</div>

          <p className="mt-3 lg:pr-10 text-gray-600 dark:text-gray-400">Passionate product enthusiast with a diverse background in law and entrepreneurship. MBA candidate at Master&apos;s Union with proven success in scaling an F&B venture. Committed to crafting exceptional products and setting new standards for user satisfaction. Continuous learner and lateral leader, eager to connect with like-minded professionals</p>
          
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5">
        <img className="w-full h-full lg:max-w-lg shadow-2xl shadow-[#4b39ef] rounded-full" src="/hero.png" alt="hero.png" />
      </div>
    </div>
  </div>
</section>

<Portfolio/>
<section className="bg-[#141414]">
  <div className="container px-6 py-16 mx-auto text-center">
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold text-white lg:text-5xl">Tech Skills</h1>
      <p className="mt-6 text-gray-500 dark:text-gray-300">
      Always Evolving, Forever Learning
      </p>
      
    </div>
    <div className="max-w-screen-xl mx-auto mt-20 ">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-7">
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src='/icons/1.png' className=' aspect-[1/1] w-24 ' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}}/>
        </div>
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src='/icons/2.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
        </div>
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src='/icons/3.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
        </div>
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src='/icons/4.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
        </div>
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src='/icons/5.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
        </div>
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src='/icons/6.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
        </div>
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img src='/icons/7.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
        </div>
      </div>
    </div>
  </div>
</section>
<Book/>
<Timeline/>
    <Footer/>
    </>
  )
}

export default Home