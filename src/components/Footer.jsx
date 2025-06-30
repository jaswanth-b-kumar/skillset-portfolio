import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jaswanth-b-kumar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jaswanth-bevara/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jaswanth.k.bevara@gmail.com', label: 'Email' },
    { icon: ExternalLink, href: 'https://leetcode.com/u/jaswanth-b-kumar/', label: 'LeetCode' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 mt-20 border-t border-gray-200 dark:border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
        <div className="absolute inset-0 hero-pattern" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-2">Jaswanth Kumar Bevara</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Senior Software Engineer passionate about creating exceptional digital experiences 
                through innovative frontend solutions. Transforming into a Full-Stack & AI-Augmented Developer.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <span>Built with</span>
              <Heart className="text-red-500" size={14} />
              <span>using</span>
              <Code className="text-primary-500" size={14} />
              <span>React.js</span>
              <span>&</span>
              <Coffee className="text-yellow-600" size={14} />
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect rounded-full hover:text-primary-500 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-600 dark:text-gray-400"
            >
              <span>© {currentYear} Jaswanth Kumar Bevara. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span>Made in London 🇬🇧</span>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 glass-effect rounded-full hover:text-primary-500 hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ArrowUp size={18} className="group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full text-xs text-gray-600 dark:text-gray-400">
            <span>Built with</span>
            <span className="font-semibold text-primary-500">React.js</span>
            <span>•</span>
            <span className="font-semibold text-secondary-500">Tailwind CSS</span>
            <span>•</span>
            <span className="font-semibold text-accent-500">Framer Motion</span>
            <span>•</span>
            <span className="font-semibold text-purple-500">Three.js</span>
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-600">
            💡 Psst... Open the browser console and type "help()" for some hidden features!
          </p>
        </motion.div>

        {/* Version Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-center"
        >
          <span className="text-xs text-gray-400 dark:text-gray-600">
            Portfolio v2.0 | Last updated: {new Date().toLocaleDateString()}
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;