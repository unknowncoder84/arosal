"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "./ui/SectionContainer";
import AnimatedSection from "./ui/AnimatedSection";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface PortfolioProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
}

export default function Portfolio({ title, subtitle, items }: PortfolioProps) {
  return (
    <SectionContainer id="portfolio" className="bg-dark-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-pattern opacity-30" />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10">
        <AnimatedSection className="text-center mb-12" direction="scale">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4"
          >
            Our Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isLeft ? -60 : 60, rotateY: isLeft ? -5 : 5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] card-glow"
              data-testid="portfolio-item"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid="portfolio-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-primary-500/0 group-hover:border-primary-500/50 rounded-xl transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary-400 text-sm font-medium uppercase tracking-wider" data-testid="portfolio-category">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold mt-1" data-testid="portfolio-title">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
