import React, { useState } from 'react';

const BlogCard = ({ post, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform ${
        isHovered ? 'scale-105' : 'scale-100'
      } ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 ${
          darkMode ? 'bg-gradient-to-t from-gray-900' : 'bg-gradient-to-t from-white'
        } opacity-60`}></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className={`text-sm font-medium ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
            {post.date}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            darkMode 
              ? 'bg-gray-800 text-cyan-400' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {post.category}
          </span>
        </div>
        
        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {post.title}
        </h3>
        
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {post.excerpt}
        </p>
        
        <a 
          href={post.link} 
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center font-medium transition-colors ${
            darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          Read More
          <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      
      {/* Code-like overlay animation on hover */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-10' : 'opacity-0'
        }`}
      >
        <div className="h-full w-full flex flex-col">
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index}
              className={`h-4 my-1 ${
                Math.random() > 0.7 ? 'w-full' : 'w-1/2'
              } ${darkMode ? 'bg-cyan-400' : 'bg-blue-600'} opacity-20 rounded`}
              style={{ marginLeft: `${Math.random() * 50}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Blog = ({ darkMode }) => {
  const blogPosts = [
    {
      title: "Optimizing React Performance with Code Splitting",
      excerpt: "Learn how to improve your React application's load time using code splitting techniques and lazy loading components.",
      date: "February 15, 2025",
      category: "React",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      title: "The Future of Frontend Development with AI Assistance",
      excerpt: "Explore how AI tools are transforming the frontend development workflow and increasing productivity for developers.",
      date: "January 20, 2025",
      category: "AI",
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      title: "Building Responsive Interfaces with Modern CSS",
      excerpt: "Discover the latest CSS techniques for creating fluid, adaptive layouts that work across all screen sizes.",
      date: "December 5, 2024",
      category: "CSS",
      image: "/api/placeholder/600/400",
      link: "#"
    }
  ];

  return (
    <section id="blog" className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'<'}</span>
            Blog
            <span className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{'>'}</span>
          </h2>
          
          <p className={`text-lg mb-12 max-w-3xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I write about frontend development, best practices, and emerging technologies. 
            Check out some of my recent articles below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard 
                key={index} 
                post={post} 
                darkMode={darkMode} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 rounded-md font-semibold transition-colors ${
                darkMode 
                  ? 'bg-gray-900 hover:bg-gray-700 text-cyan-400 border border-cyan-400' 
                  : 'bg-white hover:bg-gray-100 text-blue-600 border border-blue-600'
              }`}
            >
              View All Articles
              <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;