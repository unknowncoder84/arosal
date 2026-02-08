"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

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
  dribbble: Github,
};

export default function Footer({ companyName, socialLinks, contactInfo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = (number: string) => {
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(`https://wa.me/91${number}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-professional-accent to-professional-gold bg-clip-text text-transparent">
              {companyName}
            </h3>
            <p className="text-professional-gray mb-6">
              Creating digital experiences that inspire and engage.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cream-100 rounded-full flex items-center justify-center text-professional-gray hover:text-white hover:bg-professional-accent transition-all duration-200"
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
            <h4 className="text-lg font-semibold mb-4 text-professional-dark">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.div
                      className="text-professional-gray hover:text-professional-accent transition-colors duration-200 flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-professional-accent rounded-full" />
                      {item.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-professional-dark">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-professional-accent" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-professional-gray hover:text-professional-accent transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-professional-accent" />
                <span className="text-professional-gray">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <MessageCircle size={18} className="text-green-500" />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleWhatsApp("8693852452")}
                    className="text-professional-gray hover:text-green-500 transition-colors text-sm"
                  >
                    WhatsApp 1
                  </button>
                  <span className="text-professional-gray">|</span>
                  <button
                    onClick={() => handleWhatsApp("8591545882")}
                    className="text-professional-gray hover:text-green-500 transition-colors text-sm"
                  >
                    WhatsApp 2
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-200 mt-12 pt-8 text-center">
          <p className="text-professional-gray">
            © {currentYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
