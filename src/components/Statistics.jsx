import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const Statistics = () => {
  const stats = [
    {
      number: 500,
      suffix: '+',
      label: 'EMS Students Equipped',
      description: 'Helping students prepare for clinical training'
    },
    {
      number: 50,
      suffix: '+',
      label: 'Healthcare Institutions',
      description: 'Partnering with training programs nationwide'
    },
    {
      number: 5,
      suffix: '+',
      label: 'Years in MedTech',
      description: 'Continuous innovation and development'
    },
    {
      number: 100,
      suffix: '%',
      label: 'Commitment to Excellence',
      description: 'Dedicated to transforming healthcare education'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="statistics" className="section pt-20 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="content mb-12"
      >
        <h2>Impact & Achievements</h2>
        <p className="text-gray-300 text-lg">
          Building meaningful solutions that transform healthcare education and training
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative bg-gray-900/80 backdrop-blur border border-gray-800 group-hover:border-cyan-400 rounded-lg p-8 transition duration-300">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-5xl font-bold text-cyan-400 mb-3"
              >
                <Counter end={stat.number} suffix={stat.suffix} duration={2} />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-400">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Statistics;
