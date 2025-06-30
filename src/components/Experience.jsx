import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ExternalLink, TrendingUp, Users, Code, Award } from 'lucide-react';

const Experience = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      company: 'Liv-ex Ltd.',
      role: 'Senior Software Engineer',
      duration: 'June 2024 - Present',
      location: 'London, England',
      type: 'Current Position',
      description: 'Leading React development in a focused 11-person engineering team, driving technical excellence and innovation in the wine trading platform.',
      achievements: [
        'Lead React developer among 2-person frontend team, maintaining development pipelines and releases',
        'Deployed platform to AWS S3 and CloudFront, achieving optimal performance and scalability',
        'Optimized API efficiency by 30-40%, improving page load times from 8s to 3s (5s improvement)',
        'Implemented advanced React patterns including lazy loading, memoization, and code splitting',
        'Leading outsourced development teams and providing technical guidance',
        'Collaborating in Agile/Scrum environment with sprint planning and code reviews'
      ],
      technologies: ['React.js', 'JavaScript ES6+', 'Redux', 'AWS S3', 'CloudFront', 'Git Flow', 'SCSS', 'Bulma', 'REST APIs'],
      highlights: [
        { icon: TrendingUp, text: '30-40% Performance Improvement', color: 'text-green-500' },
        { icon: Users, text: 'Leading 2+ Development Teams', color: 'text-blue-500' },
        { icon: Code, text: 'Advanced React Architecture', color: 'text-purple-500' }
      ]
    },
    {
      id: 2,
      company: 'Accenture',
      role: 'Advanced Application Engineering Sr Analyst',
      duration: 'September 2020 - April 2024',
      location: 'Hyderabad, India',
      type: '3.5+ Years',
      description: 'Progressed through multiple high-impact projects, evolving from junior developer to senior analyst while mastering modern frontend technologies.',
      achievements: [
        'Architected frontend structure and coding standards for 8-developer team (CDAO Project)',
        'Built React.js application with 1000+ downloadable animations and templates (Design Library)',
        'Reduced frontend development time by 30% through reusable component architecture',
        'Improved application performance by 20% through optimization and monitoring',
        'Provided technical guidance to 50+ client teams worldwide',
        'Mentored junior developers in React.js best practices'
      ],
      technologies: ['React.js', 'TypeScript', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Azure DevOps', 'jQuery'],
      projects: [
        {
          name: 'CDAO - Internal Finance Application',
          period: 'Dec 2023 - Apr 2024',
          description: 'Developed responsive UI components using TypeScript and Angular, established coding standards documentation',
          tech: ['TypeScript', 'Angular', 'HTML5', 'CSS3', 'Bootstrap']
        },
        {
          name: 'Design Library Application',
          period: 'May 2022 - Dec 2023',
          description: 'Built comprehensive React.js application with 1000+ animations, implemented offline detection',
          tech: ['React.js', 'JavaScript', 'Redux', 'SCSS', 'Bootstrap']
        },
        {
          name: 'Studio Client Solutions',
          period: 'Sep 2020 - May 2022',
          description: 'Created interactive responsive websites from Figma designs, developed cross-browser compatible microsites',
          tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap']
        }
      ],
      highlights: [
        { icon: Award, text: '30% Development Time Reduction', color: 'text-green-500' },
        { icon: Users, text: 'Mentored 50+ Developers', color: 'text-blue-500' },
        { icon: Code, text: 'Multiple Technology Stacks', color: 'text-purple-500' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container-responsive" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A journey of continuous growth, learning, and technical excellence across multiple impactful projects
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />
                  
                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`experience-card group w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {exp.role}
                          </h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            exp.type === 'Current Position' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-primary-500 mb-2">{exp.company}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <highlight.icon size={16} className={highlight.color} />
                          <span className="text-gray-600 dark:text-gray-400">{highlight.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 4).map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 dark:text-primary-400 rounded-full border border-primary-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects (for Accenture) */}
                    {exp.projects && (
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Major Projects:</h5>
                        <div className="space-y-4">
                          {exp.projects.map((project, idx) => (
                            <div key={idx} className="p-4 rounded-lg bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5">
                              <div className="flex items-start justify-between mb-2">
                                <h6 className="font-medium text-gray-800 dark:text-white">{project.name}</h6>
                                <span className="text-xs text-gray-500">{project.period}</span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {project.tech.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Progression */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Career Progression</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary-500">2020</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Started as Junior Developer</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary-500">2024</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Senior Engineer in London</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent-500">2025</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Full-Stack & AI-Augmented Developer</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;