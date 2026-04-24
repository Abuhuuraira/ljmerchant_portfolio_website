import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Optional: Use history API to update URL without hash
      window.history.pushState(null, null, window.location.pathname);
    }
  };

  return (
    <nav className="bg-black/30 backdrop-blur-lg p-4 fixed top-0 w-full z-10 shadow-lg navbar-twinkle border-b border-cyan-400/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-cyan-400">LJ</span> Merchant
        </div>
        <ul className="hidden md:flex space-x-6 text-white">
          <li><a href="/" onClick={(e) => scrollToSection(e, 'hero')} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Home</a></li>
          <li><a href="about" onClick={(e) => scrollToSection(e, 'about')} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">About</a></li>
          <li><a href="story" onClick={(e) => scrollToSection(e, 'story')} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Story</a></li>
          <li><a href="timeline" onClick={(e) => scrollToSection(e, 'timeline')} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Timeline</a></li>
          <li><a href="companies" onClick={(e) => scrollToSection(e, 'companies')} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Companies</a></li>
          <li><a href="visuals" onClick={(e) => scrollToSection(e, 'visuals')} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Visuals</a></li>
          <li><a href="contact" onClick={(e) => scrollToSection(e, 'contact')} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300">Contact</a></li>
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
            <li><a href="/" onClick={(e) => { scrollToSection(e, 'hero'); setIsOpen(false); }} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block">Home</a></li>
            <li><a href="/" onClick={(e) => { scrollToSection(e, 'about'); setIsOpen(false); }} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block">About</a></li>
            <li><a href="/" onClick={(e) => { scrollToSection(e, 'story'); setIsOpen(false); }} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block">Story</a></li>
            <li><a href="/" onClick={(e) => { scrollToSection(e, 'timeline'); setIsOpen(false); }} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block">Timeline</a></li>
            <li><a href="/" onClick={(e) => { scrollToSection(e, 'companies'); setIsOpen(false); }} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block">Companies</a></li>
            <li><a href="/" onClick={(e) => { scrollToSection(e, 'visuals'); setIsOpen(false); }} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block">Visuals</a></li>
            <li><a href="/" onClick={(e) => { scrollToSection(e, 'contact'); setIsOpen(false); }} className="underline-animation py-2 px-4 rounded-lg hover:text-cyan-400 font-medium transition-all duration-300 block">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;