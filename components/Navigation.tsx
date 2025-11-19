import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { SectionId } from '../types';

interface NavigationProps {
  onNavigate: (id: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-24 z-40 flex justify-center items-start transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The Trigger Zone visual */}
      <div className={`absolute top-0 w-64 h-1 bg-red-600 shadow-[0_0_10px_#f00] transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-50 animate-pulse'}`} />

      {/* The Menu */}
      <div 
        className={`
          mt-4 px-8 py-4 bg-black/90 backdrop-blur-lg border border-red-900/50 rounded-b-2xl 
          flex gap-8 transition-all duration-500 transform
          ${isHovered ? 'translate-y-0 opacity-100 shadow-[0_10px_30px_rgba(255,0,0,0.2)]' : '-translate-y-full opacity-0'}
        `}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="text-gray-400 hover:text-red-500 font-mono text-sm tracking-wider transition-colors hover:shadow-[0_0_10px_rgba(255,0,0,0.5)] uppercase"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
