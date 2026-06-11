import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#09061a] text-white font-almarai overflow-x-hidden relative">
      {/* Animated background color blobs */}
      <AnimatedBackground />

      {/* Floating navigation menu */}
      <Navigation />

      <div className="container mx-auto px-4 pt-28 pb-8 relative z-10 max-w-5xl">
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