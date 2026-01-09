import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className = "", id }: SectionContainerProps) {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
