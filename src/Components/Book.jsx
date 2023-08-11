import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Book = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#141414]">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center capitalize lg:text-5xl text-white mb-10">
          Books That Lit My Path
        </h1>
        <Slider {...settings}>
          <div className="p-4">
            <img className="object-contain w-full h-64 rounded-lg" src="/books/1.jpg" alt="imges" />
          </div>
          <div className="p-4">
            <img className="object-contain w-full h-64 rounded-lg" src="/books/2.jpg" alt="imges1" />
          </div>
          <div className="p-4">
            <img className="object-contain w-full h-64 rounded-lg" src="/books/3.jpg" alt="imges2" />
          </div>
          <div className="p-4">
            <img className="object-contain w-full h-64 rounded-lg" src="/books/4.jpg" alt="imges3" />
          </div>
          <div className="p-4">
            <img className="object-contain w-full h-64 rounded-lg" src="/books/5.jpg" alt="imges4" />
          </div>
          <div className="p-4">
            <img className="object-contain w-full h-64 rounded-lg" src="/books/6.jpg" alt="imges5" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Book;
