import React, { useState, useEffect, useRef } from 'react';

const About = ({ darkMode }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [animatedText, setAnimatedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const journeyRef = useRef(null);
  const timelineRef = useRef(null);
  
  // Terminal text typing effect
  useEffect(() => {
    const text = `const developer = {
      name: "Jaswanth Kumar Bevara",
      role: "Frontend Developer",
      aspirations: "Frontend Architect & AI-Augmented Developer",
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS/SCSS"],
      passions: ["Clean Code", "User Experience", "Performance Optimization"],
      goals: "Become a software architect who leads teams effectively",
      currentRole: "One of two React developers at Liv-ex",
      responsibilities: [
        "End-to-end delivery process",
        "Estimations",
        "Technical feasibility analysis",
        "Proposing ideas",
        "Development"
      ]
    };`;

    const typingEffect = setInterval(() => {
      setAnimatedText(text);
    }, 1);

    // Blinking cursor effect
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 5);

    return () => {
      clearInterval(typingEffect);
      clearInterval(blinkInterval);
    };
  }, []);

  // Journey steps
  const journeySteps = [
    {
      year: '2020',
      title: 'Started Career at Accenture',
      role: 'UI Developer',
      description: 'Began my journey creating responsive microsites using HTML/CSS/JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
      achievements: [
        'Developed interactive websites from Figma designs',
        'Created responsive layouts for all device sizes',
        'Added custom animations using CSS and JavaScript'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      year: '2022',
      title: 'Specialized in React Development',
      role: 'React Developer',
      description: 'Built the Design Library app, which offers 1000+ animations and templates for seamless web integration.',
      technologies: ['React.js', 'JavaScript', 'JSX', 'SCSS', 'Azure DevOps'],
      achievements: [
        'Reduced development time by 30%',
        'Improved loading time by 20%',
        'Implemented offline detection features'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      year: '2023',
      title: 'Advanced to Angular Development',
      role: 'UI & Angular Developer',
      description: 'Worked on the CDAO internal finance application, developing UI components and planning architecture.',
      technologies: ['Angular.js', 'TypeScript', 'CSS', 'Azure DevOps'],
      achievements: [
        'Designed and implemented UI architecture',
        'Created documentation for coding standards',
        'Developed complex animations for financial data visualization'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      year: '2024',
      title: 'Joined Liv-ex as React Developer',
      role: 'Software Engineer',
      description: 'Deployed the trading platform to AWS S3/CloudFront and optimized API calls for improved efficiency.',
      technologies: ['React.js', 'AWS S3', 'CloudFront', 'SCSS', 'REST API'],
      achievements: [
        'Improved page load times by 30-40%',
        'Maintained development pipelines and deployments',
        'Collaborated within an Agile team using Scrum methodologies'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
    
    // Scroll to make active step centered
    if (timelineRef.current) {
      const stepElement = timelineRef.current.children[index];
      if (stepElement) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const stepRect = stepElement.getBoundingClientRect();
        const centerPosition = stepRect.left + stepRect.width / 2 - timelineRect.left - timelineRect.width / 2;
        
        timelineRef.current.scrollLeft += centerPosition;
      }
    }
  };

  // Intersection Observer for journey animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.2 }
    );

    const journeySteps = document.querySelectorAll('.journey-step');
    journeySteps.forEach(step => {
      observer.observe(step);
    });

    return () => {
      journeySteps.forEach(step => {
        observer.unobserve(step);
      });
    };
  }, []);

  // Keyboard navigation for journey steps
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (journeyRef.current && journeyRef.current.contains(document.activeElement)) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          setActiveStep(prev => Math.min(prev + 1, journeySteps.length - 1));
          setExpandedCard(prev => Math.min(prev + 1, journeySteps.length - 1));
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          setActiveStep(prev => Math.max(prev - 1, 0));
          setExpandedCard(prev => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [journeySteps.length]);

  return (
    <section id="about" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'<'}</span>
            About Me
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'>'}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'} shadow-lg mb-6 terminal-container`}>
                <div className="mb-4 flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${darkMode ? 'bg-red-400' : 'bg-red-500'}`}></div>
                  <div className={`w-3 h-3 rounded-full mr-2 ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}`}></div>
                  <div className={`w-3 h-3 rounded-full mr-2 ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}></div>
                  <span className="ml-2 font-mono text-sm opacity-70">profile.js</span>
                </div>
                
                <div className="font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">
                    <span className={darkMode ? 'text-green-400' : 'text-green-600'}>
                      {animatedText}
                    </span>
                    {showCursor && <span className="animate-pulse">|</span>}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className={`text-2xl font-semibold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Journey
          </h3>
          
          {/* Main Journey Container */}
          <div 
            ref={journeyRef} 
            className="relative mb-6 mt-12 focus:outline-none"
            tabIndex="0"
            aria-label="Career journey timeline, use arrow keys to navigate"
          >
            {/* Progress bar */}
            <div className={`absolute left-0 right-0 h-1 top-9 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
              <div 
                className={`h-full transition-all duration-500 ease-in-out ${darkMode ? 'bg-cyan-400' : 'bg-blue-600'}`}
                style={{ width: `${(activeStep / (journeySteps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            {/* Timeline steps */}
            <div 
              ref={timelineRef}
              className="flex overflow-x-auto pb-8 hide-scrollbar relative"
              aria-live="polite"
            >
              {journeySteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`journey-step flex-none mx-4 first:ml-0 last:mr-0 opacity-0 translate-y-10 transition-all duration-500 ease-out`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    className={`relative flex flex-col items-center ${
                      activeStep === index
                        ? darkMode 
                          ? 'text-cyan-400' 
                          : 'text-blue-600'
                        : darkMode 
                          ? 'text-gray-400 hover:text-gray-200' 
                          : 'text-gray-600 hover:text-gray-800'
                    } transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      darkMode ? 'focus:ring-cyan-400' : 'focus:ring-blue-600'
                    } rounded-full`}
                    onClick={() => handleStepClick(index)}
                    aria-expanded={expandedCard === index}
                    aria-controls={`journey-details-${index}`}
                  >
                    <div 
                      className={`w-20 h-20 rounded-full flex items-center justify-center mb-2 transition-all duration-300 transform ${
                        activeStep === index
                          ? darkMode 
                            ? 'bg-cyan-500 text-white scale-110' 
                            : 'bg-blue-600 text-white scale-110'
                          : darkMode 
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className="font-bold">{step.year}</span>
                    <span className="text-sm text-center max-w-[120px] mt-1 font-medium">{step.title}</span>
                    
                    {/* Connector dot */}
                    <div 
                      className={`absolute w-4 h-4 rounded-full top-8 transform transition-all duration-300 ${
                        activeStep === index
                          ? darkMode 
                            ? 'bg-cyan-400 scale-125' 
                            : 'bg-blue-600 scale-125'
                          : darkMode 
                            ? 'bg-gray-600' 
                            : 'bg-gray-400'
                      }`}
                    ></div>
                  </button>
                </div>
              ))}
            </div>
            
            {/* Journey Details - Expanded View */}
            <div 
              id={`journey-details-${activeStep}`}
              className={`transition-all duration-500 overflow-hidden ${
                expandedCard !== null
                  ? 'max-h-[1000px] opacity-100 mt-6'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {expandedCard !== null && (
                <div 
                  className={`rounded-lg p-6 shadow-lg ${
                    darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'
                  } animate-fade-in`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {journeySteps[expandedCard].title}
                      </h4>
                      <p className={`font-medium mb-1 ${
                        darkMode ? 'text-cyan-400' : 'text-blue-600'
                      }`}>
                        {journeySteps[expandedCard].role}
                      </p>
                      <p className="mb-4">{journeySteps[expandedCard].description}</p>
                      
                      <h5 className={`font-semibold mb-2 ${
                        darkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {journeySteps[expandedCard].achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`mr-2 mt-1 ${
                              darkMode ? 'text-cyan-400' : 'text-blue-600'
                            }`}>
                              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className={`font-semibold mb-3 ${
                        darkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {journeySteps[expandedCard].technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className={`px-3 py-1 rounded-full text-sm ${
                              darkMode 
                                ? 'bg-gray-800 text-cyan-400 border border-cyan-400/30' 
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div 
                        className={`relative p-4 rounded-md ${
                          darkMode ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                      >
                        <div className={`absolute top-0 left-0 w-1 h-full ${
                          darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                        }`}></div>
                        <h5 className={`text-sm uppercase tracking-wider mb-2 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Growth Insight
                        </h5>
                        <p className="text-sm">
                          {expandedCard === 0 && "Starting my career at Accenture allowed me to build a strong foundation in frontend fundamentals while working on diverse client projects."}
                          {expandedCard === 1 && "Transitioning to React development was a pivotal point in my career, enabling me to create more sophisticated, component-based applications."}
                          {expandedCard === 2 && "Learning Angular expanded my framework knowledge and taught me different architectural approaches to frontend development."}
                          {expandedCard === 3 && "At Liv-ex, I've been able to apply all my previous experience while taking on more responsibility in the end-to-end delivery process."}
                        </p>
                      </div>
                      
                      {expandedCard < journeySteps.length - 1 && (
                        <button 
                          className={`mt-4 flex items-center text-sm font-medium ${
                            darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                          }`}
                          onClick={() => {
                            setActiveStep(expandedCard + 1);
                            setExpandedCard(expandedCard + 1);
                          }}
                          aria-label={`Continue to ${journeySteps[expandedCard + 1].title}`}
                        >
                          Continue to {journeySteps[expandedCard + 1].year}
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                className={`p-2 rounded-full transition-colors ${
                  activeStep === 0
                    ? darkMode 
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : darkMode 
                      ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' 
                      : 'bg-white text-blue-600 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => {
                  if (activeStep > 0) {
                    setActiveStep(activeStep - 1);
                    setExpandedCard(activeStep - 1);
                  }
                }}
                disabled={activeStep === 0}
                aria-label="Previous journey step"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-1">
                {journeySteps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStep === index
                        ? darkMode 
                          ? 'bg-cyan-400 w-4' 
                          : 'bg-blue-600 w-4'
                        : darkMode 
                          ? 'bg-gray-600 hover:bg-gray-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => {
                      setActiveStep(index);
                      setExpandedCard(index);
                    }}
                    aria-label={`Go to journey step ${index + 1}`}
                    aria-current={activeStep === index ? 'step' : undefined}
                  ></button>
                ))}
              </div>
              
              <button
                className={`p-2 rounded-full transition-colors ${
                  activeStep === journeySteps.length - 1
                    ? darkMode 
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : darkMode 
                      ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' 
                      : 'bg-white text-blue-600 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => {
                  if (activeStep < journeySteps.length - 1) {
                    setActiveStep(activeStep + 1);
                    setExpandedCard(activeStep + 1);
                  }
                }}
                disabled={activeStep === journeySteps.length - 1}
                aria-label="Next journey step"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Auto-Tour Button */}
          <div className="mt-8 text-center">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-cyan-400 border border-cyan-400/50 hover:bg-gray-700' 
                  : 'bg-white text-blue-600 border border-blue-300 hover:bg-gray-50'
              }`}
              onClick={() => {
                // Start the guided tour - set first step and then cycle through
                setActiveStep(0);
                setExpandedCard(0);
                
                let currentStep = 0;
                const intervalId = setInterval(() => {
                  currentStep++;
                  if (currentStep >= journeySteps.length) {
                    clearInterval(intervalId);
                    // Return to the first step when tour ends
                    setActiveStep(0);
                    setExpandedCard(null);
                  } else {
                    setActiveStep(currentStep);
                    setExpandedCard(currentStep);
                  }
                }, 4000);
                
                // Save interval id so we can clear it if component unmounts
                const tourIntervalId = intervalId;
                return () => clearInterval(tourIntervalId);
              }}
            >
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start Journey Tour
              </span>
            </button>
          </div>
          
          {/* Custom style for hiding scrollbar but allowing scroll */}
          <style jsx>{`
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            
            .terminal-container {
              backdrop-filter: blur(4px);
              position: relative;
            }
            
            .terminal-container::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 2px;
              background: linear-gradient(to right, 
                ${darkMode ? '#22d3ee' : '#2563eb'}, 
                ${darkMode ? '#8b5cf6' : '#3b82f6'}
              );
              z-index: 1;
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            .animate-fade-in {
              animation: fadeIn 0.5s ease-out forwards;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default About;