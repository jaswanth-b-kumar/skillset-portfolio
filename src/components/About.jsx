import React, { useEffect, useRef } from 'react';

const About = ({ darkMode }) => {
  const timelineRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (timelineRef.current) {
      const cards = timelineRef.current.querySelectorAll('.timeline-card');
      cards.forEach((card) => {
        observer.observe(card);
      });
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const milestones = [
    {
      year: '2020',
      title: 'Started Career at Accenture',
      description: 'Began as a UI Developer creating responsive microsites using HTML/CSS/JavaScript.'
    },
    {
      year: '2022',
      title: 'Specialized in React Development',
      description: 'Built the Design Library app, reducing development time by 30% and improving loading time by 20%.'
    },
    {
      year: '2023',
      title: 'Advanced to Angular Development',
      description: 'Worked on the CDAO internal finance application, developing UI components and planning architecture.'
    },
    {
      year: '2024',
      title: 'Joined Liv-ex as React Developer',
      description: 'Deployed the trading platform to AWS S3/CloudFront and optimized API calls for improved efficiency.'
    }
  ];
  
  return (
    <section id="about" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'<'}</span>
            About Me
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'>'}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className={`relative w-full aspect-square rounded-lg overflow-hidden ${darkMode ? 'border-2 border-cyan-400' : 'border-2 border-blue-600'}`}>
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Jaswanth Kumar Bevara" 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}>
                  <p className={`font-mono ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Frontend Developer</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'} shadow-lg mb-6`}>
                <div className="mb-4 flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${darkMode ? 'bg-red-400' : 'bg-red-500'}`}></div>
                  <div className={`w-3 h-3 rounded-full mr-2 ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}`}></div>
                  <div className={`w-3 h-3 rounded-full mr-2 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></div>
                  <span className="ml-2 font-mono text-sm opacity-70">about.jsx</span>
                </div>
                
                <p className="mb-4">
                  I'm a Frontend Developer aspiring to become a Frontend Architect and AI-Augmented Developer. With expertise in React.js, JavaScript, TypeScript, HTML5, and CSS/SCSS, I build scalable and user-friendly web applications.
                </p>
                
                <p className="mb-4">
                  My goal is to become a software architect who can lead teams effectively. Currently, as one of two React developers at Liv-ex, I handle the end-to-end delivery process including estimations, technical feasibility analysis, proposing ideas, and development.
                </p>
                
                <p>
                  I'm passionate about creating efficient, performant applications that provide excellent user experiences while maintaining clean, maintainable code.
                </p>
              </div>
              
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Journey</h3>
              
              <div className="relative" ref={timelineRef}>
                {/* Timeline line */}
                <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-cyan-400/50' : 'bg-blue-600/50'}`}></div>
                
                {/* Timeline cards */}
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`timeline-card ml-12 mb-8 p-4 rounded-lg shadow-md opacity-0 transition-all duration-500 ${
                      darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'
                    }`}
                  >
                    <div className={`absolute left-2 top-4 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      darkMode ? 'border-cyan-400 bg-gray-800' : 'border-blue-600 bg-white'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                      }`}></div>
                    </div>
                    <h4 className={`text-lg font-semibold ${
                      darkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {milestone.title}
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {milestone.year}
                    </p>
                    <p className="mt-2">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;