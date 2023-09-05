import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,  // Enable automatic transitions
    autoplaySpeed: 5000,  // Set the speed to 5 seconds
  };

  const certificationLinks = {
    'google.png': 'https://www.coursera.org/account/accomplishments/professional-cert/BXCWVKH64KPM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof',
    'pmschool.png': 'https://drive.google.com/file/d/1Vnq3MpYBcl34WmZHqcTroznHo4NnYVMO/view',
    'pendo.png': 'https://www.credly.com/badges/1fa47bec-ffcd-458b-a61c-11fceae634c5/linked_in_profile',
  };

  return (
    <section className="bg-[#141414] py-10">
      <div className="container px-6 mx-auto">
        <h1 className="text-3xl font-semibold text-center capitalize lg:text-5xl text-white mb-12">
          Certifications & Achievements
        </h1>
        <Slider {...settings} className="space-x-8">
          {Object.keys(certificationLinks).map((image, index) => (
            <div key={index} className="px-4">
              <a href={certificationLinks[image]} target="_blank" rel="noopener noreferrer">
                <img className="object-contain w-3/4 mx-auto rounded-lg h-[400px]" src={`/certifications/${image}`} alt={`${image.split('.')[0]} Certification`} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certifications;
