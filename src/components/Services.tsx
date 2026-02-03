"use client";

import { motion } from "framer-motion";
import { Bot, Code, Globe } from "lucide-react";
import Link from "next/link";
import SectionContainer from "./ui/SectionContainer";
import AnimatedSection from "./ui/AnimatedSection";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  subtitle: string;
  services: Service[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bot: Bot,
  code: Code,
  globe: Globe,
};

export default function Services({ title, subtitle, services }: ServicesProps) {
  return (
    <SectionContainer id="services" className="bg-background-primary relative overflow-hidden">
      <div className="relative z-10">
        <AnimatedSection className="text-center mb-16" direction="down">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 glassmorphism-light border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-medium mb-4"
          >
            What We Do
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            const serviceLinks: Record<string, string> = {
              '1': '/services/ai-bot-services',
              '2': '/services/in-house-system-dev',
              '3': '/services/web-solutions',
            };
            const serviceLink = serviceLinks[service.id] || '#services';
            
            return (
              <Link key={service.id} href={serviceLink}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  data-testid="service-card"
                  className="group cursor-pointer"
                >
                  <div className="h-full glassmorphism rounded-2xl p-8 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 relative overflow-hidden">
                  {/* Neon glow effect on hover */}
                  <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/5 transition-all duration-300 rounded-2xl" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-2xl shadow-lg shadow-neon-cyan/20" />
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 mb-6 glassmorphism-light rounded-2xl flex items-center justify-center border border-neon-cyan/30 group-hover:border-neon-cyan group-hover:shadow-lg group-hover:shadow-neon-cyan/30 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <IconComponent className="w-8 h-8 text-neon-cyan" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-neon-cyan transition-colors" data-testid="service-title">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary group-hover:text-white transition-colors leading-relaxed" data-testid="service-description">
                      {service.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </Link>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
