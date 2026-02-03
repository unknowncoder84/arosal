"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, disabled, type = "button", onClick, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-neon-cyan/10 text-neon-cyan border-2 border-neon-cyan hover:bg-neon-cyan hover:text-background-primary hover:shadow-lg hover:shadow-neon-cyan/50",
      secondary: "glassmorphism text-white hover:bg-neon-cyan/10 border border-neon-cyan/30 hover:border-neon-cyan",
      outline: "border-2 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
