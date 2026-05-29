import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#09061a] text-slate-100 font-tajawal overflow-x-hidden relative">
      {/* Animated background color blobs */}
      <AnimatedBackground />

      {/* Floating navigation menu */}
      <div className="pt-6 relative z-50">
        <Navigation />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-5xl">
        {/* Dynamic header - larger on Home, smaller on other pages */}
        <header className="text-center mt-6 mb-12 select-none">
          <Link to="/" className="inline-block group">
            {isHome ? (
              <div className="space-y-3">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-indigo-300 tracking-wide drop-shadow-[0_4px_12px_rgba(168,85,247,0.15)] group-hover:scale-[1.02] transition-transform duration-300">
                  Majestic Flux
                </h1>
                <p className="text-purple-300/80 text-lg md:text-xl font-medium tracking-wide">
                  حول خيالك إلى واقع
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 tracking-wider">
                  Majestic Flux
                </h2>
              </div>
            )}
          </Link>
        </header>

        {/* Page Content */}
        <main className="min-h-[50vh] relative z-10 animate-fade-in">
          {children}
        </main>

        {/* Glass Footer */}
        <footer className="mt-20 text-center py-8 border-t border-white/5 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-purple-400/60 text-sm">
            <p>© {new Date().getFullYear()} Majestic Flux • جميع الحقوق محفوظة</p>
            <div className="flex gap-6">
              <a href="https://majesticflux-dashboard.vercel.app/guilds" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">لوحة التحكم</a>
              <Link to="/terms" className="hover:text-purple-300 transition-colors">شروط الاستخدام</Link>
              <Link to="/privacy" className="hover:text-purple-300 transition-colors">سياسة الخصوصية</Link>
              <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">الدعم الفني</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;