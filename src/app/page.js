"use client";
import Book from '@/Components/Book';
import Footer from '@/Components/Footer';
import MobileNavbar from '@/Components/MobileNavbar';
import Navbar from '@/Components/Navbar';
import Portfolio from '@/Components/Portfolio';
import Timeline from '@/Components/Timeline';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from 'usehooks-ts';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:1024px)');
  return (
    <>
      {/* {isMobile ?(<MobileNavbar/>):(<Navbar/>)} */}
      <MobileNavbar />
      <Navbar />
      <section id='about' className="bg-[#141414]">
        <div className="container py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-3/5">
              <p className="mt-3 text-gray-200 font-extrabold text-2xl ">Hey,</p>
              <div>
                <h1 className="text-5xl font-extrabold text-left lg:text-7xl 2xl:text-7xl"><span className=" text-white ">I am</span></h1>
                <h1 className="text-5xl font-extrabold text-left lg:text-6xl 2xl:text-7xl"><span className="text-transparent bg-gradient-to-tl bg-clip-text from-blue-500 to-pink-500 ">Pranav Chandra</span></h1>
              </div>
              <div className="text-white font-bold text-3xl mt-2">
                <Typewriter
                  options={{
                    strings: ['Ex-Lawyer', 'Entrepreneur', 'Product Enthusiast'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mt-3 lg:pr-10 text-gray-600 dark:text-gray-400"> Passionate product enthusiast with a diverse background in law and entrepreneurship. MBA candidate at Master&apos;s Union with proven success in scaling an F&amp;B venture. Committed to crafting exceptional products and setting new standards for user satisfaction. Continuous learner and lateral leader, eager to connect with like-minded professionals.</p>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5">
              <img className="w-full h-full lg:max-w-lg shadow-2xl shadow-[#4b39ef] rounded-full" src="/hero.png" alt="hero.png" />
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      <section id='skills' className="bg-[#141414]">
        {/* ... rest of the Skills content ... */}
      </section>
      <Book />
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;
