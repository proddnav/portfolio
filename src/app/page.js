"use client";
import Book from '@/Components/Book';
import Footer from '@/Components/Footer';
import MobileNavbar from '@/Components/MobileNavbar';
import Navbar from '@/Components/Navbar';
import Portfolio from '@/Components/Portfolio';
import Timeline from '@/Components/Timeline';
import Certifications from '@/Components/Certifications';
import Recommendation from '@/Components/Recommendation'; // Corrected import statement
import React from 'react';
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from 'usehooks-ts';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:1024px)');
  return (
    <>
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
              <p className="mt-3 lg:pr-10 text-gray-600 dark:text-gray-400">Passionate product enthusiast with a diverse background in law and entrepreneurship with 4+ year work experience. MBA candidate at Master&apos;s Union with proven success in scaling an F&amp;B venture. Committed to crafting exceptional products and setting new standards for user satisfaction. Continuous learner and lateral leader, eager to connect with like-minded professionals</p>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5">
              <img className="w-full h-full lg:max-w-lg shadow-2xl shadow-[#4b39ef] rounded-full" src="/hero.png" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <Recommendation />

      <Portfolio />

      <section className="bg-[#141414]">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-semibold text-white lg:text-5xl">Tech Skills</h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              Always Evolving, Forever Learning
            </p>
          </div>
          <div className="max-w-screen-xl mx-auto mt-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-7">
              {['1', '2', '3', '4', '5', '6', '7', '8'].map((icon, index) => (
                <div key={index} className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                  <img src={`/icons/${icon}.png`} alt={`Icon ${icon}`} className='aspect-[1/1] w-24' style={{ filter: 'brightness(200%) contrast(1000%) invert(100%)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Certifications />
      <Book />
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;
