"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream-50/80 backdrop-blur-lg border-b border-cream-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-professional-accent to-professional-gold bg-clip-text text-transparent">
                AROSAL
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  className={`relative px-4 py-2 font-medium transition-colors duration-200 rounded-lg ${
                    isActive(link.href)
                      ? "text-professional-accent bg-cream-100"
                      : "text-professional-gray hover:text-professional-accent hover:bg-cream-50"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
            <Link href="/contact">
              <motion.button
                className="ml-4 px-6 py-2 bg-professional-accent text-white rounded-lg font-medium hover:bg-professional-gold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-professional-accent border-2 border-professional-accent/30 hover:bg-cream-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-50 border-t border-cream-200"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link, index) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 font-medium rounded-lg transition-colors ${
                      isActive(link.href)
                        ? "bg-professional-accent text-white"
                        : "text-professional-gray hover:bg-cream-50 hover:text-professional-accent"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
              <Link href="/contact">
                <motion.div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 bg-professional-accent text-white text-center rounded-lg font-medium mt-4 hover:bg-professional-gold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05 }}
                >
                  Get Started
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
