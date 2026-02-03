'use client';

interface InfiniteMarqueeProps {
  text: string;
  speed?: number;
}

export default function InfiniteMarquee({ 
  text, 
  speed = 50 
}: InfiniteMarqueeProps) {
  // Duplicate text for seamless loop
  const repeatedText = `${text} • `.repeat(10);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
      <div className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap">
        <div
          className="inline-block text-6xl md:text-8xl font-bold text-neon-cyan"
          style={{
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          {repeatedText}
        </div>
        <div
          className="inline-block text-6xl md:text-8xl font-bold text-neon-cyan"
          style={{
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          {repeatedText}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
