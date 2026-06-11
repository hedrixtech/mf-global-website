import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'العضوية المميزة', path: '/plans' },
    { label: 'برنامج الشراكة', path: '/partners' },
    { label: 'لوحة التحكم', path: 'https://majesticflux-dashboard.vercel.app/guilds', external: true },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full border border-purple-500/10 backdrop-blur-xl bg-[#09061a]/30 shadow-lg shadow-black/20 relative">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-decoration-none group">
          <span className="w-7 h-7 rounded-full border-2 border-purple-400/40 flex items-center justify-center group-hover:border-purple-400/70 transition-colors">
            <span className="w-3 h-3 rounded-full border border-purple-400/40 group-hover:border-purple-400/70 transition-colors" />
          </span>
          <span className="font-bold text-sm text-white tracking-tight font-almarai">
            Majestic Flux
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1.5 text-xs font-semibold font-almarai">
          {navItems.map((item, i) => {
            const active = !item.external && isActive(item.path);
            return (
              <React.Fragment key={item.label}>
                {i > 0 && <span className="text-purple-500/10 select-none mx-1">•</span>}
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300/60 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`transition-colors duration-200 ${
                      active ? 'text-white font-bold' : 'text-purple-300/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full text-purple-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-20 left-4 right-4 md:hidden z-45"
          >
            <div className="rounded-3xl p-5 border border-purple-500/15 backdrop-blur-xl bg-[#09061a]/95 shadow-2xl flex flex-col gap-4">
              <ul className="flex flex-col gap-3 font-almarai text-sm font-semibold">
                {navItems.map((item) => {
                  const active = !item.external && isActive(item.path);
                  return (
                    <li key={item.label} className="border-b border-white/5 last:border-0 pb-2.5 last:pb-0">
                      {item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className="text-purple-300/75 hover:text-white flex items-center justify-between"
                        >
                          <span>{item.label}</span>
                          <span className="text-[10px] bg-purple-500/10 px-2 py-0.5 rounded text-purple-400">خارجي</span>
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between ${
                            active ? 'text-purple-400 font-bold' : 'text-purple-300/75 hover:text-white'
                          }`}
                        >
                          <span>{item.label}</span>
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;