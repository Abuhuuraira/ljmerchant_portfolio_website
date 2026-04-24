import { useState } from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import emailjs from 'emailjs-com';
import ljmerchantImage from './assets/limerchantimage.png';
import medtechKitsImage from './assets/medtechkit-image.png';
import tmaImage from './assets/TMA.png';
import mcaExposeImage from './assets/mcexpose_image.svg';
import simulationImage from './assets/MedTech-simulation.png';
import ljmerchantVisualImage from './assets/ljmerchant-visual-image.png';
import medtechVisualImage from './assets/medtech-visual-image.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_id', 'template_id', formData, 'user_id')
      .then(() => setIsSent(true))
      .catch(() => alert('Error sending message'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <Navbar />
      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center min-h-screen pt-20">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Building The Future of <span className="medtech-modern">MedTech</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Innovating at the intersection of healthcare, technology, and entrepreneurship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-cyan-500/50">
              Learn More
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold py-3 px-8 rounded-full transition duration-300">
              Contact Me
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="section pt-15">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content"
        >
          <h2>About Me
            </h2>
            
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
            style={{ height: '390px' }}
          >
            <img 
              src={ljmerchantImage}
              alt="LJ Merchant" 
              className="rounded-xl shadow-4xl "
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="about-text-box bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-cyan-500/10">
              <p className="text-base mb-4 text-gray-300">
                I'm LJ Merchant, a builder focused on the future of MedTech. My mission is to explore and develop innovations that improve healthcare,
                extend human capability, and push the boundaries of what technology can achieve in medicine.
              </p>
              <p className="text-base mb-4 text-gray-300">
                I'm passionate about combining technology, entrepreneurship, and research to create solutions that can transform the way healthcare works. From digital health platforms to next-generation medical tools, my focus is on building systems that can make healthcare smarter, faster, and more accessible.
              </p>
              <p className="text-base text-gray-300">
                Through my projects and companies, I aim to contribute to a future where technology empowers doctors, improves patient outcomes, and helps shape a new era of medicine.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* My Story */}
      <section id="story" className="section pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content story-content"
        >
          <h2>My Story</h2>
          <p>
            My journey into MedTech started not in a boardroom, but in a bedroom. It began with a deep curiosity about how innovation can transform healthcare. I and my Wife became fascinated by the potential of technology to improve lives and solve complex medical challenges.
          </p>
          <p>
            Over time, that curiosity turned into a mission – to build systems, ideas, and companies focused on the future of medicine. I believe the intersection of technology, research, and entrepreneurship will define the next generation of healthcare breakthroughs.
          </p>
          <p>
            Today, I continue exploring new opportunities in MedTech, working toward solutions that can make healthcare more intelligent, accessible, and impactful for people around the world.
          </p>
          <motion.div
            className="mission-box"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Mission</h3>
            <p>
              To push the boundaries of medical technology and contribute to a future where innovation dramatically improves human health and longevity.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="section pt-20">
        <h2>My Journey</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Early Inspiration – EMS Training"
            iconStyle={{ background: 'var(--accent)', color: '#fff' }}
          >
            <h3>Early Inspiration – EMS Training</h3>
            <p>LJ noticed many EMS students entered clinicals unprepared because getting the right supplies wasn't easy.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="The Idea"
            iconStyle={{ background: 'var(--accent)', color: '#fff' }}
          >
            <h3>The Idea</h3>
            <p>He envisioned a pre-assembled, customizable supply kit designed specifically for EMS students and programs.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Company Founded"
            iconStyle={{ background: 'var(--accent)', color: '#fff' }}
          >
            <h3>Company Founded</h3>
            <p>LJ launched MedTech from his bedroom, starting with just seven essential items and a commitment to make life easier for EMS students.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      {/* My Companies */}
      <section id="companies" className="section pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content"
        >
          <h2>MedTech Ecosystem</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ecosystem-story"
          >
            <p>
              We build an integrated MedTech ecosystem — from physical training kits to digital platforms that support learning, monitoring, and awareness in modern healthcare education. Each platform is designed to work seamlessly, creating a complete solution for medical professionals and students.
            </p>
          </motion.div>

          <div className="ecosystem-grid">
            {/* MedTech Kits Store Card */}
            <motion.div
              className="ecosystem-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="card-image-container">
                <img src={medtechKitsImage} alt="MedTech Kits" className="card-image" />
              </div>
              <h3>MedTech Kits Store</h3>
              <span className="card-tag">E-commerce</span>
              <p>Pre-assembled and customizable EMS supply kits designed specifically for medical students and training programs. Everything needed for clinical success.</p>
              <a href="https://medtechkits.com/" target="_blank" rel="noopener noreferrer" className="card-button">View Store</a>
            </motion.div>

            {/* TMA - Trainer Monitor App Card */}
            <motion.div
              className="ecosystem-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-image-container">
                <img src={tmaImage} alt="TMA Trainer Monitor" className="card-image" />
              </div>
              <h3>TMA Trainer Monitor</h3>
              <span className="card-tag">Web App</span>
              <p>Advanced dashboard for tracking student performance, progress monitoring, and comprehensive training analytics in real-time.</p>
              <a href="https://trainingmonitor.app/" target="_blank" rel="noopener noreferrer" className="card-button">Learn More</a>
            </motion.div>

            {/* MCA Exposure Card */}
            <motion.div
              className="ecosystem-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="card-image-container">
                <img src={mcaExposeImage} alt="MCA Exposure" className="card-image" />
              </div>
              <h3>MCA Exposure</h3>
              <span className="card-tag">Educational</span>
              <p>Comprehensive awareness platform for medical concepts and healthcare education. Empowering learners with knowledge and insights.</p>
              <a href="https://mca.exposed/" target="_blank" rel="noopener noreferrer" className="card-button">Explore</a>
            </motion.div>

            {/* MedTech Simulation Card */}
            <motion.div
              className="ecosystem-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="card-image-container">
                <img src={simulationImage} alt="MedTech Simulation" className="card-image" />
              </div>
              <h3>MedTech Simulation</h3>
              <span className="card-tag">Simulation</span>
              <p>Interactive simulation tools and product catalog designed to provide realistic training scenarios and hands-on learning experiences.</p>
              <a href="https://medtechsimulation.com/index" target="_blank" rel="noopener noreferrer" className="card-button">Start Simulating</a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MedTech Visuals */}
      <section id="visuals" className="section pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content"
        >
          <h2>MedTech Visuals</h2>
          <div className="visuals-grid">
            <img src={medtechVisualImage} alt="MedTech" className="visual-image" />
            <img src={ljmerchantVisualImage} alt="LJ Merchant" className="visual-image" />
          </div>
        </motion.div>
      </section>

      {/* Statistics & Achievements */}
      <Statistics />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CTA />

      {/* Contact Me */}
      <section id="contact" className="section pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content"
        >
          <h2>Contact Me</h2>
          <p>If you have a project in mind or want to collaborate, feel free to send me a message.</p>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:info@medtechkits.com">info@medtechkits.com</a></p>
            <p><strong>Location:</strong> United States</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/medtechkits" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://medtechkits.com/" target="_blank" rel="noopener noreferrer">Medtech Store</a>
            </div>
          </div>
          {isSent ? (
            <p>Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
