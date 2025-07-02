import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />
      
      {/* Circular Progress Indicator - Better positioned */}
      <div className="fixed bottom-8 right-8 z-30 hidden lg:block">
        <div className="relative w-12 h-12">
          {/* Background Circle */}
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="stroke-current text-gray-300 dark:text-gray-600"
              strokeWidth="2"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Progress Circle */}
            <path
              className="stroke-current text-primary-500 transition-all duration-300 ease-out"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${scrollProgress * 100}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;