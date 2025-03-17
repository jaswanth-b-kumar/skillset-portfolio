import React, { useState, useEffect } from 'react';

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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Function to parse RSS content and extract plain text excerpt
  const extractExcerpt = (content, maxLength = 120) => {
    // Create a temporary element to parse HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    // Get text content without HTML tags
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // Remove extra whitespace and trim to maxLength
    const cleanText = textContent.replace(/\s+/g, ' ').trim();
    
    if (cleanText.length <= maxLength) {
      return cleanText;
    }
    
    // Trim to maxLength and add ellipsis
    return cleanText.substring(0, maxLength).trim() + '...';
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Function to get placeholder image based on categories
  const getCategoryImage = (category) => {
    const categoryMap = {
      'javascript': '/api/placeholder/600/400?text=JavaScript',
      'react': '/api/placeholder/600/400?text=React',
      'front-end-development': '/api/placeholder/600/400?text=Frontend',
      'web-development': '/api/placeholder/600/400?text=Web',
      'ai-in-development': '/api/placeholder/600/400?text=AI',
      'es6': '/api/placeholder/600/400?text=ES6',
      'browser-api': '/api/placeholder/600/400?text=Browser',
      'javascript-development': '/api/placeholder/600/400?text=JS'
    };
    
    return categoryMap[category.toLowerCase()] || '/api/placeholder/600/400?text=Tech';
  };

  useEffect(() => {
    const fetchRssFeed = async () => {
      try {
        setLoading(true);
        
        // Fetch RSS feed from Medium
        const response = await fetch('https://medium.com/feed/@jaswanth.k.bevara', {
          headers: {
            'Content-Type': 'application/xml',
            'Accept': 'application/xml',
          }
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch RSS feed: ${response.status}`);
        }
        const xmlText = await response.text();
        
        // Parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        
        // Extract items
        const items = xmlDoc.querySelectorAll('item');
        
        const parsedPosts = Array.from(items).map(item => {
          // Get the first category if multiple exist
          const categoryElement = item.querySelector('category');
          const category = categoryElement ? categoryElement.textContent.trim() : 'General';
          
          // Get content
          const contentElement = item.querySelector('content\\:encoded');
          const content = contentElement ? contentElement.textContent : '';
          
          // Get publication date
          const pubDateElement = item.querySelector('pubDate');
          const pubDate = pubDateElement ? pubDateElement.textContent : '';
          
          return {
            title: item.querySelector('title').textContent.replace(/<!\[CDATA\[|\]\]>/g, '').trim(),
            link: item.querySelector('link').textContent,
            excerpt: extractExcerpt(content),
            date: formatDate(pubDate),
            category: category.replace(/<!\[CDATA\[|\]\]>/g, '').trim(),
            image: getCategoryImage(category)
          };
        });
        
        setPosts(parsedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching or parsing RSS feed:', err);
        setError(err.message);
        setLoading(false);
        
        // Fallback to default posts if there's an error
        setPosts([
          {
            title: "Error fetching posts",
            excerpt: "We couldn't load the latest posts from Medium. Please try again later or check out the blog directly.",
            date: new Date().toLocaleDateString(),
            category: "Error",
            image: "/api/placeholder/600/400?text=Error",
            link: "https://medium.com/@jaswanth.k.bevara"
          }
        ]);
      }
    };
    
    fetchRssFeed();
    
    // Set up periodic refresh (every 30 minutes)
    const refreshInterval = setInterval(fetchRssFeed, 30 * 60 * 1000);
    
    // Clean up on unmount
    return () => clearInterval(refreshInterval);
  }, []);

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
          
          {loading ? (
            <div className={`text-center py-12 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
              <svg className="animate-spin h-8 w-8 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p>Loading latest articles...</p>
            </div>
          ) : error && posts.length === 0 ? (
            <div className={`text-center py-12 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
              <p>Error loading articles: {error}</p>
              <a 
                href="https://medium.com/@jaswanth.k.bevara" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-block mt-4 px-4 py-2 rounded ${
                  darkMode ? 'bg-cyan-600 text-white' : 'bg-blue-600 text-white'
                }`}
              >
                Visit Medium Blog
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard 
                  key={index} 
                  post={post} 
                  darkMode={darkMode} 
                />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <a 
              href="https://medium.com/@jaswanth.k.bevara" 
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