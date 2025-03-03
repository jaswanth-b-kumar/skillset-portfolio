import React, { useState, useEffect, useRef } from 'react';

const Skills = ({ darkMode }) => {
  const [activeMode, setActiveMode] = useState('constellation');
  const [activeSkill, setActiveSkill] = useState(null);
  const [typedCommand, setTypedCommand] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', content: 'Welcome to the Skills Terminal. Type "help" for available commands.' }
  ]);
  const constellationRef = useRef(null);
  const terminalInputRef = useRef(null);
  
  const skillsData = {
    languages: [
      { name: 'JavaScript', level: 90, description: 'Advanced JavaScript including ES6+ features.', projects: ['Liv-ex Trading Platform', 'Design Library'] },
      { name: 'TypeScript', level: 85, description: 'Strong typing and object-oriented TypeScript.', projects: ['CDAO Finance App'] },
      { name: 'HTML5', level: 95, description: 'Semantic HTML for accessible web applications.', projects: ['All Projects'] },
      { name: 'SQL', level: 75, description: 'Database queries and data manipulation.', projects: ['Liv-ex Trading Platform'] }
    ],
    frameworks: [
      { name: 'React.js', level: 92, description: 'Component-based architecture, hooks, and state management.', projects: ['Liv-ex Trading Platform', 'Design Library'] },
      { name: 'Angular.js', level: 80, description: 'MVW architecture and dependency injection.', projects: ['CDAO Finance App'] },
      { name: 'jQuery', level: 85, description: 'DOM manipulation and event handling.', projects: ['Client Solution'] }
    ],
    styling: [
      { name: 'SCSS', level: 88, description: 'Advanced CSS with variables, nesting, and mixins.', projects: ['All Projects'] },
      { name: 'Bootstrap', level: 90, description: 'Responsive layouts and UI components.', projects: ['CDAO Finance App', 'Client Solution'] },
      { name: 'Bulma', level: 85, description: 'Modern CSS framework based on Flexbox.', projects: ['Liv-ex Trading Platform'] }
    ],
    tools: [
      { name: 'Git', level: 88, description: 'Version control and collaborative development.', projects: ['All Projects'] },
      { name: 'NPM', level: 92, description: 'Package management and dependency resolution.', projects: ['CDAO Finance App', 'Design Library'] },
      { name: 'Yarn', level: 86, description: 'Fast, reliable, and secure dependency management.', projects: ['Liv-ex Trading Platform'] },
      { name: 'Jest/RTL', level: 82, description: 'Testing frameworks for React applications.', projects: ['Design Library'] },
      { name: 'Mocha/Chai', level: 78, description: 'JavaScript test framework for Node.js.', projects: ['Client Solution'] },
      { name: 'AWS S3/CloudFront', level: 85, description: 'Cloud hosting and content delivery.', projects: ['Liv-ex Trading Platform'] },
      { name: 'Azure DevOps', level: 80, description: 'CI/CD pipelines and work item tracking.', projects: ['CDAO Finance App', 'Design Library'] }
    ]
  };
  
  const allSkills = Object.values(skillsData).flat();
  
  // Terminal functionality
  const handleTerminalCommand = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      const command = typedCommand.trim().toLowerCase();
      let response;
      
      if (command === 'help') {
        response = {
          type: 'system',
          content: `Available commands:
- "list": Lists all skill categories
- "show <category>": Shows skills in a category (e.g., "show languages")
- "skill <name>": Shows details about a specific skill (e.g., "skill React.js")
- "clear": Clears the terminal
- "exit": Exits terminal mode`
        };
      } else if (command === 'list') {
        response = {
          type: 'system',
          content: `Skill categories:
- Languages (${skillsData.languages.length} skills)
- Frameworks (${skillsData.frameworks.length} skills)
- Styling (${skillsData.styling.length} skills)
- Tools (${skillsData.tools.length} skills)`
        };
      } else if (command.startsWith('show ')) {
        const category = command.substring(5);
        if (category === 'languages' || category === 'frameworks' || category === 'styling' || category === 'tools') {
          const categorySkills = skillsData[category].map(skill => skill.name).join(', ');
          response = {
            type: 'system',
            content: `${category.charAt(0).toUpperCase() + category.slice(1)}: ${categorySkills}`
          };
        } else {
          response = { type: 'error', content: `Unknown category: ${category}` };
        }
      } else if (command.startsWith('skill ')) {
        const skillName = command.substring(6);
        const skill = allSkills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
        
        if (skill) {
          response = {
            type: 'skill',
            content: `${skill.name} (${skill.level}%): ${skill.description}
Related projects: ${skill.projects.join(', ')}`
          };
        } else {
          response = { type: 'error', content: `Skill not found: ${skillName}` };
        }
      } else if (command === 'clear') {
        setTerminalHistory([{ type: 'system', content: 'Terminal cleared.' }]);
        setTypedCommand('');
        return;
      } else if (command === 'exit') {
        setActiveMode('constellation');
        setTypedCommand('');
        return;
      } else if (command === '') {
        response = { type: 'system', content: '' };
      } else {
        response = { type: 'error', content: `Unknown command: ${command}. Type "help" for available commands.` };
      }
      
      setTerminalHistory([...terminalHistory, 
        { type: 'command', content: `> ${typedCommand}` },
        response
      ]);
      setTypedCommand('');
    }
  };
  
  // Skill constellation
  useEffect(() => {
    if (activeMode === 'constellation' && constellationRef.current) {
      const canvas = constellationRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;
      
      // Set canvas dimensions
      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Create nodes for all skills
      const nodes = allSkills.map((skill, index) => {
        const angle = (index / allSkills.length) * Math.PI * 2;
        const radius = 130 + Math.random() * 50;
        
        return {
          x: canvas.width / 2 + Math.cos(angle) * radius,
          y: canvas.height / 2 + Math.sin(angle) * radius,
          radius: 5 + (skill.level / 20),
          skill: skill,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          hovered: false
        };
      });
      
      // Handle mouse interactions
      let hoveredNode = null;
      const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        hoveredNode = null;
        for (const node of nodes) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < node.radius + 5) {
            hoveredNode = node;
            break;
          }
        }
        
        canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
      };
      
      const handleClick = (e) => {
        if (hoveredNode) {
          setActiveSkill(hoveredNode.skill.name);
        } else {
          setActiveSkill(null);
        }
      };
      
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('click', handleClick);
      
      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw connections between related skills
        ctx.beginPath();
        ctx.strokeStyle = darkMode ? 'rgba(14, 165, 233, 0.2)' : 'rgba(37, 99, 235, 0.2)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const node1 = nodes[i];
            const node2 = nodes[j];
            
            // Connect skills within the same category or related projects
            const sameCategory = 
              skillsData.languages.includes(node1.skill) && skillsData.languages.includes(node2.skill) ||
              skillsData.frameworks.includes(node1.skill) && skillsData.frameworks.includes(node2.skill) ||
              skillsData.styling.includes(node1.skill) && skillsData.styling.includes(node2.skill) ||
              skillsData.tools.includes(node1.skill) && skillsData.tools.includes(node2.skill);
            
            const sharedProjects = node1.skill.projects.some(project => 
              node2.skill.projects.includes(project)
            );
            
            if (sameCategory || sharedProjects) {
              ctx.moveTo(node1.x, node1.y);
              ctx.lineTo(node2.x, node2.y);
            }
          }
        }
        ctx.stroke();
        
        // Update and draw nodes
        for (const node of nodes) {
          // Move nodes slightly
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounce off edges
          if (node.x - node.radius < 0 || node.x + node.radius > canvas.width) {
            node.vx = -node.vx;
          }
          if (node.y - node.radius < 0 || node.y + node.radius > canvas.height) {
            node.vy = -node.vy;
          }
          
          // Keep nodes within center area
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const dx = node.x - centerX;
          const dy = node.y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;
          
          if (distance > maxDistance) {
            node.vx -= dx * 0.001;
            node.vy -= dy * 0.001;
          }
          
          // Draw node
          ctx.beginPath();
          if (node.skill.name === activeSkill) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = darkMode ? '#06b6d4' : '#2563eb';
          } else {
            ctx.shadowBlur = 0;
          }
          
          const isHovered = hoveredNode === node;
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius * (isHovered ? 1.5 : 1)
          );
          
          if (darkMode) {
            gradient.addColorStop(0, isHovered ? '#0891b2' : '#06b6d4');
            gradient.addColorStop(1, isHovered ? '#0e7490' : '#0891b2');
          } else {
            gradient.addColorStop(0, isHovered ? '#3b82f6' : '#60a5fa');
            gradient.addColorStop(1, isHovered ? '#2563eb' : '#3b82f6');
          }
          
          ctx.fillStyle = gradient;
          ctx.arc(node.x, node.y, node.radius * (isHovered ? 1.3 : 1), 0, Math.PI * 2);
          ctx.fill();
          
          // Draw node label
          if (isHovered || node.skill.name === activeSkill) {
            const fontSize = 12;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = darkMode ? '#e5e7eb' : '#1f2937';
            ctx.textAlign = 'center';
            ctx.fillText(node.skill.name, node.x, node.y - node.radius - 7);
          }
        }
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('click', handleClick);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [activeMode, darkMode, allSkills, activeSkill]);
  
  // Terminal effect
  useEffect(() => {
    if (activeMode === 'terminal' && terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  }, [activeMode, terminalHistory]);
  
  // Scroll to bottom of terminal when history changes
  useEffect(() => {
    if (activeMode === 'terminal') {
      const terminalOutput = document.getElementById('terminal-output');
      if (terminalOutput) {
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    }
  }, [terminalHistory, activeMode]);
  
  // Terminal UI renderer
  const renderTerminal = () => {
    return (
      <div className={`mt-8 h-96 rounded-lg overflow-hidden shadow-lg ${
        darkMode ? 'bg-gray-900' : 'bg-gray-800'
      }`}>
        {/* Terminal header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-white text-sm font-mono">skills.terminal</span>
        </div>
        
        {/* Terminal output */}
        <div id="terminal-output" className="p-4 h-80 overflow-y-auto font-mono text-sm">
          {terminalHistory.map((entry, index) => (
            <div 
              key={index} 
              className={`mb-2 ${
                entry.type === 'command' 
                  ? 'text-white' 
                  : entry.type === 'error' 
                    ? 'text-red-400' 
                    : entry.type === 'skill'
                      ? darkMode ? 'text-cyan-400' : 'text-blue-400'
                      : 'text-green-400'
              }`}
            >
              {entry.content.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ))}
          
          {/* Terminal input line */}
          <div className="flex text-white">
            <span className="text-green-400 mr-2">guest@portfolio:~$</span>
            <input
              ref={terminalInputRef}
              type="text"
              value={typedCommand}
              onChange={(e) => setTypedCommand(e.target.value)}
              onKeyDown={handleTerminalCommand}
              className="flex-1 bg-transparent outline-none"
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>
    );
  };
  
  // List of all skills
  const renderSkillList = () => {
    return (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div 
            key={category}
            className={`p-6 rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3 className={`text-xl font-bold mb-4 ${
              darkMode ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            
            <div className="space-y-4">
              {skills.map(skill => (
                <div 
                  key={skill.name}
                  className="group"
                  onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                >
                  <div className="flex justify-between items-center mb-1 cursor-pointer">
                    <span className={`font-medium ${
                      darkMode ? 'text-white group-hover:text-cyan-400' : 'text-gray-800 group-hover:text-blue-600'
                    } transition-colors`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${
                      darkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className={`w-full h-2 rounded-full overflow-hidden ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <div 
                      className={`h-full ${
                        darkMode ? 'bg-cyan-500' : 'bg-blue-600'
                      } transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  
                  {/* Expanded skill details */}
                  {activeSkill === skill.name && (
                    <div className={`mt-3 p-3 rounded-md text-sm ${
                      darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      <p className="mb-2">{skill.description}</p>
                      <div>
                        <span className="font-medium">Related Projects: </span>
                        {skill.projects.join(', ')}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
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
          
          <p className={`text-lg mb-8 max-w-3xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Explore my technical skills and expertise through different interactive visualizations.
            Select a visualization mode below to get started.
          </p>
          
          {/* Visualization mode selector */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {[
              { id: 'constellation', label: 'Skill Constellation', icon: 'M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64' },
              { id: 'terminal', label: 'Skill Terminal', icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z' },
              { id: 'list', label: 'Skill List', icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' }
            ].map(mode => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                  activeMode === mode.id
                    ? darkMode
                      ? 'bg-cyan-500 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={mode.icon} />
                </svg>
                {mode.label}
              </button>
            ))}
          </div>
          
          {/* Active visualization */}
          <div className="relative min-h-[30rem] bg-opacity-50 rounded-lg">
            {activeMode === 'constellation' && (
              <div className="relative h-96 w-full">
                <canvas 
                  ref={constellationRef} 
                  className="w-full h-full rounded-lg"
                  aria-label="Skill constellation visualization"
                  role="img"
                ></canvas>
                
                {/* Info panel when a skill is selected */}
                {activeSkill && (
                  <div className={`absolute right-4 top-4 w-64 p-4 rounded-lg shadow-lg ${
                    darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
                  }`}>
                    <button 
                      onClick={() => setActiveSkill(null)}
                      className={`absolute top-2 right-2 p-1 rounded-full ${
                        darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    {allSkills.filter(skill => skill.name === activeSkill).map(skill => (
                      <div key={skill.name}>
                        <h4 className={`text-lg font-bold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                          {skill.name}
                        </h4>
                        <div className="flex items-center mt-2">
                          <div className="flex-1">
                            <div className={`h-2 rounded-full overflow-hidden ${
                              darkMode ? 'bg-gray-800' : 'bg-gray-200'
                            }`}>
                              <div 
                                className={`h-full ${darkMode ? 'bg-cyan-500' : 'bg-blue-600'}`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                          <span className={`ml-2 text-sm font-medium ${
                            darkMode ? 'text-cyan-400' : 'text-blue-600'
                          }`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <p className="mt-3 text-sm">{skill.description}</p>
                        
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold mb-1">Related Projects:</h5>
                          <ul className="text-sm">
                            {skill.projects.map(project => (
                              <li key={project} className="flex items-start">
                                <span className={`mr-1 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>•</span>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={`absolute left-4 bottom-4 p-3 rounded-md ${
                  darkMode ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-800'
                }`}>
                  <p className="text-sm">
                    <span className={`font-medium ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Hover</span> over nodes to see skills.
                    <span className={`font-medium ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}> Click</span> on a skill for details.
                  </p>
                </div>
              </div>
            )}
            
            {activeMode === 'terminal' && renderTerminal()}
            {activeMode === 'list' && renderSkillList()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;