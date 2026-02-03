"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import ScrambleText from "./ScrambleText";
import MouseGlow from "./MouseGlow";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
}

export default function Hero({ headline, subheadline, ctaText, ctaHref }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector(ctaHref);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-background-primary overflow-hidden"
    >
      {/* Mouse Glow Effect */}
      {mounted && <MouseGlow color="rgba(0, 255, 255, 0.15)" size={600} blur={80} />}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary to-background-primary" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glassmorphism-light border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-medium">
            Next-Gen Software Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {mounted ? (
            <ScrambleText 
              text={headline}
              duration={2000}
              className="inline-block bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent"
            />
          ) : (
            <span className="inline-block bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent">
              {headline}
            </span>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            onClick={handleCtaClick}
            className="bg-neon-cyan/10 text-neon-cyan border-2 border-neon-cyan hover:bg-neon-cyan hover:text-background-primary transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/50"
          >
            {ctaText}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleCtaClick}
            className="border-2 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "50+", label: "Happy Clients" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center glassmorphism-light rounded-lg p-4 border border-neon-cyan/20"
            >
              <div className="text-2xl sm:text-3xl font-bold text-neon-cyan">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-neon-cyan rounded-full shadow-lg shadow-neon-cyan/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
