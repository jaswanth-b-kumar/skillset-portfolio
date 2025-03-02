import React, { useState, useEffect, useRef } from 'react';

const SkillChip = ({ skill, category, level, darkMode, index }) => {
  const categoryColors = {
    languages: { bg: darkMode ? 'bg-blue-900/30' : 'bg-blue-100', text: darkMode ? 'text-blue-400' : 'text-blue-700', border: darkMode ? 'border-blue-700' : 'border-blue-300', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    frameworks: { bg: darkMode ? 'bg-purple-900/30' : 'bg-purple-100', text: darkMode ? 'text-purple-400' : 'text-purple-700', border: darkMode ? 'border-purple-700' : 'border-purple-300', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> },
    styling: { bg: darkMode ? 'bg-pink-900/30' : 'bg-pink-100', text: darkMode ? 'text-pink-400' : 'text-pink-700', border: darkMode ? 'border-pink-700' : 'border-pink-300', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
    tools: { bg: darkMode ? 'bg-green-900/30' : 'bg-green-100', text: darkMode ? 'text-green-400' : 'text-green-700', border: darkMode ? 'border-green-700' : 'border-green-300', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    testing: { bg: darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100', text: darkMode ? 'text-yellow-500' : 'text-yellow-700', border: darkMode ? 'border-yellow-700' : 'border-yellow-300', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    ide: { bg: darkMode ? 'bg-red-900/30' : 'bg-red-100', text: darkMode ? 'text-red-400' : 'text-red-700', border: darkMode ? 'border-red-700' : 'border-red-300', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    build: { bg: darkMode ? 'bg-orange-900/30' : 'bg-orange-100', text: darkMode ? 'text-orange-400' : 'text-orange-700', border: darkMode ? 'border-orange-700' : 'border-orange-300', icon: <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> }
  };

  const colorSet = categoryColors[category] || categoryColors.languages;
  const progressBarColor = darkMode ? 
    (category === 'languages' ? 'bg-blue-400' : 
    category === 'frameworks' ? 'bg-purple-400' : 
    category === 'styling' ? 'bg-pink-400' : 
    category === 'tools' ? 'bg-green-400' : 
    category === 'testing' ? 'bg-yellow-400' : 
    category === 'ide' ? 'bg-red-400' : 
    category === 'build' ? 'bg-orange-400' : 'bg-cyan-400') : 
    (category === 'languages' ? 'bg-blue-600' : 
    category === 'frameworks' ? 'bg-purple-600' : 
    category === 'styling' ? 'bg-pink-600' : 
    category === 'tools' ? 'bg-green-600' : 
    category === 'testing' ? 'bg-yellow-600' : 
    category === 'ide' ? 'bg-red-600' : 
    category === 'build' ? 'bg-orange-600' : 'bg-blue-600');
  
  const delay = index * 0.05;
  
  return (
    <div 
      className={`rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in ${colorSet.bg} border ${colorSet.border}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className={`${colorSet.text}`}>
              {colorSet.icon}
            </span>
            <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {skill}
            </span>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${colorSet.bg} ${colorSet.text}`}>
            {level}%
          </span>
        </div>
        
        <div className="w-full h-2 rounded-full bg-gray-700/20">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ease-out ${progressBarColor}`}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const SkillConstellation = ({ skills, activeCategory, darkMode, onSkillClick }) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [orbs, setOrbs] = useState([]);
  const animationRef = useRef(null);
  
  const categorySettings = React.useMemo(() => ({
    languages: { x: 0.3, y: 0.3, color: darkMode ? '#60a5fa' : '#2563eb' },
    frameworks: { x: 0.7, y: 0.3, color: darkMode ? '#c084fc' : '#7c3aed' },
    styling: { x: 0.2, y: 0.7, color: darkMode ? '#f472b6' : '#db2777' },
    tools: { x: 0.5, y: 0.5, color: darkMode ? '#4ade80' : '#16a34a' },
    testing: { x: 0.8, y: 0.7, color: darkMode ? '#facc15' : '#ca8a04' },
    ide: { x: 0.3, y: 0.8, color: darkMode ? '#f87171' : '#dc2626' },
    build: { x: 0.7, y: 0.8, color: darkMode ? '#fb923c' : '#ea580c' }
  }),[darkMode]);
  
  useEffect(() => {
    if (canvasRef.current) {
      const updateDimensions = () => {
        setDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight
        });
      };
      
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, []);
  
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const newOrbs = skills.map(skill => {
      const category = skill.category;
      const targetX = categorySettings[category].x * dimensions.width;
      const targetY = categorySettings[category].y * dimensions.height;
      
      // Random starting position
      const startX = Math.random() * dimensions.width;
      const startY = Math.random() * dimensions.height;
      
      // Random speed
      const speedFactor = 0.02 + Math.random() * 0.03;
      
      const isActive = activeCategory === 'all' || activeCategory === category;
      const size = isActive ? 
        Math.floor(Math.random() * 10) + 20 : // larger for active 
        Math.floor(Math.random() * 6) + 12;   // smaller for inactive
        
      return {
        id: skill.skill,
        x: startX,
        y: startY,
        targetX,
        targetY,
        size,
        speedFactor,
        color: categorySettings[category].color,
        category,
        level: skill.level,
        isActive,
        isHighlighted: false
      };
    });
    
    setOrbs(newOrbs);
  }, [skills, dimensions, activeCategory, darkMode, categorySettings]);
  
  useEffect(() => {
    if (orbs.length === 0) return;
    
    const animate = () => {
      setOrbs(prevOrbs => {
        return prevOrbs.map(orb => {
          // Calculating distance to target
          const dx = orb.targetX - orb.x;
          const dy = orb.targetY - orb.y;
          
          // Added some "wobble" to make it more organic
          const wobbleX = Math.sin(Date.now() * 0.001 + orb.id.length) * 5;
          const wobbleY = Math.cos(Date.now() * 0.002 + orb.id.length) * 5;
          
          // Move towards target with easing
          const newX = orb.x + dx * orb.speedFactor + wobbleX * 0.2;
          const newY = orb.y + dy * orb.speedFactor + wobbleY * 0.2;
          
          return {
            ...orb,
            x: newX,
            y: newY
          };
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [orbs.length]);
  
  // Update orbs when active category changes
  useEffect(() => {
    setOrbs(prevOrbs => {
      return prevOrbs.map(orb => {
        const isActive = activeCategory === 'all' || activeCategory === orb.category;
        const size = isActive ? 
          Math.floor(Math.random() * 10) + 20 : // larger for active 
          Math.floor(Math.random() * 6) + 12;   // smaller for inactive
          
        return {
          ...orb,
          isActive,
          size
        };
      });
    });
  }, [activeCategory]);
  
  const handleMouseEnter = (id) => {
    setOrbs(prevOrbs => {
      return prevOrbs.map(orb => {
        return {
          ...orb,
          isHighlighted: orb.id === id
        };
      });
    });
  };
  
  const handleMouseLeave = () => {
    setOrbs(prevOrbs => {
      return prevOrbs.map(orb => {
        return {
          ...orb,
          isHighlighted: false
        };
      });
    });
  };
  
  return (
    <div 
      ref={canvasRef} 
      className="relative w-full h-full overflow-hidden rounded-xl"
      style={{ minHeight: '500px' }}
    >
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={`col-${i}`} className={`border-l ${darkMode ? 'border-gray-700/30' : 'border-gray-300/30'}`}></div>
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={`row-${i}`} className={`border-t ${darkMode ? 'border-gray-700/30' : 'border-gray-300/30'}`}></div>
        ))}
      </div>
      
      {Object.entries(categorySettings).map(([category, settings]) => (
        <div
          key={category}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 opacity-30 text-xs font-mono transition-opacity duration-500 ${
            activeCategory === category || activeCategory === 'all' ? 'opacity-70' : 'opacity-20'
          }`}
          style={{ 
            left: `${settings.x * 100}%`, 
            top: `${settings.y * 100}%`,
            color: settings.color
          }}
        >
          {category.toUpperCase()}
        </div>
      ))}
      
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {activeCategory !== 'all' && orbs
          .filter(orb => orb.category === activeCategory)
          .map((orb, i, filteredOrbs) => {
            return filteredOrbs.slice(i + 1).map((otherOrb, j) => (
              <line
                key={`line-${i}-${j}`}
                x1={orb.x}
                y1={orb.y}
                x2={otherOrb.x}
                y2={otherOrb.y}
                stroke={orb.color}
                strokeWidth="1"
                strokeOpacity="0.2"
                strokeDasharray="3,3"
              />
            ));
          })}
      </svg>
      
      {orbs.map(orb => (
        <div
          key={orb.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300"
          style={{
            left: `${orb.x}px`,
            top: `${orb.y}px`,
            width: `${orb.size * 2}px`,
            height: `${orb.size * 2}px`,
            backgroundColor: `${orb.color}${orb.isHighlighted ? '40' : '20'}`,
            borderWidth: 2,
            borderColor: orb.isHighlighted ? orb.color : 'transparent',
            boxShadow: orb.isHighlighted ? `0 0 15px ${orb.color}80` : 'none',
            zIndex: orb.isHighlighted ? 10 : (orb.isActive ? 5 : 1),
            opacity: orb.isActive ? 1 : 0.5,
            fontSize: `${orb.size / 2}px`
          }}
          onMouseEnter={() => handleMouseEnter(orb.id)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onSkillClick(orb.category)}
        >
          <span 
            className="whitespace-nowrap font-mono font-medium px-2 py-1"
            style={{ color: orb.color }}
          >
            {orb.id}
          </span>
          
          {orb.isHighlighted && (
            <div 
              className="absolute top-full mt-2 px-2 py-1 rounded-md text-xs whitespace-nowrap"
              style={{ 
                backgroundColor: darkMode ? '#1f2937' : '#f9fafb',
                color: orb.color,
                boxShadow: `0 0 5px ${orb.color}40`,
                border: `1px solid ${orb.color}40`
              }}
            >
              {orb.level}% Proficiency
            </div>
          )}
        </div>
      ))}
      
      {Object.entries(categorySettings).map(([category, settings]) => {
        let icon;
        switch(category) {
          case 'languages':
            icon = <svg className="w-full h-full" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
            break;
          case 'frameworks':
            icon = <svg className="w-full h-full" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
            break;
          case 'styling':
            icon = <svg className="w-full h-full" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
            break;
          default:
            icon = <svg className="w-full h-full" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>;
        }
        
        return (
          <div
            key={`icon-${category}`}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 flex items-center justify-center pointer-events-none ${
              activeCategory === category ? 'opacity-70' : 'opacity-30'
            }`}
            style={{ 
              left: `${settings.x * dimensions.width}px`, 
              top: `${settings.y * dimensions.height}px`,
              width: activeCategory === category ? '40px' : '24px',
              height: activeCategory === category ? '40px' : '24px',
              color: settings.color,
              backgroundColor: `${settings.color}10`,
              borderWidth: 1,
              borderColor: settings.color
            }}
          >
            {icon}
          </div>
        );
      })}
      
      {Object.entries(categorySettings).map(([category, settings]) => (
        <div
          key={`pulse-${category}`}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none ${
            activeCategory === category || activeCategory === 'all' ? 'opacity-40' : 'opacity-0'
          }`}
          style={{ 
            left: `${settings.x * dimensions.width}px`, 
            top: `${settings.y * dimensions.height}px`,
            width: '80px',
            height: '80px',
            background: `radial-gradient(circle, ${settings.color}30 0%, ${settings.color}00 70%)`,
            animation: 'pulse 2s infinite'
          }}
        />
      ))}
    </div>
  );
};

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
  
  // Create flat array of skills with their categories
  const allSkillsWithCategories = skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      skill,
      category: category.id,
      level: getSkillLevel(skill)
    }))
  );
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? allSkillsWithCategories
    : allSkillsWithCategories.filter(skill => skill.category === activeCategory);
  
  // Generate skill level (just for visualization)
  function getSkillLevel(skill) {
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
  }
  
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
          
          <div className="flex flex-col lg:flex-row">
            {/* Skill Constellation - Hidden on mobile */}
            <div className="hidden lg:block lg:w-7/12 mb-8 lg:mb-0 lg:pr-8">
              <div className={`w-full h-full rounded-xl p-4 ${darkMode ? 'bg-gray-900/50' : 'bg-white/80'} shadow-lg`}>
                <SkillConstellation 
                  skills={allSkillsWithCategories}
                  activeCategory={activeCategory}
                  darkMode={darkMode}
                  onSkillClick={setActiveCategory}
                />
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="w-full lg:w-5/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredSkills.map((skill, index) => (
                  <SkillChip 
                    key={skill.skill}
                    skill={skill.skill}
                    category={skill.category}
                    level={skill.level}
                    darkMode={darkMode}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;