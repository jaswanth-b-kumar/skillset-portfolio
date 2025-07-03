import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Cpu, Zap, ArrowRight } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    'Senior Software Engineer',
    'React.js Specialist',
    'Frontend Architect',
    'Full-Stack Developer',
    'AI-Augmented Developer'
  ];

  const fullText = roles[currentRoleIndex];

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypedText('');
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-16 h-16 border-2 border-primary-500/30 rounded-lg"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-20 w-8 h-8 bg-secondary-500/30 rounded-full"
        />
        <motion.div
          animate={{ x: [-30, 30, -30] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 left-20 w-12 h-12 border-2 border-accent-500/30 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium"
            >
              👋 Hello, I'm
            </motion.p>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="gradient-text">Jaswanth Kumar</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
              Bevara
            </h2>
          </motion.div>

          {/* Dynamic Role */}
          <motion.div variants={itemVariants} className="h-16 flex items-center justify-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-500 dark:text-primary-400">
              <span className="typing-cursor">{typedText}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Transforming ideas into exceptional digital experiences with{' '}
              <span className="text-primary-500 font-semibold">5+ years</span> of frontend expertise.
              Currently architecting scalable solutions at{' '}
              <span className="text-secondary-500 font-semibold">Liv-ex, London</span>,
              while evolving into a{' '}
              <span className="gradient-text font-semibold">Full-Stack & AI-Augmented Developer</span>.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div variants={itemVariants} className="flex justify-center items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-xl glass-effect"
            >
              <Code2 size={24} className="text-primary-500" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 rounded-xl glass-effect"
            >
              <Cpu size={24} className="text-secondary-500" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-xl glass-effect"
            >
              <Zap size={24} className="text-accent-500" />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={scrollToAbout}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.a
              href="mailto:jaswanth.k.bevara@gmail.com"
              className="px-8 py-4 glass-effect text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:text-primary-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Fixed positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 cursor-pointer z-20"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;