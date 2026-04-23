import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="section pt-20 pb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-2xl blur-3xl"></div>

        {/* Content */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/50 rounded-2xl p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Transform <span className="text-cyan-400">Healthcare?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-300 mb-8"
            >
              Whether you're exploring MedTech solutions, interested in collaboration, or have a project idea, I'm here to help. Let's build something meaningful together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://medtechkits.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold py-4 px-10 rounded-full transition duration-300"
              >
                Explore MedTech Store
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 mt-8"
            >
              💡 Have an innovative idea? Let's discuss how we can bring it to life.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
