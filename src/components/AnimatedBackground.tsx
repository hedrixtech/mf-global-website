import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Glowing Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/15 blur-[120px] animate-blob-1" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-teal-500/10 blur-[130px] animate-blob-2" />
      <div className="absolute top-[40%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-indigo-600/10 blur-[110px] animate-blob-1" style={{ animationDelay: '-5s' }} />
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/10 blur-[140px] animate-blob-2" style={{ animationDelay: '-10s' }} />

      {/* Grid Overlay for subtle tech vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      {/* Floating Particles */}
      <div className="particles-container absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="particle absolute rounded-full bg-purple-400/40"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px 2px rgba(168, 85, 247, 0.3)',
              animation: `float ${Math.random() * 12 + 18}s linear infinite, 
                          pulse ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-gray-950" />
    </div>
  );
};

export default AnimatedBackground;