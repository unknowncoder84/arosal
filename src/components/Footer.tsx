"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Dribbble, Mail, Phone, MessageCircle } from "lucide-react";

interface SocialLink {
  platform: "twitter" | "linkedin" | "github" | "dribbble";
  url: string;
}

interface FooterProps {
  companyName: string;
  socialLinks: SocialLink[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  dribbble: Dribbble,
};

export default function Footer({ companyName, socialLinks, contactInfo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = (number: string) => {
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(`https://wa.me/91${number}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-dark-primary border-t border-primary-500/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
              {companyName}
            </h3>
            <p className="text-gray-400 mb-6">Creating digital experiences that inspire and engage.</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-card rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-200"
                    aria-label={link.platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400" />
                <span className="text-gray-400">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <MessageCircle size={18} className="text-green-500" />
                <div className="flex gap-2">
                  <button onClick={() => handleWhatsApp("8693852452")} className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    WhatsApp 1
                  </button>
                  <span className="text-gray-600">|</span>
                  <button onClick={() => handleWhatsApp("8591545882")} className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    WhatsApp 2
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-500/10 mt-12 pt-8 text-center">
          <p className="text-gray-500">© {currentYear} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
