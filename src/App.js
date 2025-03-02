import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);

    // Set up console easter egg
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      if (args.length === 1 && args[0] === 'help') {
        setEasterEggActive(true);
      }
      originalConsoleLog(...args);
    };

    return () => {
      console.log = originalConsoleLog;
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {
        <>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Blog darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          {easterEggActive && <EasterEgg darkMode={darkMode} onClose={() => setEasterEggActive(false)} />}
        </>
      }

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
