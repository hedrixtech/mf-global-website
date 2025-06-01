import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="particles-container absolute inset-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="particle absolute rounded-full bg-purple-500/30"
            style={{
              width: `${Math.random() * 12 + 2}px`,
              height: `${Math.random() * 12 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px 2px rgba(168, 85, 247, 0.4)',
              animation: `float ${Math.random() * 10 + 15}s linear infinite, 
                          pulse ${Math.random() * 4 + 2}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-950/50" />
    </div>
  );
};

export default AnimatedBackground;