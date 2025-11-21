import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
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
      const clickableElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];

      // Check if element is clickable or has interactive parent
      const isClickable = target.closest(clickableElements.join(', ')) ||
                         clickableElements.includes(target.tagName);

      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant('text');
      } else if (isClickable) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-red-600 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={cursorVariant === 'hover' ? { scale: 1.5, borderColor: '#ffffff' } : { scale: 1, borderColor: '#ff0000' }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Crosshair Lines (Only show when not hovering text) */}
      {cursorVariant !== 'text' && (
        <>
           <motion.div
             className="fixed top-0 left-0 h-full w-[1px] bg-red-600/20 pointer-events-none z-[9990]"
             style={{
               x: cursorX,
               translateX: '-50%',
               translateY: '-50%'
             }}
           />
           <motion.div
             className="fixed top-0 left-0 w-full h-[1px] bg-red-600/20 pointer-events-none z-[9990]"
             style={{
               y: cursorY,
               translateX: '-50%',
               translateY: '-50%'
             }}
           />
        </>
      )}
    </>
  );
};

export default CustomCursor;
