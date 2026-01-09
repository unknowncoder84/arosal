"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const phoneNumbers = [
  { number: "918693852452", label: "Primary" },
  { number: "918591545882", label: "Secondary" },
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 mb-2 bg-[#0a1628] border border-cyan-500/30 rounded-xl shadow-2xl p-4 min-w-[200px]"
          >
            <p className="text-cyan-400 text-sm mb-3 font-medium">Chat with us on WhatsApp</p>
            <div className="space-y-2">
              {phoneNumbers.map((phone) => (
                <button
                  key={phone.number}
                  onClick={() => handleWhatsAppClick(phone.number)}
                  className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-lg text-white transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm font-medium">{phone.label}: +91 {phone.number.slice(2)}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: isOpen 
            ? "0 0 20px rgba(34, 197, 94, 0.5)" 
            : ["0 0 20px rgba(34, 197, 94, 0.3)", "0 0 30px rgba(34, 197, 94, 0.5)", "0 0 20px rgba(34, 197, 94, 0.3)"]
        }}
        transition={{ 
          boxShadow: { repeat: Infinity, duration: 2 }
        }}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </motion.button>
    </div>
  );
}
