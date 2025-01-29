import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useTranslation } from 'react-i18next';
import '../../config/i18n'; 

const Slider = ({ slides }) => {

  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
   
  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  

  return (
    <div className="relative w-full h-[calc(95vh)] overflow-hidden">
      {/* Slider with background image */}
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        {/* Background overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Navbar inside slider */}
        <div className="relative z-20">
          <Navbar color={"white"}/>
        </div>

        {/* Slider content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
          <div className="text-white flex flex-col gap-12">
            <h1 className="text-3xl mr-16 sm:text-4xl md:text-5xl lg:text-6xl font-bold md:mr-64 mb-2">
              {slides[currentIndex].title}
            </h1>
            <h1 className="text-3xl ml-16 sm:text-4xl md:text-5xl lg:text-6xl md:ml-64 font-bold text-[#be9c45]">{slides[currentIndex].description}</h1>
          </div>
        </div>

        {/* Navigation buttons */}
        {/* <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full hover:bg-opacity-80 z-10"
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full hover:bg-opacity-80 z-10"
          onClick={nextSlide}
        >
          &#8594;
        </button> */}
      </div>
    </div>
  );
};

export default Slider;
