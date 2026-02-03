import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover
    ? "hover:border-neon-cyan/50 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300"
    : "";

  return (
    <div className={`glassmorphism rounded-2xl border border-neon-cyan/20 p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
