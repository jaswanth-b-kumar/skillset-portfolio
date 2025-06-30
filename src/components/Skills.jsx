import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Settings, Database, Cloud, Brain, Zap, Globe } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    Frontend: {
      icon: Code2,
      color: 'text-primary-500',
      gradient: 'from-primary-500 to-blue-600',
      skills: [
        { name: 'React.js', level: 95, experience: '5+ years', icon: '⚛️' },
        { name: 'TypeScript', level: 90, experience: '3+ years', icon: '🔷' },
        { name: 'JavaScript ES6+', level: 95, experience: '5+ years', icon: '🟨' },
        { name: 'HTML5 & CSS3', level: 95, experience: '5+ years', icon: '🌐' },
        { name: 'Angular', level: 85, experience: '2+ years', icon: '🅰️' },
        { name: 'Redux', level: 88, experience: '3+ years', icon: '🔄' },
        { name: 'React Router', level: 92, experience: '3+ years', icon: '🛣️' },
        { name: 'jQuery', level: 85, experience: '4+ years', icon: '💙' }
      ]
    },
    Styling: {
      icon: Palette,
      color: 'text-secondary-500',
      gradient: 'from-secondary-500 to-pink-600',
      skills: [
        { name: 'Tailwind CSS', level: 92, experience: '2+ years', icon: '💨' },
        { name: 'SCSS/SASS', level: 90, experience: '4+ years', icon: '🎨' },
        { name: 'Bootstrap', level: 88, experience: '4+ years', icon: '🥾' },
        { name: 'Bulma', level: 85, experience: '2+ years', icon: '💪' },
        { name: 'CSS Animations', level: 87, experience: '3+ years', icon: '✨' },
        { name: 'Responsive Design', level: 95, experience: '5+ years', icon: '📱' }
      ]
    },
    'Dev Tools': {
      icon: Settings,
      color: 'text-accent-500',
      gradient: 'from-accent-500 to-green-600',
      skills: [
        { name: 'Webpack', level: 82, experience: '3+ years', icon: '📦' },
        { name: 'Babel', level: 80, experience: '3+ years', icon: '🔄' },
        { name: 'NPM/Yarn', level: 90, experience: '5+ years', icon: '📁' },
        { name: 'Git & Git Flow', level: 92, experience: '5+ years', icon: '🌿' },
        { name: 'Azure DevOps', level: 85, experience: '3+ years', icon: '☁️' },
        { name: 'Figma', level: 78, experience: '3+ years', icon: '🎨' }
      ]
    },
    Testing: {
      icon: Zap,
      color: 'text-yellow-500',
      gradient: 'from-yellow-500 to-orange-600',
      skills: [
        { name: 'Jest', level: 85, experience: '3+ years', icon: '🃏' },
        { name: 'React Testing Library', level: 88, experience: '2+ years', icon: '🧪' },
        { name: 'Mocha', level: 80, experience: '2+ years', icon: '☕' },
        { name: 'Chai', level: 78, experience: '2+ years', icon: '🍵' },
        { name: 'Unit Testing', level: 87, experience: '3+ years', icon: '🔬' },
        { name: 'Integration Testing', level: 82, experience: '2+ years', icon: '🔗' }
      ]
    },
    Backend: {
      icon: Database,
      color: 'text-purple-500',
      gradient: 'from-purple-500 to-indigo-600',
      skills: [
        { name: 'Node.js', level: 75, experience: '2+ years', icon: '🟢' },
        { name: '.NET (Basic)', level: 65, experience: '1+ year', icon: '🔷' },
        { name: 'RESTful APIs', level: 88, experience: '4+ years', icon: '🌐' },
        { name: 'SQL', level: 70, experience: '2+ years', icon: '🗃️' },
        { name: 'Database Design', level: 68, experience: '1+ year', icon: '📊' },
        { name: 'API Integration', level: 90, experience: '4+ years', icon: '🔌' }
      ]
    },
    Cloud: {
      icon: Cloud,
      color: 'text-blue-500',
      gradient: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'AWS S3', level: 82, experience: '1+ year', icon: '☁️' },
        { name: 'CloudFront', level: 80, experience: '1+ year', icon: '🌐' },
        { name: 'CI/CD Pipelines', level: 78, experience: '2+ years', icon: '🔄' },
        { name: 'Docker (Learning)', level: 60, experience: '6+ months', icon: '🐳' },
        { name: 'Deployment', level: 85, experience: '3+ years', icon: '🚀' },
        { name: 'Performance Monitoring', level: 80, experience: '2+ years', icon: '📊' }
      ]
    },
    'AI & Future': {
      icon: Brain,
      color: 'text-pink-500',
      gradient: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'GitHub Copilot', level: 85, experience: '1+ year', icon: '🤖' },
        { name: 'ChatGPT Integration', level: 78, experience: '6+ months', icon: '💬' },
        { name: 'AI-Assisted Development', level: 80, experience: '1+ year', icon: '🧠' },
        { name: 'Machine Learning (Learning)', level: 45, experience: '3+ months', icon: '🎯' },
        { name: 'Prompt Engineering', level: 82, experience: '8+ months', icon: '💡' },
        { name: 'Automation Tools', level: 75, experience: '2+ years', icon: '⚙️' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container-responsive" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and evolving skill set
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([category, data]) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${ 
                  activeCategory === category
                    ? `bg-gradient-to-r ${data.gradient} text-white shadow-lg`
                    : 'glass-effect hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <data.icon size={18} />
                <span>{category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid-responsive-1-2-3 gap-responsive"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-card group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{skill.experience}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${skillCategories[activeCategory].color}`}>
                      {skill.level}%
                    </div>
                  </div>
                </div>
                
                {/* Skill Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${skillCategories[activeCategory].gradient} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Learning Path */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="glass-effect p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Current Learning Path</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Globe className="text-primary-500 mx-auto" size={32} />
                  <h4 className="font-semibold">Full-Stack Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Expanding backend knowledge with Node.js, databases, and server architecture
                  </p>
                </div>
                <div className="space-y-2">
                  <Brain className="text-secondary-500 mx-auto" size={32} />
                  <h4 className="font-semibold">AI & Machine Learning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Integrating AI tools and exploring ML concepts for intelligent applications
                  </p>
                </div>
                <div className="space-y-2">
                  <Cloud className="text-accent-500 mx-auto" size={32} />
                  <h4 className="font-semibold">Cloud Architecture</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mastering cloud services, containerization, and scalable infrastructure
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;