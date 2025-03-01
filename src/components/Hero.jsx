import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Hero = ({ darkMode }) => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  
  // Typing effect
  useEffect(() => {
    if (!textRef.current) return;
    
    const text = "Hi, I'm Jaswanth Kumar Bevara.";
    const subtitle = "Frontend Developer | Aspiring Frontend Architect | AI-Augmented Developer";
    const element = textRef.current;
    let titleIndex = 0;
    let subtitleIndex = 0;
    let titleComplete = false;
    const titleElement = document.createElement('h1');
    const subtitleElement = document.createElement('p');
    
    titleElement.className = `text-4xl sm:text-5xl md:text-6xl font-bold ${
      darkMode ? 'text-white' : 'text-gray-900'
    } mb-2`;
    
    subtitleElement.className = `text-xl sm:text-2xl ${
      darkMode ? 'text-cyan-400' : 'text-blue-600'
    } font-mono`;
    
    element.appendChild(titleElement);
    element.appendChild(subtitleElement);
    
    const typingInterval = setInterval(() => {
      if (!titleComplete) {
        if (titleIndex < text.length) {
          titleElement.textContent = text.slice(0, titleIndex + 1) + "█";
          titleIndex++;
        } else {
          titleElement.textContent = text;
          titleComplete = true;
          subtitleElement.textContent = "█";
        }
      } else {
        if (subtitleIndex < subtitle.length) {
          subtitleElement.textContent = subtitle.slice(0, subtitleIndex + 1) + "█";
          subtitleIndex++;
        } else {
          subtitleElement.textContent = subtitle;
          clearInterval(typingInterval);
          
          // Blink cursor
          let visible = true;
          const cursor = document.createElement('span');
          cursor.textContent = "█";
          cursor.className = "animate-pulse";
          subtitleElement.appendChild(cursor);
          
          setInterval(() => {
            cursor.style.opacity = visible ? 1 : 0;
            visible = !visible;
          }, 500);
        }
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [darkMode]);
  
  // Floating code snippets
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Code snippets
    const snippets = [
      "<div className='flex'>",
      "const [state, setState] = useState();",
      "useEffect(() => {}, []);",
      "return <Component {...props} />;",
      "import React from 'react';",
      "function App() {",
      "export default App;",
      "<header className='sticky'>",
      ".map((item) => <Item key={item.id} />)",
      "git commit -m 'Fix responsive issues'"
    ];
    
    const particles = [];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 10;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.text = snippets[Math.floor(Math.random() * snippets.length)];
        this.color = darkMode ? 
          `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 155}, 0.3)` :
          `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 155}, 0.3)`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.font = `${this.size}px Consolas, monospace`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }
    
    function init() {
      for (let i = 0; i < 10; i++) {
        particles.push(new Particle());
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [darkMode]);
  
  return (
    <section id="home" className="relative h-screen flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div ref={textRef} className="mb-8"></div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className={`px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 text-center ${
                darkMode 
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={`px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105 text-center ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-400' 
                  : 'bg-white hover:bg-gray-100 text-blue-600 border border-blue-600'
              }`}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;