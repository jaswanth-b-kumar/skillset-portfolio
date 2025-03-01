import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'<'}</span>
            Contact Me
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'>'}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className={`p-6 rounded-lg shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-blue-100 text-blue-600'}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</h4>
                      <a 
                        href="tel:+447356095607" 
                        className={`block mt-1 ${darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-blue-600'} transition-colors`}
                      >
                        +44 7356095607
                      </a>
                      <a 
                        href="tel:+917382208947" 
                        className={`block mt-1 ${darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-blue-600'} transition-colors`}
                      >
                        +91 7382208947
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-blue-100 text-blue-600'}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</h4>
                      <a 
                        href="mailto:jaswanth.k.bevara@gmail.com" 
                        className={`block mt-1 ${darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-900 hover:text-blue-600'} transition-colors`}
                      >
                        jaswanth.k.bevara@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-blue-100 text-blue-600'}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Location</h4>
                      <p className={`mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        E14, London, England
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8">
                  <h4 className={`text-sm font-medium mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 text-cyan-400 hover:bg-gray-600' 
                          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 text-cyan-400 hover:bg-gray-600' 
                          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a 
                      href="https://medium.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 text-cyan-400 hover:bg-gray-600' 
                          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 0v24h24v-24h-24zm19.938 5.686l-1.32 1.261c-.113.123-.161.214-.161.428v9.252c0 .214.048.305.161.428l1.32 1.261v.277h-6.638v-.277l1.368-1.324c.134-.134.134-.174.134-.428v-7.474l-3.806 9.656h-.508l-4.44-9.656v6.464c0 .321.064.429.193.59l1.388 1.68v.277h-3.943v-.277l1.388-1.68c.13-.16.161-.269.161-.59v-7.464c0-.246-.031-.335-.161-.458l-1.235-1.485v-.277h3.835l3.439 7.554 3.024-7.554h3.658v.277z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send Me a Message
                </h3>
                
                {isSubmitted ? (
                  <div className={`p-4 rounded-md mb-6 ${
                    darkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-800'
                  }`}>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p>Your message has been sent successfully! I'll get back to you soon.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Name
                      </label>
                      <input 
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                          darkMode 
                            ? 'bg-gray-700 text-white focus:ring-cyan-400 border border-gray-600' 
                            : 'bg-white text-gray-900 focus:ring-blue-500 border border-gray-300'
                        } ${errors.name ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                      />
                      {errors.name && (
                        <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Email
                      </label>
                      <input 
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                          darkMode 
                            ? 'bg-gray-700 text-white focus:ring-cyan-400 border border-gray-600' 
                            : 'bg-white text-gray-900 focus:ring-blue-500 border border-gray-300'
                        } ${errors.email ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                      />
                      {errors.email && (
                        <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="subject" 
                        className={`block text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Subject
                      </label>
                      <input 
                        id="subject"
                        name="subject"
                        type="text"
                        value={formState.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                          darkMode 
                            ? 'bg-gray-700 text-white focus:ring-cyan-400 border border-gray-600' 
                            : 'bg-white text-gray-900 focus:ring-blue-500 border border-gray-300'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="message" 
                        className={`block text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Message
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        rows="5"
                        value={formState.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                          darkMode 
                            ? 'bg-gray-700 text-white focus:ring-cyan-400 border border-gray-600' 
                            : 'bg-white text-gray-900 focus:ring-blue-500 border border-gray-300'
                        } ${errors.message ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                      />
                      {errors.message && (
                        <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                        darkMode 
                          ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      } ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;