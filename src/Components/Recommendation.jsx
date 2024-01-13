import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Recommendation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // This will show one card at a time in the carousel
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#141414] py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center capitalize lg:text-5xl text-white mb-12">
          Recommendations
        </h1>
        <div className="flex justify-center">
          <Slider {...settings} className="w-full max-w-sm">
            {/* Malthi SS Testimonial Slide */}
            <div className="bg-white rounded-lg p-4 shadow-2xl">
              <div className="flex flex-col items-center">
                <img className="w-24 h-24 rounded-full" src="/certifications/malthi.png" alt="Malthi SS" />
                <div className="text-center mt-4">
                  <a href="https://www.linkedin.com/in/malthis" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                    Malthi SS
                  </a>
                  <p className="text-sm text-gray-500">Consultant CPO at HerKey (formerly JobsForHer) | Professor of Practice- IIM-U & Masters Union | Product Management Trainer | Speaker | Ex-PayPal, Intuit, SAP</p>
                </div>
              </div>
              <p className="text-gray-800 text-lg mt-6">{"Pranav has attended my classes on Product Strategy and Execution. He is always well prepared for the class and has a POV on the topics we discuss or the cases we deep dive on."}</p>
              <p className="text-gray-800 text-lg mt-4">{"He is very methodical and diligent on his approach and is detail oriented. He is also at problem solving and articulate. I wish him a great career in Products and I am sure he will be an asset for any organization."}</p>
            </div>

            {/* Ronith Reddy Testimonial Slide */}
            <div className="bg-white rounded-lg p-4 shadow-2xl">
              <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-600">RR</div>
                <div className="text-center mt-4">
                  <p className="text-lg font-semibold text-gray-800">Ronith Reddy</p>
                  <p className="text-sm text-gray-500">Director, Ganga Kaveri Pvt Ltd</p>
                </div>
              </div>
              <p className="text-gray-800 text-lg mt-6">{"As Director of Ganga Kaveri Pvt Ltd, I had the distinct pleasure of working with Pranav Chandra, a highly skilled Product Consultant. Pranav played a critical role in the development of our farm management software. His innovative approach to user-centric design and real-time monitoring has the potential to enhance crop yield by 20%."}</p>
              <p className="text-gray-800 text-lg mt-4">{"Furthermore, his development of a monitoring system is expected to reduce pilferages by 15%, significantly improving our operational efficiency. Pranav's contributions are vital to our ongoing digital transformation in the agri seed processing sector."}</p>
</div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Recommendation;
