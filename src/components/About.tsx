"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./ui/SectionContainer";
import AnimatedSection from "./ui/AnimatedSection";

interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

interface AboutProps {
  title: string;
  description: string;
  mission: string;
  statistics: Statistic[];
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} data-testid="stat-value">
      {count}{suffix}
    </span>
  );
}

export default function About({ title, description, mission, statistics }: AboutProps) {
  return (
    <SectionContainer id="about" className="bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-tech-pattern opacity-30" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4"
          >
            About Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            {description}
          </p>
          <div className="relative pl-6 border-l-2 border-primary-500">
            <p className="text-lg text-gray-300 leading-relaxed italic">
              {mission}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="right">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-card rounded-xl p-6 text-center card-glow"
                data-testid="stat-item"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2 glow-text">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm" data-testid="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
}
