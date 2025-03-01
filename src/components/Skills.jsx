import React, { useState } from 'react';

const Skills = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'SQL']
    },
    {
      id: 'frameworks',
      name: 'Frameworks/Libraries',
      skills: ['React.js', 'Angular.js', 'jQuery']
    },
    {
      id: 'styling',
      name: 'Styling Tools',
      skills: ['SCSS', 'CSS', 'Bootstrap', 'Bulma', 'Tailwind CSS']
    },
    {
      id: 'tools',
      name: 'Tools/Platforms',
      skills: ['Git', 'AWS S3/CloudFront', 'Azure DevOps', 'Figma']
    },
    {
      id: 'testing',
      name: 'Testing Tools',
      skills: ['Jest', 'RTL', 'Enzyme', 'Mocha/Chai']
    },
    {
      id: 'ide',
      name: 'IDE\'s',
      skills: ['VS Code', 'Sublime Text', 'IntelliJ']
    },
    {
      id: 'build',
      name: 'Build Tools',
      skills: ['NPM', 'Yarn']
    }
  ];
  
  // Filter skills based on active category
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skillCategories.flatMap(category => 
        category.skills.map(skill => ({ skill, category: category.id }))
      );
    }
    
    const category = skillCategories.find(cat => cat.id === activeCategory);
    return category 
      ? category.skills.map(skill => ({ skill, category: category.id }))
      : [];
  };
  
  const filteredSkills = getFilteredSkills();
  
  // Generate skill level (just for visualization)
  const getSkillLevel = (skill) => {
    // This would ideally come from real data, but for demo purposes we'll generate
    const baseLevel = 75; // Everyone has at least this level
    
    // Add some randomness but ensure React and modern tools get higher scores
    let bonus = 0;
    
    if (['React.js', 'TypeScript', 'JavaScript'].includes(skill)) {
      bonus = 15;
    } else if (['SCSS', 'Git', 'HTML5'].includes(skill)) {
      bonus = 10;
    } else if (['Angular.js', 'AWS S3/CloudFront', 'VS Code'].includes(skill)) {
      bonus = 8;
    }
    
    // Add slight randomness
    const randomFactor = Math.floor(Math.random() * 5);
    return Math.min(baseLevel + bonus + randomFactor, 98);
  };
  
  return (
    <section id="skills" className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'<'}</span>
            Skills
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'>'}</span>
          </h2>
          
          {/* Skill category filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? darkMode
                    ? 'bg-cyan-500 text-white'
                    : 'bg-blue-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? darkMode
                      ? 'bg-cyan-500 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Skills display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredSkills.map(({ skill, category }, index) => {
              const level = getSkillLevel(skill);
              
              return (
                <div 
                  key={`${category}-${skill}`}
                  className={`p-4 rounded-lg transition-all transform hover:scale-105 ${
                    darkMode ? 'bg-gray-900' : 'bg-white'
                  } shadow-md`}
                >
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {skill}
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {level}%
                    </span>
                  </div>
                  
                  <div 
                    className={`w-full h-2 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                  >
                    <div 
                      className={`h-full rounded-full ${
                        darkMode ? 'bg-cyan-400' : 'bg-blue-600'
                      }`}
                      style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
                    />
                  </div>
                  
                  <div className="mt-2">
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode
                          ? 'bg-gray-800 text-gray-400'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {skillCategories.find(cat => cat.id === category)?.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Skill cloud for desktop */}
          <div className="mt-20 hidden lg:block">
            <h3 className={`text-xl font-semibold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Skill Cloud
            </h3>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className={`absolute inset-0 flex flex-wrap justify-center items-center gap-4 p-8 ${
                darkMode ? 'bg-gray-900/60' : 'bg-white/60'
              } backdrop-blur-sm`}>
                {skillCategories.flatMap(category =>
                  category.skills.map((skill, i) => {
                    // Random size and position for cloud effect
                    const fontSize = Math.floor(Math.random() * 16) + 14; // 14px to 30px
                    const opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1
                    
                    // Generate colors based on category
                    let color;
                    switch (category.id) {
                      case 'languages':
                        color = darkMode ? 'text-cyan-400' : 'text-blue-600';
                        break;
                      case 'frameworks':
                        color = darkMode ? 'text-purple-400' : 'text-purple-600';
                        break;
                      case 'styling':
                        color = darkMode ? 'text-pink-400' : 'text-pink-600';
                        break;
                      case 'tools':
                        color = darkMode ? 'text-green-400' : 'text-green-600';
                        break;
                      case 'testing':
                        color = darkMode ? 'text-yellow-400' : 'text-yellow-600';
                        break;
                      case 'ide':
                        color = darkMode ? 'text-red-400' : 'text-red-600';
                        break;
                      case 'build':
                        color = darkMode ? 'text-orange-400' : 'text-orange-600';
                        break;
                      default:
                        color = darkMode ? 'text-gray-400' : 'text-gray-600';
                    }
                    
                    return (
                      <div 
                        key={`cloud-${category.id}-${skill}-${i}`}
                        className={`transition-transform duration-300 hover:scale-125 ${color}`}
                        style={{ 
                          fontSize: `${fontSize}px`,
                          opacity,
                          transform: `rotate(${Math.random() * 10 - 5}deg)`,
                          fontWeight: Math.random() > 0.5 ? 'bold' : 'normal'
                        }}
                      >
                        {skill}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;