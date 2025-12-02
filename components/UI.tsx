import React from 'react';

export const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline'; 
  onClick?: () => void 
}> = ({ children, variant = 'primary', onClick }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-medium transition-all duration-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 font-sans";
  
  const variants = {
    // Red primary button like the book title
    primary: "border-transparent text-white bg-nexus-red hover:bg-red-700 focus:ring-red-500 shadow-sm",
    // Outline button using Ink color
    outline: "border-nexus-ink text-nexus-ink bg-transparent hover:bg-nexus-ink hover:text-white focus:ring-gray-500"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export const CodeWindow: React.FC<{ fileName: string; code: string; language?: string }> = ({ fileName, code, language = 'json' }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-2xl bg-[#1e1e1e] border border-gray-800 font-mono text-sm">
      {/* VS Code-like Header */}
      <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-[#1e1e1e]">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="text-gray-400 text-xs select-none">{fileName}</div>
      </div>
      {/* Code Area */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-gray-300 leading-relaxed">
          <code>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};