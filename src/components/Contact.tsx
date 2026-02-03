"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";
import SectionContainer from "./ui/SectionContainer";
import { Input, Textarea } from "./ui/Input";
import Button from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";
import { contactFormSchema, ContactFormData } from "@/lib/validation";

interface ContactProps {
  title: string;
  subtitle: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

export default function Contact({ title, subtitle, contactInfo }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleWhatsApp = (number: string) => {
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(`https://wa.me/91${number}?text=${message}`, "_blank");
  };

  return (
    <SectionContainer id="contact" className="bg-background-primary relative overflow-hidden">
      <div className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 glassmorphism-light border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-medium mb-4"
          >
            Contact Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left">
            <div className="glassmorphism rounded-2xl p-8 border border-neon-cyan/20">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input label="Name" placeholder="Your name" error={errors.name?.message} {...register("name")} />
                  <Input label="Email" type="email" placeholder="your@email.com" error={errors.email?.message} {...register("email")} />
                  <Input label="Subject" placeholder="How can we help?" error={errors.subject?.message} {...register("subject")} />
                  <Textarea label="Message" placeholder="Tell us about your project..." rows={5} error={errors.message?.message} {...register("message")} />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full bg-neon-cyan/10 text-neon-cyan border-2 border-neon-cyan hover:bg-neon-cyan hover:text-background-primary transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/50" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : (<>Send Message <Send className="ml-2 w-4 h-4" /></>)}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-text-secondary mb-8">Have a project in mind? We&apos;d love to hear from you.</p>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 glassmorphism rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all">
                  <div className="w-12 h-12 glassmorphism-light rounded-full flex items-center justify-center flex-shrink-0 border border-neon-cyan/30">
                    <Mail className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-text-secondary hover:text-neon-cyan transition-colors">{contactInfo.email}</a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 glassmorphism rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all">
                  <div className="w-12 h-12 glassmorphism-light rounded-full flex items-center justify-center flex-shrink-0 border border-neon-cyan/30">
                    <Phone className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-text-secondary">{contactInfo.phone}</p>
                  </div>
                </motion.div>

                <div className="pt-4">
                  <h4 className="font-semibold text-white mb-4">Quick Connect via WhatsApp</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsApp("8693852452")}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600/20 border border-green-500/50 hover:bg-green-600 text-green-400 hover:text-white rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/30"
                    >
                      <MessageCircle size={20} />
                      <span>+91 8693852452</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsApp("8591545882")}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600/20 border border-green-500/50 hover:bg-green-600 text-green-400 hover:text-white rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/30"
                    >
                      <MessageCircle size={20} />
                      <span>+91 8591545882</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </SectionContainer>
  );
}
