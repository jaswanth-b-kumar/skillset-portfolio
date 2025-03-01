import React, { useEffect, useRef } from 'react';

const ExperienceCard = ({ experience, index, darkMode }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeout = setTimeout(() => {
              entry.target.classList.add('translate-x-0', 'opacity-100');
              entry.target.classList.remove(index % 2 === 0 ? '-translate-x-full' : 'translate-x-full', 'opacity-0');
            }, index * 150);
            
            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className={`relative transition-all duration-700 transform ${
        index % 2 === 0 ? '-translate-x-full' : 'translate-x-full'
      } opacity-0`}
    >
      {/* Timeline vertical line */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
        darkMode ? 'bg-cyan-500' : 'bg-blue-600'
      }`}></div>
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-6 w-5 h-5 -ml-2 rounded-full border-4 ${
        darkMode 
          ? 'border-gray-900 bg-cyan-500' 
          : 'border-white bg-blue-600'
      }`}></div>
      
      {/* Content */}
      <div className={`ml-8 p-6 rounded-lg shadow-lg mb-8 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {experience.role}
            </h3>
            <h4 className={`text-lg font-semibold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
              {experience.company}
            </h4>
          </div>
          
          <div className={`md:text-right text-sm font-medium mt-2 md:mt-0 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p>{experience.period}</p>
            <p>{experience.location}</p>
          </div>
        </div>
        
        <div className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>{experience.description}</p>
        </div>
        
        <div className="mt-4">
          <h5 className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Key Contributions:
          </h5>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className={`mr-2 mt-1 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
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
        
        <div className="mt-4">
          <h5 className={`font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Technologies:
          </h5>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span 
                key={i}
                className={`px-2 py-1 text-xs rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 text-cyan-400' 
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      company: "Liv-ex Ltd.",
      role: "Software Engineer (React Developer)",
      period: "June 2024 - Present",
      location: "London, England",
      description: "As one of two React developers in technology department at Liv-Ex, I play a key role in maintaining development pipelines, environments, deployments, and releases.",
      achievements: [
        "Deployed liv-ex trading platform to AWS S3 and CloudFront, ensuring optimal performance and scalability",
        "Optimized API calls for improved efficiency, reduced latency which led to improve user experience and page load times 5s (30% - 40%) faster",
        "Actively contributed to the development, enhancement, and maintenance of the Liv-Ex trading platform",
        "Collaborated effectively within an Agile team, adhering to Scrum methodologies",
        "Proficient in using Jira for task tracking, issue resolution, and project management"
      ],
      technologies: ["React.js", "JavaScript", "JSX", "react-router", "react-redux", "yarn", "AWS S3", "CloudFront", "git", "git flow", "SCSS", "Bulma", "REST api"]
    },
    {
      company: "Accenture",
      role: "Advanced Application Engineering Sr Analyst (UI & Angular Developer)",
      period: "December 2023 - April 2024",
      location: "Hyderabad, India",
      description: "CDAO is Accenture Internal finance related application built using Angular, .NET and Hosted using Azure devops.",
      achievements: [
        "Responsible for development of the UI components and animations using HTML, CSS and Typescript",
        "Rendered API data and integrated with Angular",
        "Participated proactively in not only UI development team but also in Angular development and integrations",
        "Planned UI architecture to be followed and responsible for documentation of coding standards"
      ],
      technologies: ["Typescript", "HTML", "CSS", "Angular.JS", "npm", "Azure Devops", "git", "SCSS", "Bootstrap"]
    },
    {
      company: "Accenture",
      role: "Advanced Application Engineering Sr Analyst (React Developer)",
      period: "May 2022 - December 2023",
      location: "Hyderabad, India",
      description: "Design Library is Application is built using React.js, .NET and hosted in Azure devops which offers 1000+ downloadable animations and JavaScript templates for seamless web project integration.",
      achievements: [
        "Utilized JSX, JavaScript, ReactJS, CSS, and SCSS to create user interface components, resulting in a 30% time reduction in front-end widgets for large components",
        "Successfully improved front-end performance by decreasing the loading time by 20%",
        "Documented application changes, and actively contributed to updates for consistent performance gains",
        "Implemented react-detect-offline feature for improved user experience"
      ],
      technologies: ["React.js", "JavaScript", "JSX", "react-router", "react-redux", "npm", "Azure Devops", "git", "SCSS", "Bootstrap"]
    },
    {
      company: "Accenture",
      role: "Advanced Application Engineering Analyst (UI Developer)",
      period: "September 2020 - May 2022",
      location: "Hyderabad, India",
      description: "Part of the UI Development team developing interactive websites for clients.",
      achievements: [
        "Developed interactive websites replicating the design provided in Figma tool",
        "Converted website design files into HTML, bootstrap and bootstrap.js, JavaScript",
        "Added 2D and 3D animations using CSS and Javascript/jQuery",
        "Created microsites responsive, compatible in all resolutions and window sizes",
        "Monitored website performance and rectified front-end related issues"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "scrollify.js"]
    }
  ];

  return (
    <section id="experience" className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'<'}</span>
            Experience
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'>'}</span>
          </h2>
          
          <div className="relative pl-4">
            {/* Main timeline vertical line */}
            <div className={`absolute left-0 top-0 bottom-0 w-px ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                experience={experience} 
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

export default Experience;