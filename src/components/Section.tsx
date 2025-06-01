import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, id, children }) => {
  return (
    <section id={id} className="mb-12">
      <div className="backdrop-blur-sm bg-purple-900/20 rounded-xl p-6 shadow-lg border border-purple-500/20 transition-all duration-300 hover:shadow-purple-500/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-purple-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-purple-200 relative">
          {title}
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mx-auto mt-3"></div>
        </h2>
        <div className="text-purple-100 text-lg leading-relaxed" dir="rtl">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;