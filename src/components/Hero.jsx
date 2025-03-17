import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { Parallax, useParallax } from 'react-scroll-parallax';

const Hero = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  
  // Handle smooth reveal animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animated text array for role display
  const roles = ["Frontend Developer", "React Specialist", "Aspiring Frontend Architect", "AI-Augmented Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  
  // Role text cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Get parallax instances for custom elements
  const nameParallax = useParallax({ speed: -5 });
  const roleParallax = useParallax({ speed: -10 });
  const cardParallax = useParallax({ speed: 5 });
  const buttonsParallax = useParallax({ speed: 10 });
  
  return (
    <section 
      ref={heroRef}
      id="home" 
      className={`relative min-h-screen overflow-hidden flex items-center ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
              : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-gray-100'
          }`}
        ></div>
        
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: darkMode 
              ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E\")"
              : "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: darkMode ? '80px 80px' : '60px 60px'
          }}
        ></div>
      </div>
      
      {/* PARALLAX BACKGROUND ELEMENTS - Repositioned to avoid main content */}
      
      {/* Far background elements - slow movement */}
      <Parallax translateY={['-100px', '100px']} className="absolute left-[85%] top-[10%] z-0">
        <div 
          className={`rounded-full ${darkMode ? 'bg-cyan-600' : 'bg-blue-600'}`}
          style={{
            width: '300px',
            height: '300px',
            opacity: '0.03',
            filter: 'blur(80px)',
          }}
        ></div>
      </Parallax>
      
      <Parallax translateY={['50px', '-150px']} className="absolute right-[85%] top-[20%] z-0">
        <div 
          className={`rounded-full ${darkMode ? 'bg-purple-600' : 'bg-indigo-600'}`}
          style={{
            width: '250px',
            height: '250px',
            opacity: '0.03',
            filter: 'blur(60px)',
          }}
        ></div>
      </Parallax>
      
      {/* Midground geometric elements - positioned far from content */}
      <Parallax translateY={['-200px', '200px']} className="absolute right-[5%] bottom-[30%] z-10">
        <div className={`w-64 h-64 opacity-10 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="20" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <line x1="50" y1="10" x2="50" y2="90" />
          </svg>
        </div>
      </Parallax>
      
      <Parallax translateY={['100px', '-300px']} translateX={['0px', '100px']} className="absolute left-[3%] bottom-[20%] z-10">
        <div className={`w-32 h-32 opacity-20 ${darkMode ? 'text-cyan-300' : 'text-blue-500'}`}>
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
            <polygon points="50,30 70,40 70,60 50,70 30,60 30,40" />
          </svg>
        </div>
      </Parallax>
      
      {/* Foreground code particles - kept to sides/corners, away from main content */}
      <Parallax translateY={['-300px', '200px']} translateX={['-200px', '100px']} className="absolute top-[0%] left-[1%] z-20">
        <div className={`px-4 py-2 rounded-lg border ${darkMode ? 'border-cyan-500/30 bg-gray-900/80' : 'border-blue-500/30 bg-white/80'}`}>
          <pre className={`text-xs font-mono ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
            {`import React from 'react';`}
          </pre>
        </div>
      </Parallax>
      
      <Parallax translateY={['300px', '-300px']} translateX={['200px', '0px']} className="absolute top-[30%] right-[5%] z-20">
        <div className={`px-4 py-2 rounded-lg border ${darkMode ? 'border-purple-500/30 bg-gray-900/80' : 'border-indigo-500/30 bg-white/80'}`}>
          <pre className={`text-xs font-mono ${darkMode ? 'text-purple-400' : 'text-indigo-600'}`}>
            {`const [state, setState] = useState();`}
          </pre>
        </div>
      </Parallax>
      
      <Parallax translateY={['100px', '-400px']} translateX={['-50px', '50px']} className="absolute bottom-[10%] left-[10%] z-20">
        <div className={`px-4 py-2 rounded-lg border ${darkMode ? 'border-green-500/30 bg-gray-900/80' : 'border-green-500/30 bg-white/80'}`}>
          <pre className={`text-xs font-mono ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
            {`<Component {...props} />`}
          </pre>
        </div>
      </Parallax>
      
      <Parallax translateY={['-450px', '350px']} translateX={['100px', '-100px']} rotate={[0, 15]} className="absolute bottom-[20%] right-[5%] z-20">
        <div className={`px-4 py-2 rounded-lg border ${darkMode ? 'border-amber-500/30 bg-gray-900/80' : 'border-amber-500/30 bg-white/80'}`}>
          <pre className={`text-xs font-mono ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
            {`return <App />;`}
          </pre>
        </div>
      </Parallax>
      
      {/* Main large code snippet with dramatic parallax - positioned clearly away from content */}
      <Parallax translateY={['-100px', '-200px']} translateX={['50px', '-50px']} rotate={[0, 5]} className="absolute bottom-[5%] right-[15%] z-30">
        <div className={`p-4 rounded-lg border shadow-xl ${
          darkMode ? 'border-cyan-500/40 bg-gray-900/90 text-cyan-400' : 'border-blue-500/40 bg-white/90 text-blue-600'
        }`}>
          <pre className="text-sm font-mono">
{`function Developer() {
  const [skills, setSkills] = useState([
    'React', 'JavaScript', 'TypeScript'
  ]);
  
  useEffect(() => {
    // Always learning...
  }, []);
  
  return <Portfolio skills={skills} />;
}`}
          </pre>
        </div>
      </Parallax>
      
      {/* Content with parallax effects - container with higher z-index to ensure content is above background elements */}
      <div className="container mx-auto px-6 z-40 relative">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Content container with background to ensure readability */}
          <div className={`${darkMode ? 'bg-gray-900/30' : 'bg-white/30'} backdrop-blur-sm p-4 md:p-6 rounded-xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Name heading with parallax */}
            <div ref={nameParallax.ref} className="mb-2">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm Jaswanth Kumar Bevara
                <span className={darkMode ? 'text-cyan-400' : 'text-blue-600'}>.</span>
              </h1>
            </div>
            
            {/* Role text with parallax */}
            <div ref={roleParallax.ref} className="h-10 sm:h-20 mb-10 relative">
              {roles.map((role, index) => (
                <div 
                  key={index} 
                  className={`absolute top-0 left-0 w-full font-mono text-xl sm:text-2xl py-2 transition-all duration-700 ease-in-out ${
                    darkMode ? 'text-cyan-400' : 'text-blue-600'
                  } ${roleIndex === index ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}
                >
                  <span className="inline-block mr-2">&gt;</span>
                  {role}
                </div>
              ))}
              
              {/* Role indicator dots */}
              <div className="absolute -bottom-6 left-0 flex space-x-2">
                {roles.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      roleIndex === index 
                        ? (darkMode ? 'bg-cyan-400 w-4' : 'bg-blue-600 w-4') 
                        : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Glass card with parallax */}
            <div 
              ref={cardParallax.ref}
              className={`mb-6 p-6 rounded-xl backdrop-blur-md shadow-lg transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${
                darkMode 
                  ? 'bg-gray-800/60 text-gray-300 border border-gray-700' 
                  : 'bg-white/60 text-gray-700 border border-gray-200'
              }`}
            >
              <p className="leading-relaxed">
                I specialize in building modern, high-performance React applications with a focus on user experience and clean code. 
                Currently working at Liv-ex, I'm passionate about frontend architecture and exploring the intersection of AI and web development.
              </p>
            </div>
            
            {/* CTA buttons with parallax */}
            <div 
              ref={buttonsParallax.ref}
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                className={`px-8 py-4 rounded-lg font-medium text-center transition-all ${
                  darkMode 
                    ? 'bg-cyan-500 text-white hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20'
                }`}
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-70}
                className={`px-8 py-4 rounded-lg font-medium text-center transition-all ${
                  darkMode 
                    ? 'bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10' 
                    : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-500/10'
                }`}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator with dramatic parallax */}
      <Parallax translateY={['0px', '100px']} className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
        isVisible ? 'opacity-60' : 'opacity-0'
      }`}>
        <div className={`animate-bounce w-6 h-10 border-2 rounded-full flex items-start justify-center ${
          darkMode ? 'border-gray-500' : 'border-gray-400'
        }`}>
          <div className={`w-1.5 h-3 rounded-full mt-2 ${
            darkMode ? 'bg-gray-500' : 'bg-gray-400'
          }`}></div>
        </div>
      </Parallax>
    </section>
  );
};

export default Hero;