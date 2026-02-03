'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Rocket, Palette, CheckCircle, ArrowRight, Zap, Users } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function WebSolutionsPage() {
  const features = [
    {
      icon: Globe,
      title: 'Modern Web Development',
      description: 'Cutting-edge websites built with the latest technologies for optimal performance and user experience.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Seamless experiences across all devices - desktop, tablet, and mobile with pixel-perfect precision.',
    },
    {
      icon: Rocket,
      title: 'Performance Optimized',
      description: 'Lightning-fast load times and smooth interactions that keep users engaged and boost conversions.',
    },
  ];

  const benefits = [
    'SEO-optimized for better visibility',
    'Mobile-first responsive design',
    'Fast loading speeds (< 2 seconds)',
    'Secure and scalable architecture',
    'Easy content management',
    'Analytics and tracking integration',
  ];

  const services = [
    {
      icon: Palette,
      title: 'Custom Website Design',
      description: 'Unique, brand-focused designs that capture attention and convert visitors into customers.',
    },
    {
      icon: Zap,
      title: 'Web Applications',
      description: 'Interactive web apps with complex functionality, real-time features, and seamless user experiences.',
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payments, inventory management, and customer analytics.',
    },
    {
      icon: Users,
      title: 'Progressive Web Apps',
      description: 'App-like experiences that work offline, send push notifications, and install on home screens.',
    },
  ];

  const technologies = [
    { name: 'React & Next.js', category: 'Frontend' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'PostgreSQL & MongoDB', category: 'Database' },
    { name: 'AWS & Vercel', category: 'Hosting' },
  ];

  const portfolio = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with 10,000+ products and real-time inventory',
      metrics: '300% increase in sales',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Complex data visualization and analytics platform for enterprise clients',
      metrics: '50,000+ active users',
    },
    {
      title: 'Corporate Website',
      description: 'Modern, professional website with CMS integration and multilingual support',
      metrics: '85% faster load time',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-cream-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,165,116,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-professional-light border border-professional-accent/20 mb-6">
              <Globe className="w-5 h-5 text-professional-accent" />
              <span className="text-sm font-medium text-professional-gray">Digital Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-professional-dark mb-6">
              Web Solutions
            </h1>
            
            <p className="text-xl text-professional-gray mb-8 leading-relaxed">
              Modern, responsive websites and web applications that deliver exceptional user experiences, 
              drive engagement, and help your business thrive in the digital world.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact">
                <Button className="bg-professional-accent hover:bg-professional-gold text-white px-8 py-6 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" className="border-2 border-professional-accent text-professional-dark px-8 py-6 text-lg hover:bg-professional-light">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              What We Deliver
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              Professional web solutions built with modern technologies and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-professional-accent to-professional-gold flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-professional-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-professional-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-professional-light to-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Our Services
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              Comprehensive web development services for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-professional-accent" />
                </div>
                <h3 className="text-2xl font-bold text-professional-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-professional-gray leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-6">
                Why Choose Our Web Solutions?
              </h2>
              <p className="text-lg text-professional-gray mb-8">
                We combine technical expertise with creative design to build websites that not only 
                look great but also perform exceptionally and drive real business results.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-professional-accent flex-shrink-0 mt-1" />
                    <span className="text-professional-gray text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-cream-200">
                <div className="aspect-square bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-32 h-32 text-professional-accent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-professional-light to-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              Modern tech stack for building fast, scalable, and maintainable web solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-cream-200 text-center"
              >
                <div className="text-sm text-professional-accent font-semibold mb-2">
                  {tech.category}
                </div>
                <div className="text-lg font-bold text-professional-dark">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              Real results from our web development projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-cream-200"
              >
                <h3 className="text-2xl font-bold text-professional-dark mb-3">
                  {project.title}
                </h3>
                <p className="text-professional-gray mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-cream-200">
                  <div className="text-professional-accent font-bold text-lg">
                    {project.metrics}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-professional-accent to-professional-gold">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Web Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s create a stunning website that drives results for your business
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-professional-accent hover:bg-cream-50 px-8 py-6 text-lg font-semibold">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
