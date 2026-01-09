"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "fade" | "scale" | "rotate";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
  duration?: number;
}

const getVariants = (direction: AnimationDirection) => {
  const variants = {
    up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    rotate: { hidden: { opacity: 0, rotate: -10, scale: 0.9 }, visible: { opacity: 1, rotate: 0, scale: 1 } },
  };
  return variants[direction];
};

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  duration = 0.7 
}: AnimatedSectionProps) {
  const variants = getVariants(direction);
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: variants.hidden,
        visible: { 
          ...variants.visible, 
          transition: { 
            duration, 
            ease: [0.25, 0.1, 0.25, 1], 
            delay 
          } 
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
