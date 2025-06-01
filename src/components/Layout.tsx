import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 text-white font-tajawal overflow-hidden relative">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="flex justify-center items-center py-6 mb-8">
          <div className="text-center">
            <Link to="/">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-2 tracking-wider">
                Majestic Flux
              </h1>
              <p className="text-purple-300 text-lg md:text-xl">
               حول خيالك إلى واقع
              </p>
            </Link>
          </div>
        </header>
        <Navigation />
        <main>
          {children}
        </main>
        <footer className="mt-16 text-center text-purple-400 text-sm py-6 border-t border-purple-800/30">
          <p>© {new Date().getFullYear()} Majestic Flux • جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;