import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'EMS Program Director',
      message: 'LJ\'s MedTech kits have revolutionized how we prepare our students. They arrive to clinicals fully equipped and confident.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Marcus Chen',
      role: 'Healthcare Educator',
      message: 'Innovation meets practicality. The attention to detail in every supply kit shows a deep understanding of real-world training needs.',
      avatar: '👨‍🏫'
    },
    {
      name: 'Emily Rodriguez',
      role: 'EMS Student',
      message: 'As a student, having a complete kit reduced my stress and helped me focus on learning. Highly recommended for anyone in EMS training.',
      avatar: '👩‍🎓'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="section pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="content mb-12"
      >
        <h2>What People Say</h2>
        <p className="text-gray-300 text-lg">
          Trusted by educators, students, and institutions across the nation
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-400 transition duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-cyan-400 text-lg">★</span>
              ))}
            </div>

            {/* Message */}
            <p className="text-gray-300 mb-6 italic">
              "{testimonial.message}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="text-4xl">{testimonial.avatar}</div>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-cyan-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
