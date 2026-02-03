'use client';

import { useEffect, useState } from 'react';

interface CustomCursorProps {
  disabled?: boolean;
}

export default function CustomCursor({ disabled = false }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (disabled || isMobile) return;

    const updateCursorPosition = (e: MouseEvent) => {
      // Update circle position with slight delay
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update dot position immediately
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [disabled, isMobile]);

  if (disabled || isMobile) return null;

  return (
    <>
      {/* Trailing dot */}
      <div
        className="custom-cursor cursor-dot fixed pointer-events-none z-[9999]"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Main circle */}
      <div
        className={`custom-cursor cursor-circle fixed pointer-events-none z-[9999] ${
          isHovering ? 'cursor-hover' : ''
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
