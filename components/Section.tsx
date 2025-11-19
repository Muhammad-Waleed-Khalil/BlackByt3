import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';

interface SectionProps {
  id: SectionId;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`relative min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-24 z-10 border-l border-red-900/20 ml-0 md:ml-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        {/* Breach Indicator */}
        <div className="flex items-center gap-4 mb-4 text-red-600 font-mono text-xs tracking-widest">
          <span className="animate-pulse">●</span>
          <span>BREACHING_LAYER_{id.toUpperCase()}</span>
          <div className="h-[1px] w-24 bg-red-600/50"></div>
        </div>

        <h2 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 font-['Unica_One'] uppercase tracking-tighter">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-xl md:text-2xl text-red-500 font-mono mt-2 max-w-2xl">
            {subtitle}
          </h3>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
