import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, id, children }) => {
  return (
    <section id={id} className="mb-8 w-full">
      <div className="glass-panel-glow rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden select-none">
        {/* Glow corner elements inside card */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-300 mb-8 relative flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-purple-400 to-indigo-500 shrink-0" />
          <span>{title}</span>
        </h2>

        {/* Content */}
        <div className="text-purple-100/90 text-lg leading-[1.8] relative z-10" dir="rtl">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;