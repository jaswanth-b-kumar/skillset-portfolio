import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Coffee, MessageCircle, Calendar } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jaswanth.k.bevara@gmail.com',
      href: 'mailto:jaswanth.k.bevara@gmail.com',
      color: 'text-primary-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 07356095607',
      href: 'tel:+447356095607',
      color: 'text-secondary-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'London, England',
      href: 'https://maps.google.com/?q=London,England',
      color: 'text-accent-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jaswanth-b-kumar',
      color: 'hover:text-gray-600',
      description: 'Check out my code repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jaswanth-bevara/',
      color: 'hover:text-blue-600',
      description: 'Connect with me professionally'
    },
    {
      icon: ExternalLink,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/jaswanth-b-kumar/',
      color: 'hover:text-orange-600',
      description: 'See my coding challenges'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: 'https://jaswanth-b-kumar.github.io/skillset-portfolio/',
      color: 'hover:text-purple-600',
      description: 'Visit my live portfolio'
    }
  ];

  const quickActions = [
    {
      icon: Coffee,
      title: 'Coffee Chat',
      description: `Let's discuss opportunities over coffee`,
      action: 'Schedule a casual meeting',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: MessageCircle,
      title: 'Quick Question',
      description: 'Have a technical question? Ask away!',
      action: 'Send a message',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Collaboration',
      description: 'Interested in working together?',
      action: `Let's plan a project`,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-responsive" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to discuss opportunities, collaborate on projects, or just have a technical conversation? 
              I'm always excited to connect with fellow developers and potential collaborators.
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={itemVariants} className="grid-responsive-1-3 gap-responsive">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center cursor-pointer group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center`}>
                  <action.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{action.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{action.description}</p>
                <div className="text-primary-500 font-medium group-hover:text-secondary-500 transition-colors">
                  {action.action}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid-responsive-1-2 gap-responsive">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-black/20 border border-gray-300 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-black/20 border border-gray-300 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-black/20 border border-gray-300 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-black/20 border border-gray-300 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Tell me more about your project, opportunity, or question..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-primary-500/25'
                    } text-white`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner w-5 h-5" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center"
                    >
                      Thanks for your message! I'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Get in touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 dark:hover:bg-black/5 transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`p-3 rounded-full glass-effect ${info.color}`}>
                        <info.icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                        <div className="font-medium text-gray-800 dark:text-white group-hover:text-primary-500 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Connect on social
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 rounded-lg glass-effect hover:scale-105 transition-all duration-300 group ${social.color}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                      <div className="flex-1">
                        <div className="font-medium">{social.label}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors">
                          {social.description}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="glass-effect p-6 rounded-2xl text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500 font-semibold">Available for opportunities</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently open to full-stack development roles, AI/ML projects, and freelance collaborations
                </p>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to work together?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Whether you're looking for a passionate developer to join your team, need consultation on a project, 
                or want to discuss the latest in web development and AI, I'd love to hear from you. Let's create 
                something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:jaswanth.k.bevara@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                  <span>Email Me</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/jaswanth-bevara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 glass-effect text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:text-primary-500 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} />
                  <span>Connect on LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;