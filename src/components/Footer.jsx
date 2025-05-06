import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-16 py-8 font-['Poppins']">
      <div className="mx-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-gray-300 text-lg">Manan Narwal</p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/manannarwal/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#a6bbcc] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/manannarwal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#a6bbcc] transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://instagram.com/manan__narwal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#a6bbcc] transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;