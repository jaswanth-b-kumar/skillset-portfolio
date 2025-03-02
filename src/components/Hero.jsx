import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

const Hero = ({ darkMode }) => {
  const particlesRef = useRef(null);
  const contentRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({
        x: clientX / innerWidth,
        y: clientY / innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animate particles
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 60;
    const maxSize = 5;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxSize + 1,
        speedX: (Math.random() - 0.5) * 0.3, // Reduced speed
        speedY: (Math.random() - 0.5) * 0.3, // Reduced speed
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    
    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach((particle) => {
        // Update position with parallax effect
        particle.x += particle.speedX + (mousePosition.x - 0.5) * 0.5;
        particle.y += particle.speedY + (mousePosition.y - 0.5) * 0.5;
        
        // Wrap around canvas
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        const particleColor = darkMode ? 
          `rgba(100, 210, 255, ${particle.opacity * 0.4})` : 
          `rgba(0, 100, 200, ${particle.opacity * 0.4})`;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });
      
      // Draw connections
      particles.forEach((particle, index) => {
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const opacity = 0.15 * (1 - distance / 100);
            ctx.strokeStyle = darkMode ? 
              `rgba(100, 210, 255, ${opacity})` : 
              `rgba(0, 100, 200, ${opacity})`;
            
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [darkMode, mousePosition]);
  
  // Handle typing effect for role
  useEffect(() => {
    const roles = [
      "Frontend Developer",
      "Aspiring Frontend Architect",
      "AI-Augmented Developer",
      "React Specialist"
    ];
    
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let roleElement = document.getElementById('typing-role');
    
    if (!roleElement) return;
    
    const typeRole = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        roleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause before deleting
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next role
      }
      
      setTimeout(typeRole, typingSpeed);
    };
    
    const typingTimeout = setTimeout(typeRole, 1000);
    
    return () => clearTimeout(typingTimeout);
  }, []);
  
  // Calculate years of experience
  const startDate = new Date('September 2020');
  const currentDate = new Date();
  const yearsExperience = Math.floor((currentDate - startDate) / (365 * 24 * 60 * 60 * 1000));
  
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Particle background */}
      <canvas 
        ref={particlesRef} 
        className="absolute inset-0 z-0" 
      />
      
      {/* Background gradient overlay */}
      <div 
        className={`absolute inset-0 z-0 ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        } opacity-80`}
      />
      
      {/* Circular blur elements */}
      <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl z-0 opacity-30 ${
        darkMode ? 'bg-blue-500' : 'bg-blue-300'
      }`}></div>
      
      <div className={`absolute bottom-1/4 -right-20 w-80 h-80 rounded-full blur-3xl z-0 opacity-30 ${
        darkMode ? 'bg-cyan-500' : 'bg-blue-400'
      }`}></div>
      
      {/* Geometric code-style accents */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={`absolute top-20 left-10 h-20 w-1 ${darkMode ? 'bg-cyan-500/20' : 'bg-blue-500/20'}`}></div>
        <div className={`absolute top-20 left-10 h-1 w-20 ${darkMode ? 'bg-cyan-500/20' : 'bg-blue-500/20'}`}></div>
        
        <div className={`absolute bottom-20 right-10 h-20 w-1 ${darkMode ? 'bg-cyan-500/20' : 'bg-blue-500/20'}`}></div>
        <div className={`absolute bottom-20 right-10 h-1 w-20 ${darkMode ? 'bg-cyan-500/20' : 'bg-blue-500/20'}`}></div>
        
        <div className={`absolute top-1/3 right-20 h-32 w-1 ${darkMode ? 'bg-cyan-500/10' : 'bg-blue-500/10'}`}></div>
        <div className={`absolute bottom-1/3 left-20 h-32 w-1 ${darkMode ? 'bg-cyan-500/10' : 'bg-blue-500/10'}`}></div>
      </div>
      
      {/* Code brackets decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <span className={`text-9xl font-mono opacity-5 transform -translate-x-40 ${
          darkMode ? 'text-cyan-400' : 'text-blue-600'
        }`}>{'{'}</span>
        <span className={`text-9xl font-mono opacity-5 transform translate-x-40 ${
          darkMode ? 'text-cyan-400' : 'text-blue-600'
        }`}>{'}'}</span>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 h-full z-10 relative">
        <div 
          ref={contentRef}
          className="flex flex-col justify-center h-full max-w-4xl mx-auto"
          style={{
            transform: `translate(${mousePosition.x * 10 - 5}px, ${mousePosition.y * 10 - 5}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div className={`p-8 rounded-lg ${
            darkMode 
              ? 'bg-gray-900/30 backdrop-blur-sm border border-gray-700/50' 
              : 'bg-white/30 backdrop-blur-sm border border-gray-200/50'
          } shadow-xl`}>
            <div className="space-y-6">
              <div>
                <h2 className={`font-mono text-sm ${
                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>Hello, World! I'm</h2>
                <h1 className={`text-4xl md:text-6xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Jaswanth Kumar Bevara
                </h1>
                <div className="h-8">
                  <h2 id="typing-role" className={`text-xl md:text-2xl font-semibold ${
                    darkMode ? 'text-cyan-400' : 'text-blue-600'
                  }`}> </h2>
                </div>
              </div>
              
              <p className={`text-lg max-w-2xl ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                With {yearsExperience}+ years of experience in frontend development, 
                I focus on creating performant, accessible, and visually appealing web applications.
                Currently working at Liv-ex, optimizing trading platforms and mentoring junior developers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 text-center ${
                    darkMode 
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'
                  }`}
                >
                  View My Work
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 text-center ${
                    darkMode 
                      ? 'bg-transparent hover:bg-gray-800 text-cyan-400 border border-cyan-400 shadow-lg shadow-cyan-500/10' 
                      : 'bg-transparent hover:bg-gray-100 text-blue-600 border border-blue-600 shadow-lg shadow-blue-500/10'
                  }`}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            
            <div className={`mt-12 flex flex-wrap gap-3 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className={`px-3 py-1 rounded-full text-xs ${
                darkMode ? 'bg-gray-800 text-cyan-400' : 'bg-blue-100 text-blue-700'
              }`}>React.js</span>
              <span className={`px-3 py-1 rounded-full text-xs ${
                darkMode ? 'bg-gray-800 text-cyan-400' : 'bg-blue-100 text-blue-700'
              }`}>TypeScript</span>
              <span className={`px-3 py-1 rounded-full text-xs ${
                darkMode ? 'bg-gray-800 text-cyan-400' : 'bg-blue-100 text-blue-700'
              }`}>AWS</span>
              <span className={`px-3 py-1 rounded-full text-xs ${
                darkMode ? 'bg-gray-800 text-cyan-400' : 'bg-blue-100 text-blue-700'
              }`}>Angular</span>
              <span className={`px-3 py-1 rounded-full text-xs ${
                darkMode ? 'bg-gray-800 text-cyan-400' : 'bg-blue-100 text-blue-700'
              }`}>Performance Optimization</span>
            </div>
          </div>
          
          <div className={`mt-8 text-sm font-mono text-center ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            <span className="typing-cursor">Focusing on frontend architecture, mentoring, and AI-augmented development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;