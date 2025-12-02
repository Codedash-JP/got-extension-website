import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'cream';
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', background = 'cream' }) => {
  const bgClass = {
    light: 'bg-white',
    dark: 'bg-paper', // A slightly darker beige/grey to contrast with the cream
    cream: 'bg-nexus-cream',
  }[background];

  return (
    <section className={`w-full py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-16 max-w-3xl">
    <h2 className="font-serif text-3xl md:text-4xl text-nexus-ink font-bold mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="font-sans text-lg md:text-xl text-nexus-gray leading-relaxed max-w-2xl">
        {subtitle}
      </p>
    )}
  </div>
);

export const GridBlock: React.FC<{ children: React.ReactNode; cols?: 2 | 3 }> = ({ children, cols = 3 }) => {
  const gridCols = cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-12`}>
      {children}
    </div>
  );
};