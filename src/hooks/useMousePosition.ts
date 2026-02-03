'use client';

import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const throttleMs = 16; // ~60fps

    const updatePosition = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      // Throttle to 60fps
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
  }, []);

  return position;
}
