'use client';

import { useEffect, useState } from 'react';

interface MouseGlowProps {
  color?: string;
  size?: number;
  blur?: number;
}

export default function MouseGlow({ 
  color = 'rgba(0, 255, 255, 0.3)', 
  size = 400,
  blur = 100
}: MouseGlowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
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
    if (isMobile) return;

    let rafId: number;
    let lastTime = 0;
    const throttleMs = 16; // ~60fps

    const updatePosition = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      if (currentTime - lastTime < throttleMs) {
        return;
      }

      lastTime = currentTime;
      
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${color}, transparent ${blur}%)`,
      }}
    />
  );
}
