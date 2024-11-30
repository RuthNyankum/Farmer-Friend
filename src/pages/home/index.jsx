import React, { useState } from 'react';
import bgImage from '../../assets/images/bg.jpg';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative h-[60vh] sm:h-[80vh] bg-cover bg-center mt-16 font-poppins"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 pt-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ">
          Welcome to <span className="font-courgette">Farmer Frend</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-6">
          Providing top-quality, organic animal feed for healthy, sustainable
          farming.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-secondary transition duration-300"
          onClick={() => scrollToSection('about')}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
