{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from 'react';\
import 'slick-carousel/slick/slick.css';\
import 'slick-carousel/slick/slick-theme.css';\
import Slider from 'react-slick';\
\
const Certifications = () => \{\
  const settings = \{\
    dots: true,\
    infinite: true,\
    speed: 500,\
    slidesToShow: 2,\
    slidesToScroll: 1,\
    responsive: [\
      \{\
        breakpoint: 1024,\
        settings: \{\
          slidesToShow: 2,\
          slidesToScroll: 1,\
        \},\
      \},\
      \{\
        breakpoint: 600,\
        settings: \{\
          slidesToShow: 1,\
          slidesToScroll: 1,\
        \},\
      \},\
    ],\
  \};\
\
  return (\
    <section className="bg-[#141414] py-10">\
      <div className="container px-6 mx-auto">\
        <h1 className="text-3xl font-semibold text-center capitalize lg:text-5xl text-white mb-8">Certifications</h1>\
        <Slider \{...settings\}>\
          <div>\
            <img className="object-contain w-full rounded-lg" src="/books/certificatepm.png" alt="Certificate PM" />\
          </div>\
          <div>\
            <img className="object-contain w-full rounded-lg" src="/books/pmbasics.png" alt="PM Basics" />\
          </div>\
        </Slider>\
      </div>\
    </section>\
  );\
\};\
\
export default Certifications;\
}