import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover
    ? "hover:shadow-xl hover:scale-105 transition-all duration-300"
    : "";

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
