"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionContainer from "./ui/SectionContainer";
import AnimatedSection from "./ui/AnimatedSection";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
}

interface PortfolioProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Bento Grid sizing
  const sizeClasses = {
    small: 'md:col-span-1 md:row-span-1',
    medium: 'md:col-span-1 md:row-span-2',
    large: 'md:col-span-2 md:row-span-1',
  };

  const size = item.size || 'small';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        rotateX: isHovered ? rotateX : "0deg",
        rotateY: isHovered ? rotateY : "0deg",
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl ${sizeClasses[size]} min-h-[300px] cursor-pointer`}
      data-testid="portfolio-item"
    >
      <div className="absolute inset-0 glassmorphism border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300 rounded-2xl">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid="portfolio-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Neon glow overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl shadow-lg shadow-neon-cyan/30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          style={{ transform: isHovered ? "translateZ(50px)" : "translateZ(0px)" }}
        >
          <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider" data-testid="portfolio-category">
            {item.category}
          </span>
          <h3 className="text-white text-2xl font-bold mt-2 group-hover:text-neon-cyan transition-colors" data-testid="portfolio-title">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio({ title, subtitle, items }: PortfolioProps) {
  return (
    <SectionContainer id="portfolio" className="bg-background-secondary relative overflow-hidden">
      <div className="relative z-10">
        <AnimatedSection className="text-center mb-16" direction="scale">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 glassmorphism-light border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-medium mb-4"
          >
            Our Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px]">
          {items.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
