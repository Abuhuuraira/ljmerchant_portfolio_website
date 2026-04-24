import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-cyan-400">LJ</span> Merchant
            </h3>
            <p className="text-gray-400">Building the future of MedTech innovation.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="underline-animation text-gray-400 hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#about" className="underline-animation text-gray-400 hover:text-cyan-400 transition">About</a></li>
              <li><a href="#companies" className="underline-animation text-gray-400 hover:text-cyan-400 transition">Companies</a></li>
              <li><a href="#contact" className="underline-animation text-gray-400 hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/medtechkits" target="_blank" rel="noopener noreferrer" className="underline-animation text-gray-400 hover:text-cyan-400 transition">LinkedIn</a></li>
              <li><a href="https://medtechkits.com/" target="_blank" rel="noopener noreferrer" className="underline-animation text-gray-400 hover:text-cyan-400 transition">MedTech Store</a></li>
              <li><a href="mailto:info@medtechkits.com" className="underline-animation text-gray-400 hover:text-cyan-400 transition">Email</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">Email</p>
            <a href="mailto:info@medtechkits.com" className="underline-animation text-cyan-400 hover:text-cyan-300 transition block mb-4">
              info@medtechkits.com
            </a>
            <p className="text-gray-400 mb-2">Location</p>
            <p className="text-cyan-400">United States</p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} LJ Merchant. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="underline-animation text-gray-500 hover:text-cyan-400 text-sm transition">Privacy Policy</a>
              <a href="#" className="underline-animation text-gray-500 hover:text-cyan-400 text-sm transition">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
