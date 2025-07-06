import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Code, Zap, Users, TrendingUp, Globe, Database, Cpu } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Liv-ex Wine Trading Platform',
      category: 'Production',
      company: 'Liv-ex Ltd.',
      period: '2024',
      description: 'Leading the frontend development of a sophisticated wine trading platform serving global wine merchants and collectors.',
      longDescription: 'As the lead React developer, I architected and implemented a high-performance trading platform that handles real-time market data, complex trading algorithms, and seamless user experiences. The platform serves thousands of wine merchants globally with 99.9% uptime.',
      image: '/api/placeholder/600/400',
      achievements: [
        'Reduced page load times from 8s to 3s (62% improvement)',
        'Implemented real-time trading functionality',
        'Led deployment to AWS with CloudFront CDN',
        'Architected scalable component library'
      ],
      technologies: ['React.js', 'Redux', 'AWS S3', 'CloudFront', 'JavaScript ES6+', 'SCSS', 'Bulma', 'REST APIs'],
      metrics: {
        performance: '62% faster load times',
        users: '1000+ active traders',
        uptime: '99.9% reliability'
      },
      highlights: [
        { icon: TrendingUp, text: 'Performance Leader', color: 'text-green-500' },
        { icon: Globe, text: 'Global Platform', color: 'text-blue-500' },
        { icon: Zap, text: 'Real-time Trading', color: 'text-yellow-500' }
      ],
      demoUrl: 'https://www.liv-ex.com',
      codeSnippet: `// Performance optimization with React.memo and lazy loading
const TradingComponent = React.memo(({ tradeData }) => {
  const [optimizedData, setOptimizedData] = useState(null);
  
  useEffect(() => {
    // Debounced API calls for real-time data
    const debouncedFetch = debounce(fetchTradeData, 300);
    debouncedFetch(tradeData.id);
  }, [tradeData]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyTradeChart data={optimizedData} />
    </Suspense>
  );
});`
    },
    {
      id: 2,
      title: 'Design Library Application',
      category: 'Internal Tool',
      company: 'Accenture',
      period: '2022-2023',
      description: 'Comprehensive React.js application providing 1000+ downloadable animations and JavaScript templates for development teams.',
      longDescription: 'Built a complete design system and component library that became the go-to resource for frontend developers across multiple client projects. The application featured advanced search, categorization, and preview functionality.',
      image: '/api/placeholder/600/400',
      achievements: [
        'Reduced development time by 30% across teams',
        'Created 1000+ reusable components and animations',
        'Implemented offline-first functionality',
        'Built comprehensive search and filtering system'
      ],
      technologies: ['React.js', 'Redux', 'JavaScript', 'SCSS', 'Bootstrap', 'Azure DevOps', 'Git'],
      metrics: {
        components: '1000+ templates',
        efficiency: '30% time savings',
        adoption: '100+ developers'
      },
      highlights: [
        { icon: Cpu, text: 'Component Library', color: 'text-purple-500' },
        { icon: Users, text: '100+ Developers', color: 'text-blue-500' },
        { icon: TrendingUp, text: '30% Efficiency Gain', color: 'text-green-500' }
      ],
      codeSnippet: `// Dynamic component loading with error boundaries
const ComponentLibrary = () => {
  const [components, setComponents] = useState([]);
  const [filters, setFilters] = useState({ category: 'all', search: '' });

  const loadComponents = useCallback(async () => {
    try {
      const response = await import('./components/registry');
      const filtered = response.default.filter(comp => 
        matchesFilter(comp, filters)
      );
      setComponents(filtered);
    } catch (error) {
      console.error('Failed to load components:', error);
    }
  }, [filters]);

  return (
    <ErrorBoundary>
      <ComponentGrid components={components} />
    </ErrorBoundary>
  );
};`
    },
    {
      id: 3,
      title: 'CDAO Finance Application',
      category: 'Enterprise',
      company: 'Accenture',
      period: '2023-2024',
      description: 'Enterprise-grade internal finance application built with TypeScript and Angular, serving multiple business units.',
      longDescription: 'Led the frontend architecture for a comprehensive finance management system handling complex financial data, reporting, and analytics. Established coding standards and mentored a team of 8 developers.',
      image: '/api/placeholder/600/400',
      achievements: [
        'Architected frontend for 8-developer team',
        'Established comprehensive coding standards',
        'Integrated complex financial data visualization',
        'Implemented role-based access control'
      ],
      technologies: ['TypeScript', 'Angular', 'HTML5', 'CSS3', 'Bootstrap', 'Azure DevOps', 'Git'],
      metrics: {
        team: '8 developers led',
        modules: '15+ business modules',
        data: '1M+ financial records'
      },
      highlights: [
        { icon: Database, text: 'Enterprise Scale', color: 'text-indigo-500' },
        { icon: Users, text: 'Team Leadership', color: 'text-blue-500' },
        { icon: Code, text: 'TypeScript Expert', color: 'text-green-500' }
      ],
      codeSnippet: `// Type-safe financial data handling with Angular
interface FinancialRecord {
  id: string;
  amount: number;
  currency: Currency;
  category: TransactionCategory;
  date: Date;
}

@Injectable()
export class FinanceService {
  private apiUrl = environment.apiUrl;

  getFinancialData(params: QueryParams): Observable<FinancialRecord[]> {
    return this.http.get<FinancialRecord[]>(\`\${this.apiUrl}/finance\`, {
      params: this.buildQueryParams(params)
    }).pipe(
      map(data => data.map(record => ({
        ...record,
        date: new Date(record.date)
      }))),
      catchError(this.handleError)
    );
  }
}`
    },
    {
      id: 4,
      title: 'AI-Powered Portfolio Website',
      category: 'Personal',
      company: 'Personal Project',
      period: '2024-2025',
      description: 'Modern portfolio website showcasing AI-augmented development skills with interactive 3D elements and intelligent features.',
      longDescription: 'A cutting-edge portfolio demonstrating the integration of AI tools in modern web development. Features include AI-powered content generation, intelligent user interactions, and advanced performance optimizations.',
      image: '/api/placeholder/600/400',
      achievements: [
        'Integrated AI-powered features and interactions',
        'Implemented 3D visualizations with Three.js',
        'Achieved 95+ Lighthouse performance score',
        'Built with modern React patterns and TypeScript'
      ],
      technologies: ['React.js', 'TypeScript', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'AI APIs'],
      metrics: {
        performance: '95+ Lighthouse score',
        interactions: '10+ AI features',
        animations: '50+ micro-interactions'
      },
      highlights: [
        { icon: Cpu, text: 'AI-Augmented', color: 'text-pink-500' },
        { icon: Zap, text: 'High Performance', color: 'text-yellow-500' },
        { icon: Globe, text: 'Modern Tech Stack', color: 'text-blue-500' }
      ],
      demoUrl: 'https://jaswanth-b-kumar.github.io/skillset-portfolio/',
      githubUrl: 'https://github.com/jaswanth-b-kumar/skillset-portfolio',
      codeSnippet: `// AI-powered content generation
const useAIContent = (prompt: string) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const generateContent = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      setContent(data.content);
    } catch (error) {
      console.error('AI generation failed:', error);
    } finally {
      setLoading(false);
    }
  }, [prompt]);

  return { content, loading, generateContent };
};`
    }
  ];

  const categories = ['All', 'Production', 'Enterprise', 'Internal Tool', 'Personal'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
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
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of impactful projects demonstrating technical expertise and innovative problem-solving
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'glass-effect hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="project-card group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-t-xl flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {(() => {
                        const IconComponent = project.highlights[0].icon;
                        return IconComponent ? <IconComponent size={48} /> : null;
                      })()}
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 glass-effect rounded-full hover:text-primary-500 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 glass-effect rounded-full hover:text-primary-500 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <span>{project.company}</span>
                          <span>•</span>
                          <span>{project.period}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 dark:text-primary-400 rounded-full border border-primary-500/20">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex items-center space-x-4 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-1 text-sm">
                          <highlight.icon size={14} className={highlight.color} />
                          <span className="text-gray-600 dark:text-gray-400">{highlight.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-semibold text-primary-500">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold gradient-text mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedProject.company} • {selectedProject.period}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                  {selectedProject.longDescription}
                </p>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary-500 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Snippet */}
                {/* {selectedProject.codeSnippet && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                      <Code size={20} />
                      <span>Code Highlight</span>
                    </h4>
                    <div className="code-block">
                      <pre className="text-sm overflow-x-auto">
                        <code>{selectedProject.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                )} */}

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 dark:text-primary-400 rounded-full border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {selectedProject.demoUrl && (
                    <motion.a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Play size={18} />
                      <span>View Live Demo</span>
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-full font-semibold hover:text-primary-500 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={18} />
                      <span>View Source</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;