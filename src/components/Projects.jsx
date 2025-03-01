import React, { useState } from 'react';

const ProjectCard = ({ project, index, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Alternate the animation direction based on index
  const animationDirection = index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left';
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } ${animationDirection}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
        />
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-gray-900' : 'bg-gradient-to-t from-white'} opacity-60`}></div>
        
        {/* Tech stack pills */}
        <div className="absolute top-2 right-2 flex flex-wrap justify-end gap-2">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex}
              className={`px-2 py-1 text-xs rounded-full font-mono ${
                darkMode 
                  ? 'bg-gray-800 text-cyan-400 border border-cyan-400/30' 
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        <div className="space-y-2">
          {project.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start">
              <div className={`mt-1 mr-2 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{achievement}</p>
            </div>
          ))}
        </div>
        
        {/* Expanded view on hover - shows more tech details */}
        <div 
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
            isHovered 
              ? 'opacity-100' 
              : 'opacity-0'
          } ${
            darkMode 
              ? 'bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent' 
              : 'bg-gradient-to-t from-white via-white/95 to-transparent'
          }`}
        >
          <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h3>
          
          <div className="mb-4">
            <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className={`px-2 py-1 text-xs rounded-full font-mono ${
                    darkMode 
                      ? 'bg-gray-800 text-cyan-400 border border-cyan-400/30' 
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4">
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Live Demo
              </a>
            )}
            
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Liv-ex Trading Platform",
      description: "Global online marketplace for wine trade.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "JavaScript", "JSX", "react-router", "react-redux", "yarn", "AWS S3", "Cloudfront", "git", "git flow", "SCSS", "Bulma", "REST api"],
      achievements: [
        "Deployed liv-ex trading platform to AWS S3 and CloudFront",
        "Optimized API calls for improved efficiency and reduced latency",
        "Improved page load times by 30–40%"
      ],
      demo: "#",
      github: "#"
    },
    {
      title: "CDAO Internal Finance Application",
      description: "Angular-based finance app for Accenture.",
      image: "/api/placeholder/600/400",
      technologies: ["Typescript", "HTML", "CSS", "Angular.JS", "npm", "Azure Devops", "git", "SCSS", "Bootstrap"],
      achievements: [
        "Developed UI components and animations using HTML, CSS and Typescript",
        "Rendered API data and integrated with Angular",
        "Planned UI architecture and documentation of coding standards"
      ],
      demo: "#",
      github: "#"
    },
    {
      title: "Design Library",
      description: "A React-based library offering 1000+ animations/templates.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "JavaScript", "JSX", "react-router", "react-redux", "npm", "Azure Devops", "git", "SCSS", "Bootstrap"],
      achievements: [
        "Reduced widget development time by 30%",
        "Improved loading time by 20%",
        "Implemented react-detect-offline feature for improved UX"
      ],
      demo: "#",
      github: "#"
    },
    {
      title: "Client Solution - Studio Client",
      description: "Interactive websites with responsive designs.",
      image: "/api/placeholder/600/400",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "scrollify.js"],
      achievements: [
        "Developed interactive websites replicating Figma designs",
        "Created responsive microsites compatible with all resolutions",
        "Added 2D and 3D animations using CSS and Javascript/jQuery"
      ],
      demo: "#",
      github: "#"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                darkMode={darkMode} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;