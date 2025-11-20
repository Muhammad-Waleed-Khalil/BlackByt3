'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionId } from '../types';

interface NavigationProps {
  onNavigate?: (id: SectionId) => void;
  currentPath?: string;
}

const NAV_ITEMS = [
  { href: '/', label: '01_HOME' },
  { href: '/about', label: '02_ABOUT' },
  { href: '/services', label: '03_SERVICES' },
  { href: '/solutions', label: '04_SOLUTIONS' },
  { href: '/academy', label: '05_ACADEMY' },
  { href: '/arena', label: '06_ARENA' },
  { href: '/portfolio', label: '07_PROJECTS' },
  { href: '/shop', label: '08_SHOP' },
  { href: '/resources', label: '09_INTEL' },
  { href: '/faq', label: '10_FAQ' },
  { href: '/contact', label: '11_UPLINK' },
];

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPath }) => {
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
          <Link
            key={item.href}
            href={item.href}
            className={`text-gray-400 hover:text-red-500 font-mono text-sm tracking-wider transition-colors hover:shadow-[0_0_10px_rgba(255,0,0,0.5)] uppercase ${
              currentPath === item.href ? 'text-red-500' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
