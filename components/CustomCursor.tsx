'use client'

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CustomCursorProps {
  isRootAccess?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isRootAccess = false }) => {
  const [cursorVariant, setCursorVariant] = useState('default');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check what we are hovering over
      const target = e.target as HTMLElement;

      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorVariant('skull');
      } else if (target.tagName === 'A' || target.closest('a')) {
        setCursorVariant('crosshair');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant('text');
      } else {
        setCursorVariant(isRootAccess ? 'skull' : 'default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY, isRootAccess]);

  return (
    <>
      {/* Main Dot (default and text) */}
      {(cursorVariant === 'default' || cursorVariant === 'text') && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
          style={{ x: cursorX, y: cursorY }}
        />
      )}

      {/* Crosshair (for links) */}
      {cursorVariant === 'crosshair' && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
          >
            {/* Center dot */}
            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Crosshair lines */}
            <div className="w-8 h-[2px] bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="h-8 w-[2px] bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Corner brackets */}
            <div className="absolute -top-4 -left-4 w-3 h-3 border-t-2 border-l-2 border-red-500" />
            <div className="absolute -top-4 -right-4 w-3 h-3 border-t-2 border-r-2 border-red-500" />
            <div className="absolute -bottom-4 -left-4 w-3 h-3 border-b-2 border-l-2 border-red-500" />
            <div className="absolute -bottom-4 -right-4 w-3 h-3 border-b-2 border-r-2 border-red-500" />
          </motion.div>
        </>
      )}

      {/* Skull (for buttons and root access) */}
      {cursorVariant === 'skull' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: isRootAccess ? [0, 5, -5, 0] : 0
          }}
          transition={{
            scale: { duration: 1, repeat: Infinity },
            rotate: { duration: 0.5, repeat: Infinity }
          }}
        >
          {/* Glowing red aura */}
          <div className="absolute inset-0 w-12 h-12 bg-red-600 rounded-full blur-xl opacity-50 animate-pulse" />

          {/* Skull SVG */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="relative z-10"
            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.8))' }}
          >
            {/* Skull outline */}
            <path
              d="M12 2C6.5 2 2 5.5 2 10c0 3.5 2 6.5 5 8v4l5-2 5 2v-4c3-1.5 5-4.5 5-8 0-4.5-4.5-8-10-8z"
              fill="#ff0000"
              stroke="#000"
              strokeWidth="0.5"
            />

            {/* Eye sockets */}
            <circle cx="8" cy="10" r="2" fill="#000" />
            <circle cx="16" cy="10" r="2" fill="#000" />

            {/* Glowing eyes */}
            <motion.circle
              cx="8"
              cy="10"
              r="1"
              fill="#ff0000"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.circle
              cx="16"
              cy="10"
              r="1"
              fill="#ff0000"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Nose hole */}
            <path
              d="M11 14l1-2 1 2-1 1z"
              fill="#000"
            />

            {/* Teeth */}
            <rect x="9" y="16" width="1.5" height="2" fill="#000" rx="0.3" />
            <rect x="11" y="16" width="1.5" height="2" fill="#000" rx="0.3" />
            <rect x="13" y="16" width="1.5" height="2" fill="#000" rx="0.3" />
          </svg>

          {/* Root access indicator */}
          {isRootAccess && (
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-red-500 whitespace-nowrap"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ROOT
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Trailing Ring */}
      {cursorVariant !== 'skull' && cursorVariant !== 'crosshair' && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 border border-red-600 rounded-full pointer-events-none z-[9998] mix-blend-difference"
          style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
          animate={cursorVariant === 'hover' ? { scale: 1.5, borderColor: '#ffffff' } : { scale: 1, borderColor: '#ff0000' }}
          transition={{ duration: 0.1 }}
        />
      )}

      {/* Crosshair Lines (Only show for default, not text/skull/crosshair) */}
      {cursorVariant === 'default' && (
        <>
           <motion.div
             className="fixed top-0 left-0 h-full w-[1px] bg-red-600/20 pointer-events-none z-[9990]"
             style={{ x: cursorX }}
           />
           <motion.div
             className="fixed top-0 left-0 w-full h-[1px] bg-red-600/20 pointer-events-none z-[9990]"
             style={{ y: cursorY }}
           />
        </>
      )}
    </>
  );
};

export default CustomCursor;
