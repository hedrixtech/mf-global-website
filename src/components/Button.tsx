import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  onClick,
  disabled = false,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-300 relative overflow-hidden active:scale-95 disabled:opacity-55 disabled:pointer-events-none group select-none
        ${primary
          ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 border border-purple-400/30 hover:border-purple-300/50'
          : 'bg-white/5 hover:bg-white/10 text-purple-200 hover:text-white border border-white/10 hover:border-purple-500/30 shadow-md'
        }`}
    >
      {/* Glow aura */}
      <span className="absolute -inset-px bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      
      {/* Light sheen effect */}
      <span className="absolute inset-0 w-[30%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[350%] transition-transform duration-1000 ease-out" />
      
      {/* Label */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;