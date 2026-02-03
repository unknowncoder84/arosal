'use client';

import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  duration?: number;
  className?: string;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

export default function ScrambleText({ 
  text, 
  duration = 2000, 
  className = '' 
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let frame = 0;
    const totalFrames = duration / 50; // 50ms per frame
    const charsPerFrame = text.length / totalFrames;

    const animate = () => {
      if (frame >= totalFrames) {
        setDisplayText(text);
        setIsAnimating(false);
        return;
      }

      const revealedChars = Math.floor(frame * charsPerFrame);
      
      const newText = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          
          if (index < revealedChars) {
            return text[index];
          }
          
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join('');

      setDisplayText(newText);
      frame++;
      
      setTimeout(animate, 50);
    };

    animate();
  }, [text, duration]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}
