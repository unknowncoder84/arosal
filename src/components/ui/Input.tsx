"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-white mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-background-secondary/50 border rounded-lg transition-all duration-200 focus:outline-none text-white placeholder-text-muted ${
            error 
              ? "border-red-500/50 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20" 
              : "border-neon-cyan/20 hover:border-neon-cyan/40 focus:border-neon-cyan focus:shadow-lg focus:shadow-neon-cyan/20"
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-white mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 bg-background-secondary/50 border rounded-lg transition-all duration-200 focus:outline-none resize-none text-white placeholder-text-muted ${
            error 
              ? "border-red-500/50 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20" 
              : "border-neon-cyan/20 hover:border-neon-cyan/40 focus:border-neon-cyan focus:shadow-lg focus:shadow-neon-cyan/20"
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
