import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto text-center font-poppins">
        {/* Brand Name */}
        <p className="text-2xl font-semibold mb-2">Farmer Friend</p>

        {/* Brand Description */}
        <p className="text-sm mb-6 max-w-lg mx-auto">
          Empowering farmers with sustainable, organic solutions for healthy
          poultry and productive farms.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://www.facebook.com/farmerfriend"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-transform transform hover:scale-110"
          >
            <BsFacebook size={28} />
          </a>
          <a
            href="https://www.instagram.com/farmerfriend"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform transform hover:scale-110"
          >
            <BsInstagram size={28} />
          </a>
          <a
            href="https://twitter.com/farmerfriend"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-transform transform hover:scale-110"
          >
            <BsTwitter size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © 2024 Farmer Friend. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
