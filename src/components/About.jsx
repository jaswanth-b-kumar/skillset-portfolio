import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, Target, Rocket, Brain } from 'lucide-react';

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const achievements = [
    {
      icon: Award,
      title: '98th Percentile JEE Mains',
      description: 'Top 2% among 1.2M+ test-takers nationwide',
      color: 'text-yellow-500',
    },
    {
      icon: Briefcase,
      title: '5+ Years Experience',
      description: 'Building scalable web applications',
      color: 'text-primary-500',
    },
    {
      icon: Target,
      title: '99.9% Uptime',
      description: 'Maintained for production applications',
      color: 'text-accent-500',
    },
    {
      icon: Rocket,
      title: '30-40% Performance Boost',
      description: 'API optimization & page load improvements',
      color: 'text-secondary-500',
    },
  ];

  const transformationGoals = [
    {
      icon: Brain,
      title: 'AI-Augmented Development',
      description: 'Integrating AI/ML tools to enhance development workflow and create intelligent applications',
      progress: 70,
    },
    {
      icon: Rocket,
      title: 'Full-Stack Architecture',
      description: 'Expanding backend expertise with Node.js, databases, and cloud infrastructure',
      progress: 85,
    },
    {
      icon: Target,
      title: 'Technical Leadership',
      description: 'Leading teams, mentoring developers, and driving technical strategy',
      progress: 90,
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
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
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate about creating exceptional digital experiences through innovative frontend solutions
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  My Journey
                </h3>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    My journey began in <span className="text-primary-500 font-semibold">2020</span> when I cracked the 
                    Advanced Software Engineer interview at <span className="text-secondary-500 font-semibold">Accenture</span>. 
                    Starting with the Studio Client project, I immersed myself in mastering JavaScript, HTML, CSS, and Bootstrap.
                  </p>
                  
                  <p>
                    Through dedication and continuous learning, I quickly advanced to senior positions and discovered my 
                    passion for <span className="text-primary-500 font-semibold">React.js</span>. My expertise grew across 
                    multiple high-impact projects including the Design Library Application and CDAO Finance platform.
                  </p>
                  
                  <p>
                    In <span className="text-accent-500 font-semibold">June 2024</span>, I took a significant leap by moving 
                    from India to London to join <span className="text-secondary-500 font-semibold">Liv-ex</span> as a Senior Software Engineer. 
                    Here, I'm one of only 2 React developers in an 11-person engineering team, wearing multiple hats as developer, 
                    architect, and team lead.
                  </p>
                  
                  <p>
                    Today, I'm focused on <span className="gradient-text font-semibold">transforming into a Full-Stack Engineer</span> 
                    and <span className="gradient-text font-semibold">AI-Augmented Developer</span>, leveraging cutting-edge technologies 
                    to build the next generation of web applications.
                  </p>
                </div>
              </div>

              {/* Education */}
              <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="text-primary-500" size={24} />
                  <h4 className="text-xl font-semibold">Education</h4>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">Bachelor of Technology</h5>
                  <p className="text-gray-600 dark:text-gray-400">National Institute of Technology Karnataka (NIT Surathkal)</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Achievements & Goals */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Achievements */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Key Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5"
                    >
                      <achievement.icon className={`${achievement.color} mb-3`} size={24} />
                      <h4 className="font-semibold text-sm mb-2">{achievement.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Transformation Goals */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Current Focus & Goals
                </h3>
                <div className="space-y-6">
                  {transformationGoals.map((goal, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <goal.icon className="text-primary-500" size={20} />
                        <h4 className="font-semibold">{goal.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 ml-8">
                        {goal.description}
                      </p>
                      <div className="ml-8">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500">Progress</span>
                          <span className="text-xs font-semibold text-primary-500">{goal.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${goal.progress}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Philosophy</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                "I believe in the power of <span className="text-primary-500 font-semibold">continuous learning</span> and 
                <span className="text-secondary-500 font-semibold"> innovative problem-solving</span>. Every project is an opportunity 
                to push boundaries, optimize performance, and create meaningful user experiences. As I evolve into a full-stack and 
                AI-augmented developer, I'm committed to staying at the forefront of technology while maintaining a focus on 
                <span className="text-accent-500 font-semibold"> clean, scalable code</span> and 
                <span className="text-primary-500 font-semibold"> exceptional user experiences</span>."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;