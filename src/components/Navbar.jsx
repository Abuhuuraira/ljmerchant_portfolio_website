import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-lg p-4 fixed top-0 w-full z-10 shadow-lg navbar-twinkle border-b border-cyan-400/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-cyan-400">LJ</span> Merchant
        </div>
        <ul className="hidden md:flex space-x-6 text-white">
          <li><a href="#hero" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Home</a></li>
          <li><a href="#about" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">About</a></li>
          <li><a href="#story" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Story</a></li>
          <li><a href="#timeline" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Timeline</a></li>
          <li><a href="#companies" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Companies</a></li>
          <li><a href="#visuals" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Visuals</a></li>
          <li><a href="#contact" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Contact</a></li>
        </ul>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-lg mt-4 py-4 rounded-lg">
          <ul className="flex flex-col space-y-4 text-white text-center">
            <li><a href="#hero" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#story" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block" onClick={() => setIsOpen(false)}>Story</a></li>
            <li><a href="#timeline" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block" onClick={() => setIsOpen(false)}>Timeline</a></li>
            <li><a href="#companies" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block" onClick={() => setIsOpen(false)}>Companies</a></li>
            <li><a href="#visuals" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block" onClick={() => setIsOpen(false)}>Visuals</a></li>
            <li><a href="#contact" className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;