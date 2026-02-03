'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'arosal1925@gmail.com',
      link: 'mailto:arosal1925@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8693852452',
      link: 'tel:+918693852452',
    },
    {
      icon: Phone,
      title: 'Alternative',
      value: '+91 8591545882',
      link: 'tel:+918591545882',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cream-50 to-cream-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-professional-dark mb-6">
              Get In <span className="text-professional-accent">Touch</span>
            </h1>
            <p className="text-xl text-professional-gray max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-cream-200"
            >
              <h2 className="text-3xl font-bold text-professional-dark mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-professional-dark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-cream-200 focus:border-professional-accent focus:outline-none transition-colors bg-white text-professional-dark"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-professional-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-cream-200 focus:border-professional-accent focus:outline-none transition-colors bg-white text-professional-dark"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-professional-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-cream-200 focus:border-professional-accent focus:outline-none transition-colors bg-white text-professional-dark"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-professional-dark mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-cream-200 focus:border-professional-accent focus:outline-none transition-colors bg-white text-professional-dark resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-professional-accent hover:bg-professional-gold text-white py-4 text-lg font-semibold"
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600 font-semibold"
                  >
                    Thank you! We&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-cream-200">
                <h2 className="text-3xl font-bold text-professional-dark mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-professional-accent to-professional-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-professional-gray mb-1">
                          {info.title}
                        </div>
                        <div className="text-lg font-semibold text-professional-dark group-hover:text-professional-accent transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-professional-accent to-professional-gold rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-cream-200 text-center"
              >
                <h3 className="text-2xl font-bold text-professional-dark mb-4">
                  Quick Response
                </h3>
                <p className="text-professional-gray mb-4">
                  We typically respond within 24 hours
                </p>
                <div className="text-4xl font-bold text-professional-accent">
                  24/7
                </div>
                <div className="text-sm text-professional-gray mt-2">
                  Support Available
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
