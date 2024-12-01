import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import K from '../constant';
import logo from '../assets/images/logo1.png';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-white text-white px-6 py-4 fixed top-0 left-0 w-full z-50 flex justify-around items-center font-poppins">
      {/* Logo */}
      <div>
        <img src={logo} alt="FarmerFrend Logo" className="h-20 w-auto" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {/* Adding text-gray-800 (or any other color you prefer) to change the icon color */}
          {isOpen ? (
            <FiX size={28} className="text-primary" />
          ) : (
            <FiMenu size={28} className="text-primary" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:space-x-8 text-lg md:items-center absolute md:static top-16 left-0 right-0 bg-primary md:bg-primary px-6 md:px-2 py-4 md:py-2 rounded-lg`}
      >
        {K.NAVLINKS.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.name.toLowerCase())}
            className={`py-2 md:py-0 hover:text-secondary ${
              activeSection === item.name.toLowerCase() ? 'underline' : ''
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
