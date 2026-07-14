'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const dotXSpring = useSpring(dotX, { damping: 40, stiffness: 500 });
  const dotYSpring = useSpring(dotY, { damping: 40, stiffness: 500 });

  const isHovering = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="pointer"]');
      if (isLink && cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1.8)';
        cursorRef.current.style.background = 'rgba(94, 59, 255, 0.15)';
        cursorRef.current.style.border = '1px solid rgba(94, 59, 255, 0.6)';
      }
    };

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
        cursorRef.current.style.background = 'transparent';
        cursorRef.current.style.border = '1px solid rgba(255, 255, 255, 0.3)';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transition: 'transform 0.2s ease, background 0.2s ease, border 0.2s ease',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#5E3BFF] pointer-events-none z-[9998] hidden md:block"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
      />
      {/* Glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[9997] hidden md:block opacity-10 blur-xl"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 150 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 150 }),
          background: 'radial-gradient(circle, #5E3BFF, transparent 70%)',
          marginLeft: -36,
          marginTop: -36,
        }}
      />
    </>
  );
}
