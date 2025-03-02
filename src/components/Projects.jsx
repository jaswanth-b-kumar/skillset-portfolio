import React, { useState, useEffect, useRef } from 'react';

const CodeSnippet = ({ project, darkMode }) => {
  // Generate pseudo code based on project technologies
  const generateCode = () => {
    const lang = project.technologies.includes('React.js') ? 'react' : 
                project.technologies.includes('Angular.js') ? 'angular' : 'javascript';
    
    if (lang === 'react') {
      return `import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';

const ${project.title.replace(/\s/g, '')} = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Fetch data from API
    fetchData().then(response => {
      setData(response);
      dispatch({ type: 'DATA_LOADED', payload: response });
    });
  }, [dispatch]);
  
  return (
    <div className="container">
      <header className="header">
        <h1>${project.title}</h1>
      </header>
      <main>
        {/* Component implementation */}
      </main>
    </div>
  );
};

export default ${project.title.replace(/\s/g, '')};`;
    } else if (lang === 'angular') {
      return `import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-${project.title.toLowerCase().replace(/\s/g, '-')}',
  templateUrl: './${project.title.toLowerCase().replace(/\s/g, '-')}.component.html',
  styleUrls: ['./${project.title.toLowerCase().replace(/\s/g, '-')}.component.scss']
})
export class ${project.title.replace(/\s/g, '')}Component implements OnInit {
  data: any[] = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.fetchData();
  }
  
  fetchData(): void {
    this.http.get<any[]>('/api/data')
      .subscribe((response) => {
        this.data = response;
      });
  }
}`;
    } else {
      return `// ${project.title} implementation
document.addEventListener('DOMContentLoaded', function() {
  const app = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    cacheDOM: function() {
      this.container = document.querySelector('.container');
      this.button = document.querySelector('.btn-action');
    },
    bindEvents: function() {
      this.button.addEventListener('click', this.handleAction.bind(this));
    },
    render: function() {
      // Initial rendering
      fetchData()
        .then(data => {
          this.displayData(data);
        })
        .catch(err => console.error(err));
    },
    handleAction: function(e) {
      // Handle user interactions
    },
    displayData: function(data) {
      // Display the fetched data
    }
  };
  
  app.init();
});`;
    }
  };
  
  const code = generateCode();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className={`overflow-hidden rounded-md text-sm font-mono ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="p-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>
            {project.technologies[0]}.{project.technologies.includes('React.js') ? 'jsx' : project.technologies.includes('Angular.js') ? 'ts' : 'js'}
          </span>
        </div>
        <div className="text-xs text-gray-500">
          {project.title.toLowerCase().replace(/\s/g, '-')}
        </div>
      </div>
      <div className={`p-4 overflow-x-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <pre className={`${darkMode ? 'text-cyan-200' : 'text-blue-200'}`}>
          {code.split('\n').map((line, i) => (
            <div key={i} className={`transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} 
                 style={{ transitionDelay: `${i * 30}ms` }}>
              {line}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, darkMode, onSelect }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Generate a unique gradient based on project index
  const getGradient = () => {
    const gradients = [
      darkMode ? 'from-blue-900 to-purple-900' : 'from-blue-600 to-purple-600',
      darkMode ? 'from-green-900 to-teal-900' : 'from-green-600 to-teal-600',
      darkMode ? 'from-indigo-900 to-cyan-900' : 'from-indigo-600 to-cyan-600',
      darkMode ? 'from-purple-900 to-pink-900' : 'from-purple-600 to-pink-600',
    ];
    
    return gradients[index % gradients.length];
  };
  
  // Determine the icon based on primary technology
  const getTechIcon = () => {
    if (project.technologies.includes('React.js')) {
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <g fill={darkMode ? '#61DAFB' : '#61DAFB'}>
            <circle cx="12" cy="12" r="2.139" />
            <path d="M11.999 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.277c-3.465 0-6.277-2.812-6.277-6.277s2.812-6.277 6.277-6.277 6.277 2.812 6.277 6.277-2.812 6.277-6.277 6.277z" fillOpacity=".2" />
            <path d="M11.999 1.5c5.799 0 10.5 4.701 10.5 10.5s-4.701 10.5-10.5 10.5-10.5-4.701-10.5-10.5 4.701-10.5 10.5-10.5zm0 16.777c3.465 0 6.277-2.812 6.277-6.277s-2.812-6.277-6.277-6.277-6.277 2.812-6.277 6.277 2.812 6.277 6.277 6.277z" fillOpacity=".1" />
            <path d="M12 3.75c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25-3.701-8.25-8.25-8.25zm0 14.527c-3.465 0-6.277-2.812-6.277-6.277s2.812-6.277 6.277-6.277 6.277 2.812 6.277 6.277-2.812 6.277-6.277 6.277z" fillOpacity=".05" />
            <path d="M12 14.139c-1.182 0-2.139-.957-2.139-2.139s.957-2.139 2.139-2.139 2.139.957 2.139 2.139-.957 2.139-2.139 2.139z" />
            <path d="M19.061 11.825c.105.295.165.609.165.935 0 1.719-1.811 3.361-4.817 4.386 2.693 1.181 5.135 1.341 6.25.387.687-.586.932-1.493.69-2.553-.205-.91-.744-1.928-1.499-2.959-.221-.301-.457-.591-.698-.877.032.225.53.449.053.681zm-5.845 5.327c-1.62.671-3.527 1.021-5.463.917 3.053.44 6.251-.167 8.571-1.588-.893.334-1.959.57-3.108.671zm-5.59.917c-2.93-.123-5.294-1.04-6.177-2.407-.391-.61-.413-1.249-.059-1.889.349-.631.979-1.239 1.822-1.784-1.132.993-1.837 2.062-1.837 3.14 0 1.719 1.811 3.362 4.818 4.387.502.22 1.028.417 1.573.587-.044-.341-.08-.685-.115-1.03l-.025-.004zm11.018-9.765c2.085 2.765 3.046 5.352 2.358 6.752-.467.951-1.643 1.389-3.188 1.389-.59 0-1.236-.083-1.907-.232.829-.171 1.614-.372 2.336-.606 2.377-.928 3.702-2.349 3.702-3.83 0-1.044-.613-2.209-1.663-3.359-.261-.283-.543-.562-.843-.84.069.242.13.485.182.729l.023-.003zm-11.595.606c1.62-.671 3.527-1.021 5.463-.917-3.052-.44-6.251.167-8.571 1.588.893-.335 1.959-.57 3.108-.671zm5.59-.917c2.93.123 5.294 1.04 6.177 2.408.391.609.413 1.249.059 1.889-.349.631-.979 1.238-1.822 1.784 1.132-.993 1.837-2.062 1.837-3.139 0-1.719-1.811-3.362-4.818-4.387-.502-.22-1.028-.417-1.573-.587.044.34.08.685.115 1.03l.025.002z" />
          </g>
        </svg>
      );
    } else if (project.technologies.includes('Angular.js')) {
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <g fill={darkMode ? '#DD0031' : '#DD0031'}>
            <path d="M9.93 12.645h4.134L11.996 7.74" fillOpacity=".8" />
            <path d="M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z" />
          </g>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <g fill={darkMode ? '#F7DF1E' : '#F7DF1E'}>
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
          </g>
        </svg>
      );
    }
  };
  
  return (
    <div 
      ref={cardRef}
      className={`relative rounded-lg transition-all duration-500 overflow-hidden shadow-lg ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : index % 2 === 0 ? 'translate-y-12 opacity-0' : '-translate-y-12 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms` 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Visual header with gradient and tech icon */}
      <div className={`h-32 overflow-hidden relative bg-gradient-to-r ${getGradient()}`}>
        <div className="absolute right-4 top-4 opacity-20">{getTechIcon()}</div>
        
        {/* Animated particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full ${darkMode ? 'bg-white' : 'bg-white'} opacity-10`}
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Project title */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-white/80">
            {project.description}
          </p>
        </div>
      </div>
      
      {/* Tech stack pills */}
      <div className="px-4 py-2 flex flex-wrap gap-2">
        {project.technologies.slice(0, 6).map((tech, techIndex) => (
          <span 
            key={techIndex}
            className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${
              isHovered 
                ? darkMode 
                  ? 'bg-cyan-900/50 text-cyan-300' 
                  : 'bg-blue-100 text-blue-700'
                : darkMode 
                  ? 'bg-gray-800 text-gray-400' 
                  : 'bg-gray-100 text-gray-600'
            }`}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 6 && (
          <span className={`px-2 py-1 text-xs rounded-full ${
            darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
          }`}>
            +{project.technologies.length - 6} more
          </span>
        )}
      </div>
      
      {/* Achievements */}
      <div className="p-4">
        <h4 className={`text-sm font-semibold mb-2 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Key Achievements:
        </h4>
        
        <ul className="space-y-2">
          {project.achievements.map((achievement, i) => (
            <li 
              key={i} 
              className={`flex items-start text-sm transition-all duration-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index * 150) + (i * 100)}ms` }}
            >
              <span className={`mr-2 mt-1 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                {achievement}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Animation effect on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t ${
          darkMode ? 'from-cyan-500/10 to-transparent' : 'from-blue-500/10 to-transparent'
        } transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      
      {/* Explore button */}
      <div className={`absolute bottom-4 right-4 transition-all duration-300 transform ${
        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <button 
          className={`rounded-full p-2 ${
            darkMode 
              ? 'bg-cyan-600 hover:bg-cyan-500 text-white' 
              : 'bg-blue-600 hover:bg-blue-500 text-white'
          } transition-colors duration-200 focus:outline-none focus:ring-2 ${
            darkMode ? 'focus:ring-cyan-400' : 'focus:ring-blue-400'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ProjectDetails = ({ project, darkMode, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl transition-transform duration-500 ${
          isVisible ? 'scale-100' : 'scale-90'
        } ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className={`absolute top-4 right-4 p-2 rounded-full ${
            darkMode 
              ? 'bg-gray-800 text-gray-400 hover:text-white' 
              : 'bg-gray-200 text-gray-600 hover:text-gray-900'
          } transition-colors z-10`}
          onClick={onClose}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        
        {/* Header */}
        <div className={`p-6 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h2>
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.description}
          </p>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - details */}
          <div className="md:col-span-2 space-y-6">
            {/* Project overview */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Project Overview
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                As a {project.technologies.includes('React.js') ? 'React' : project.technologies.includes('Angular.js') ? 'Angular' : 'Frontend'} Developer 
                for this project, I was responsible for building and maintaining high-performance, 
                user-friendly features.
              </p>
            </div>
            
            {/* Key achievements */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {project.achievements.map((achievement, i) => (
                  <li 
                    key={i} 
                    className={`flex items-start transition-all duration-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <span className={`mr-2 mt-1 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Code preview */}
            <div 
              className={`transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Code Snippet
              </h3>
              <CodeSnippet project={project} darkMode={darkMode} />
            </div>
          </div>
          
          {/* Right column - tech stack & info */}
          <div>
            {/* Technologies */}
            <div 
              className={`p-4 rounded-lg mb-6 transition-all duration-500 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              } ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 text-cyan-300' 
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project info */}
            <div className={`transition-all duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className={`mb-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="flex items-start mb-3">
                  <span className={`p-2 rounded-md mr-3 ${
                    darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Project Duration
                    </h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.title.includes('Liv-ex') ? 'June 2024 - Present' : 
                       project.title.includes('CDAO') ? 'Dec 2023 - April 2024' : 
                       project.title.includes('Design Library') ? 'May 2022 - Dec 2023' : 
                       'Sep 2020 - June 2022'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className={`p-2 rounded-md mr-3 ${
                    darkMode ? 'bg-gray-700 text-cyan-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Role
                    </h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.title.includes('Liv-ex') ? 'Software Engineer (React Developer)' : 
                       project.title.includes('CDAO') ? 'Advanced Application Engineering Sr Analyst (UI & Angular Developer)' : 
                       project.title.includes('Design Library') ? 'Advanced Application Engineering Sr Analyst (React Developer)' : 
                       'Advanced Application Engineering Analyst (UI Developer)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Liv-ex Trading Platform",
      description: "Global online marketplace for wine trade.",
      technologies: ["React.js", "JavaScript", "JSX", "react-router", "react-redux", "yarn", "AWS S3", "Cloudfront", "git", "git flow", "SCSS", "Bulma", "REST api"],
      achievements: [
        "Deployed liv-ex trading platform to AWS S3 and CloudFront, ensuring optimal performance and scalability",
        "Optimized API calls for improved efficiency, reduced latency which led to improve user experience and page load times 5s (30% - 40%) faster",
        "Actively contributed to the development, enhancement, and maintenance of the Liv-Ex trading platform",
        "Collaborated effectively within an Agile team, adhering to Scrum methodologies",
        "Proficient in using Jira for task tracking, issue resolution, and project management"
      ]
    },
    {
      title: "CDAO Internal Finance Application",
      description: "Angular-based finance app for Accenture.",
      technologies: ["Typescript", "HTML", "CSS", "Angular.JS", "npm", "Azure Devops", "git", "SCSS", "Bootstrap"],
      achievements: [
        "Developed UI components and animations using HTML, CSS and Typescript",
        "Rendered API data and integrated with Angular",
        "Participated proactively in not only UI development team but also in Angular development and integrations",
        "Planned UI architecture to be followed and responsible for documentation of coding standards"
      ]
    },
    {
      title: "Design Library",
      description: "A React-based library offering 1000+ animations/templates.",
      technologies: ["React.js", "JavaScript", "JSX", "react-router", "react-redux", "npm", "Azure Devops", "git", "SCSS", "Bootstrap"],
      achievements: [
        "Reduced widget development time by 30%",
        "Improved loading time by 20%",
        "Implemented react-detect-offline feature for improved UX",
        "Documented application changes and actively contributed to updates for consistent performance gains"
      ]
    },
    {
      title: "Client Solution - Studio Client",
      description: "Interactive websites with responsive designs.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "scrollify.js"],
      achievements: [
        "Developed interactive websites replicating Figma designs",
        "Created responsive microsites compatible with all resolutions",
        "Added 2D and 3D animations using CSS and Javascript/jQuery",
        "Monitored website performance and rectified front-end related issues"
      ]
    }
  ];
  
  return (
    <section id="projects" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'<'}</span>
            Projects
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'>'}</span>
          </h2>
          
          <p className={`text-lg mb-12 max-w-3xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Here are some key projects I've worked on throughout my career. Each project has contributed to my growth as a frontend developer and helped me refine my skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                darkMode={darkMode}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
          
          {selectedProject && (
            <ProjectDetails 
              project={selectedProject} 
              darkMode={darkMode} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;