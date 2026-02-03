'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Palette, Zap } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Selectz.in',
      category: 'Job Portal Platform',
      description: 'A comprehensive job portal connecting employers with talented professionals. Features include advanced search, application tracking, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      tags: ['Web Development', 'React', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Katneswarkar',
      category: 'Law Management System',
      description: 'Complete case management system for law firms with document management, client portal, and billing integration.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
      tags: ['Custom Software', 'Enterprise', 'Cloud'],
      link: '#',
    },
    {
      title: 'Pixcelcut.studio',
      category: 'Creative Studio Website',
      description: 'Modern portfolio website for a creative studio showcasing their work with stunning visuals and smooth animations.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Web Design', 'Next.js', 'Animation'],
      link: '#',
    },
    {
      title: 'E-commerce Platform',
      category: 'Online Store',
      description: 'Full-featured e-commerce solution with payment integration, inventory management, and customer analytics.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Payment Gateway', 'Analytics'],
      link: '#',
    },
    {
      title: 'Healthcare Dashboard',
      category: 'Medical Management',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Dashboard', 'Real-time'],
      link: '#',
    },
    {
      title: 'Restaurant POS System',
      category: 'Point of Sale',
      description: 'Complete restaurant management system with order tracking, inventory, and kitchen display integration.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      tags: ['POS', 'Restaurant', 'Mobile'],
      link: '#',
    },
  ];

  const capabilities = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Stunning user interfaces that engage and convert visitors',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and seamless user experience',
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
              Our <span className="text-professional-accent">Portfolio</span>
            </h1>
            <p className="text-xl text-professional-gray max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful projects that showcase our expertise 
              in delivering exceptional digital solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 text-center">
              <div className="text-5xl font-bold text-professional-accent mb-2">60+</div>
              <div className="text-professional-gray">Projects Completed</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 text-center">
              <div className="text-5xl font-bold text-professional-accent mb-2">100+</div>
              <div className="text-professional-gray">Happy Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 text-center col-span-2 md:col-span-1">
              <div className="text-5xl font-bold text-professional-accent mb-2">98%</div>
              <div className="text-professional-gray">Satisfaction Rate</div>
            </div>
          </motion.div>

          {/* Capabilities */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-cream-200 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-6 h-6 text-professional-accent" />
                </div>
                <h3 className="text-lg font-bold text-professional-dark mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-professional-gray">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-cream-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-professional-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button className="bg-white text-professional-dark hover:bg-cream-50">
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-professional-accent font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-professional-dark mb-3">
                    {project.title}
                  </h3>
                  <p className="text-professional-gray mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cream-100 text-professional-gray text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-professional-accent to-professional-gold rounded-3xl p-12 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Your Next Project
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-white/90">
              Ready to bring your vision to life? Let's create something amazing together.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-professional-accent hover:bg-cream-50 px-8 py-4 text-lg font-semibold">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
