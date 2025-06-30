import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ParticleSystem from './components/ParticleSystem';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(systemPrefersDark);
    }

    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Custom cursor tracking
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Easter egg console message
    console.log(`%c🚀 Welcome to Jaswanth's Portfolio! %c\\n\\n` +
      `I see you're checking out the console - that's awesome! \\n` +
      'Feel free to explore the code and see how this portfolio was built.\\n\\n' +
      '💡 Pro tip: Type "help()" in the console for some hidden features!',
      'color: #4facfe; font-size: 16px; font-weight: bold;',
      'color: #64748b; font-size: 12px;'
  );

    // Add help function to window
    window.help = () => {
      console.log(
        '%cAvailable Commands: %c\\n\\n' +
        '• skills() - View my technical skills\\n' +
        '• experience() - See my work experience\\n' +
        '• contact() - Get my contact information\\n' +
        '• theme() - Toggle dark/light theme\\n' +
        '• source() - View source code',
        'color: #4facfe; font-weight: bold;',
        'color: #64748b;'
      );
    };

    window.skills = () => console.log('React.js, TypeScript, JavaScript, Node.js, AWS, and more!');
    window.experience = () => console.log('5+ years in frontend development, currently Senior Software Engineer at Liv-ex');
    window.contact = () => console.log('Email: jaswanth.k.bevara@gmail.com | LinkedIn: /in/jaswanth-bevara');
    window.theme = () => setDarkMode(prev => !prev);
    window.source = () => window.open('https://github.com/jaswanth-b-kumar/skillset-portfolio', '_blank');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white text-gray-800'
    }`}>
      {/* Custom Cursor */}
      <motion.div
        className="hidden lg:block fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background: darkMode ? '#4facfe' : '#667eea',
          left: cursorPosition.x - 8,
          top: cursorPosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
      />

      {/* Particle System Background */}
      <ParticleSystem darkMode={darkMode} />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Content */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="spinner"></div></div>}>
            <main>
              <Hero darkMode={darkMode} />
              <About darkMode={darkMode} />
              <Skills darkMode={darkMode} />
              <Experience darkMode={darkMode} />
              <Projects darkMode={darkMode} />
              <Contact darkMode={darkMode} />
            </main>
          </Suspense>

          <Footer darkMode={darkMode} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;