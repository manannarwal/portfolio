import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:flex items-center px-8 py-6 top-0 left-0 right-0">
      {/* Your name on the left */}
      <div className="font-['Poppins'] font-semibold text-lg lg:text-xl text-white">
        Manan Narwal
      </div>
      
      {/* Navigation links in the middle */}
      <div className="flex gap-8 font-['Poppins'] mx-auto">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-gray-300 hover:text-[#a6bbcc] transition-colors lg:text-lg"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-300 hover:text-[#a6bbcc] transition-colors lg:text-lg"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('work')}
          className="text-gray-300 hover:text-[#a6bbcc] transition-colors lg:text-lg"
        >
          Work
        </button>
      </div>
      
      {/* GitHub icon on the right */}
      <div>
        <a 
          href="https://github.com/manannarwal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#a6bbcc] transition-colors"
        >
          <FaGithub size={24} className="lg:w-7 lg:h-7" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;