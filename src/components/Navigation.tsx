import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-purple-100 font-medium' : 'text-purple-300';
  };

  return (
    <nav className="py-4">
      <ul className="flex flex-wrap justify-center gap-6 text-lg">
        <li>
          <Link 
            to="/privacy" 
            className={`${isActive('/privacy')} hover:text-purple-100 transition-colors`}
          >
            سياسة الخصوصية
          </Link>
        </li>
        <li>
          <Link 
            to="/terms" 
            className={`${isActive('/terms')} hover:text-purple-100 transition-colors`}
          >
            شروط الاستخدام
          </Link>
        </li>
        <li>
          <Link 
            to="/plans" 
            className={`${isActive('/plans')} hover:text-purple-100 transition-colors`}
          >
            الاشتراكات
          </Link>
        </li>
        <li>
          <Link 
            to="/partners" 
            className={`${isActive('/partners')} hover:text-purple-100 transition-colors`}
          >
            الشراكات
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;