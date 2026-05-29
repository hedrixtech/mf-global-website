import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Shield, FileText, CreditCard, Users, Gift, LayoutGrid } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/plans', label: 'الاشتراكات', icon: CreditCard },
    { path: '/partners', label: 'الشراكات', icon: Users },
    { path: '/affiliate', label: 'نظام الدعوات', icon: Gift },
    { path: 'https://majesticflux-dashboard.vercel.app/guilds', label: 'لوحة التحكم', icon: LayoutGrid, external: true },
    { path: '/terms', label: 'شروط الاستخدام', icon: FileText },
    { path: '/privacy', label: 'سياسة الخصوصية', icon: Shield },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-4 z-50 max-w-4xl mx-auto px-4 w-full">
      {/* Desktop & Tablet Navbar */}
      <div className="glass-panel rounded-2xl px-6 py-3 flex justify-between items-center border border-white/10 shadow-lg shadow-black/20">
        {/* Brand name */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="font-extrabold text-white text-sm select-none">MF</span>
          </div>
          <span className="font-bold text-white text-lg tracking-wider group-hover:text-purple-300 transition-colors">
            Majestic Flux
          </span>
        </Link>

        {/* Desktop Menu links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = !item.external && isActive(item.path);
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </>
            );
            return (
              <li key={item.path} className="relative">
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 select-none text-purple-300/80 hover:text-white hover:bg-white/5 border border-transparent"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 select-none
                      ${active 
                        ? 'text-white bg-purple-500/20 border border-purple-500/30' 
                        : 'text-purple-300/80 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                  >
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-purple-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Glass overlay) */}
      <div
        className={`fixed inset-0 top-20 z-40 md:hidden transition-all duration-300 ease-out p-4
          ${isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = !item.external && isActive(item.path);
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </>
              );
              return (
                <li key={item.path}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-200 text-purple-300/80 hover:text-white hover:bg-white/5"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-200
                        ${active 
                          ? 'text-white bg-purple-500/35 border border-purple-500/40 shadow-lg shadow-purple-500/10' 
                          : 'text-purple-300/80 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;