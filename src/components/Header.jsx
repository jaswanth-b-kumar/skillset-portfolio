import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? `${darkMode ? 'bg-gray-900/90 shadow-lg' : 'bg-white/90 shadow-md'} backdrop-blur-md` 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <svg viewBox="0 0 200 50" className="h-10 w-auto">
            <text 
              x="10" 
              y="35" 
              className={`font-mono font-bold text-2xl fill-current ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}
            >
              {"<"}JaswanthB{">"}
            </text>
          </svg>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Blog', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className={`font-medium hover:text-blue-500 cursor-pointer transition-colors ${
                darkMode ? 'text-gray-200 hover:text-cyan-400' : 'text-gray-700'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className={`p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              darkMode 
                ? 'focus:ring-cyan-400 text-gray-200' 
                : 'focus:ring-blue-500 text-gray-700'
            }`}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`ml-4 p-2 rounded-full focus:outline-none focus:ring-2 transition-colors ${
            darkMode 
              ? 'bg-gray-800 text-yellow-300 focus:ring-yellow-500' 
              : 'bg-gray-200 text-gray-700 focus:ring-blue-500'
          }`}
        >
          {darkMode ? (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;