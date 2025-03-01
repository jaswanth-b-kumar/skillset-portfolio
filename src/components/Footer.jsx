import React from 'react';
import { Link } from 'react-scroll';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <svg viewBox="0 0 200 50" className="h-10 w-auto">
                <text 
                  x="10" 
                  y="35" 
                  className="font-mono font-bold text-2xl fill-current text-white"
                >
                  {"<"}JaswanthB{">"}
                </text>
              </svg>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-wrap justify-center mb-6 md:mb-0">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-300 hover:text-white mx-3 my-2 transition-colors cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </nav>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a 
                href="https://medium.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0v24h24v-24h-24zm19.938 5.686l-1.32 1.261c-.113.123-.161.214-.161.428v9.252c0 .214.048.305.161.428l1.32 1.261v.277h-6.638v-.277l1.368-1.324c.134-.134.134-.174.134-.428v-7.474l-3.806 9.656h-.508l-4.44-9.656v6.464c0 .321.064.429.193.59l1.388 1.68v.277h-3.943v-.277l1.388-1.68c.13-.16.161-.269.161-.59v-7.464c0-.246-.031-.335-.161-.458l-1.235-1.485v-.277h3.835l3.439 7.554 3.024-7.554h3.658v.277z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-sm text-gray-400">
                &copy; {currentYear} Jaswanth Kumar Bevara. All rights reserved.
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Frontend Developer | Aspiring Frontend Architect | AI-Augmented Developer</p>
              </div>
            </div>
            
            <div className="mt-6 text-center text-xs text-gray-500">
              <p>
                <span className="font-mono">// Try typing "help" in the console for a surprise</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;