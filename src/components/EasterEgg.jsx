import React, { useEffect, useRef } from 'react';

const EasterEgg = ({ darkMode, onClose }) => {
  const terminalRef = useRef(null);
  
  useEffect(() => {
    // Auto focus the terminal when it appears
    if (terminalRef.current) {
      terminalRef.current.focus();
    }
    
    // Add escape key handler to close easter egg
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  const commandHistory = [
    { command: 'help', output: 'Available commands: about, skills, contact, social, clear, exit' },
    { 
      command: 'about', 
      output: `
Jaswanth Kumar Bevara
==================

Frontend Developer passionate about creating exceptional user experiences through clean, efficient code. Currently working at Liv-ex as a React Developer while aspiring to become a Frontend Architect and AI-Augmented Developer.

With expertise in React.js, JavaScript, TypeScript, HTML5, and CSS/SCSS, I build scalable and user-friendly web applications. I'm dedicated to staying current with emerging technologies and best practices in the rapidly evolving frontend landscape.
      `
    },
    { 
      command: 'skills',
      output: `
TECHNICAL SKILLS
===============

Languages:
- JavaScript (Advanced)
- TypeScript (Advanced)
- HTML5 (Expert)
- CSS/SCSS (Expert)

Frameworks/Libraries:
- React.js (Expert)
- Angular.js (Intermediate)
- jQuery (Advanced)

Tools & Platforms:
- Git
- AWS S3/CloudFront
- Azure DevOps
- Figma
- Jest and RTL
- Mocha and Chai
- NPM, Yarn
      `
    },
    {
      command: 'contact',
      output: `
CONTACT INFO
===========

Email: jaswanth.k.bevara@gmail.com
Phone: +44 7356095607 / +91 7382208947
Location: E14, London, England
      `
    },
    {
      command: 'social',
      output: `
SOCIAL LINKS
===========

LinkedIn: https://linkedin.com
GitHub: https://github.com
Medium: https://medium.com
      `
    }
  ];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div 
        className={`w-full max-w-4xl max-h-[80vh] rounded-lg overflow-hidden shadow-xl border ${
          darkMode ? 'border-cyan-500/50' : 'border-blue-600/50'
        }`}
      >
        {/* Terminal header */}
        <div className={`px-4 py-2 flex items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
          <div className="flex space-x-2">
            <div 
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600"
              onClick={onClose}
            ></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-white font-mono text-sm">guest@jaswanth-portfolio ~ (Easter Egg)</div>
        </div>
        
        {/* Terminal content */}
        <div 
          ref={terminalRef}
          className={`h-[60vh] overflow-y-auto p-4 font-mono text-sm focus:outline-none ${
            darkMode ? 'bg-gray-950 text-gray-200' : 'bg-gray-900 text-gray-200'
          }`}
          tabIndex="0"
        >
          <div className="mb-4">
            <pre className={`${darkMode ? 'text-cyan-400' : 'text-blue-400'}`}>
{`
   _                            _   _     _____                     
  (_)                          | | | |   |  __ \\                    
   _  __ _ _____      ____ _ _ | |_| |__ | |__) |__  _ __  ___  ___ 
  | |/ _\` / __\\ \\ /\\ / / _\` | | __| '_ \\|  ___/ _ \\| '_ \\/ __|/ _ \\
  | | (_| \\__ \\\\ V  V / (_| | | |_| | | | |  | (_) | |_) \\__ \\ (_) |
  | |\\__,_|___/ \\_/\\_/ \\__,_|_|\\__|_| |_|_|   \\___/| .__/|___/\\___/ 
 _/ |                                              | |              
|__/                                               |_|              
`}
            </pre>
            <p className="mt-2">Welcome to my interactive portfolio terminal! Type 'help' for available commands.</p>
            <p className="mt-1">Press 'ESC' key to exit this terminal.</p>
          </div>
          
          {commandHistory.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center">
                <span className={`${darkMode ? 'text-cyan-400' : 'text-blue-400'}`}>guest@jaswanth-portfolio:~$</span>
                <span className="ml-2">{item.command}</span>
              </div>
              <pre className="mt-2 whitespace-pre-wrap">{item.output}</pre>
            </div>
          ))}
          
          <div className="flex items-center">
            <span className={`${darkMode ? 'text-cyan-400' : 'text-blue-400'}`}>guest@jaswanth-portfolio:~$</span>
            <span className="ml-2 animate-pulse">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;