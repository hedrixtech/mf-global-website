import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, primary = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg 
        ${primary 
          ? 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white' 
          : 'bg-purple-900/40 hover:bg-purple-900/60 text-purple-200 border border-purple-500/50'}
        relative overflow-hidden group`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-purple-400/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 
        transform -translate-x-full group-hover:translate-x-full"></div>
      <div className="absolute inset-0 border border-purple-400/30 rounded-lg"></div>
      <div className="absolute -inset-px bg-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default Button;