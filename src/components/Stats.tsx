'use client';

import { motion } from 'framer-motion';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

interface StatsProps {
  statistics: Statistic[];
}

export default function Stats({ statistics }: StatsProps) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      id="stats"
      ref={ref}
      className="relative py-20 bg-background-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-neon-cyan">Impact</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Delivering excellence through innovation and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {statistics.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ 
  stat, 
  index, 
  inView 
}: { 
  stat: Statistic; 
  index: number; 
  inView: boolean;
}) {
  const count = useAnimatedCounter(stat.value, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glassmorphism rounded-2xl p-8 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300 group"
    >
      <div className="text-center">
        <motion.div
          className="text-5xl md:text-6xl font-bold text-neon-cyan mb-2"
          whileHover={{ scale: 1.05 }}
        >
          {count}{stat.suffix}
        </motion.div>
        <div className="text-lg text-text-secondary group-hover:text-white transition-colors">
          {stat.label}
        </div>
      </div>
      
      {/* Decorative glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
