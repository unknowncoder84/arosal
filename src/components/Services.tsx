"use client";

import { motion } from "framer-motion";
import { 
  Palette, Code, Megaphone, LineChart, 
  Smartphone, Globe, Camera, PenTool,
  Cpu, Settings, MessageCircle, Bot
} from "lucide-react";
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
  palette: Palette,
  code: Code,
  megaphone: Megaphone,
  chart: LineChart,
  smartphone: Smartphone,
  globe: Globe,
  camera: Camera,
  pen: PenTool,
  cpu: Cpu,
  settings: Settings,
  "message-circle": MessageCircle,
  bot: Bot,
};

export default function Services({ title, subtitle, services }: ServicesProps) {
  return (
    <SectionContainer id="services" className="bg-dark-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-tech-pattern opacity-30" />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10">
        <AnimatedSection className="text-center mb-12" direction="down">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4"
          >
            What We Do
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                data-testid="service-card"
                className="group"
              >
                <div className="h-full bg-dark-card rounded-xl p-6 card-glow relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-14 h-14 mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <IconComponent className="w-7 h-7 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors" data-testid="service-title">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors" data-testid="service-description">
                      {service.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
