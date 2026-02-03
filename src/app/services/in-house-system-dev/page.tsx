'use client';

import { motion } from 'framer-motion';
import { Code, Database, Shield, Workflow, CheckCircle, ArrowRight, Layers, Lock } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function InHouseSystemDevPage() {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built specifically for your unique business processes and requirements.',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Robust database architecture and data handling systems for optimal performance and scalability.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Industry-leading security measures to protect your sensitive business data and operations.',
    },
  ];

  const benefits = [
    'Streamlined internal workflows',
    'Reduced operational costs',
    'Enhanced data security and compliance',
    'Scalable architecture for growth',
    'Seamless integration with existing tools',
    'Dedicated support and maintenance',
  ];

  const solutions = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and complex business processes to increase efficiency and reduce errors.',
    },
    {
      icon: Database,
      title: 'Data Management Systems',
      description: 'Centralized data platforms for better organization, access control, and business intelligence.',
    },
    {
      icon: Layers,
      title: 'ERP Solutions',
      description: 'Comprehensive enterprise resource planning systems tailored to your business operations.',
    },
    {
      icon: Lock,
      title: 'Access Control Systems',
      description: 'Secure authentication and authorization systems to manage user permissions and data access.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, identify pain points, and understand your business requirements.',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Create detailed system architecture and development roadmap aligned with your goals.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build robust solutions with rigorous testing to ensure reliability and performance.',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Smooth implementation with comprehensive training and ongoing technical support.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-cream-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,165,116,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-professional-light border border-professional-accent/20 mb-6">
              <Code className="w-5 h-5 text-professional-accent" />
              <span className="text-sm font-medium text-professional-gray">Enterprise Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-professional-dark mb-6">
              In-house System Development
            </h1>
            
            <p className="text-xl text-professional-gray mb-8 leading-relaxed">
              Custom internal systems and enterprise solutions designed to maximize efficiency, 
              enhance security, and scale with your business growth.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact">
                <Button className="bg-professional-accent hover:bg-professional-gold text-white px-8 py-6 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#solutions">
                <Button variant="outline" className="border-2 border-professional-accent text-professional-dark px-8 py-6 text-lg hover:bg-professional-light">
                  Explore Solutions
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
              Core Capabilities
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              Enterprise-grade development services tailored to your organization&apos;s needs
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

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-gradient-to-br from-professional-light to-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              Comprehensive system development services for modern enterprises
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-6 h-6 text-professional-accent" />
                </div>
                <h3 className="text-2xl font-bold text-professional-dark mb-3">
                  {solution.title}
                </h3>
                <p className="text-professional-gray leading-relaxed">
                  {solution.description}
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
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-cream-200">
                <div className="aspect-square bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 rounded-xl flex items-center justify-center">
                  <Code className="w-32 h-32 text-professional-accent" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-6">
                Why Build Custom Systems?
              </h2>
              <p className="text-lg text-professional-gray mb-8">
                Off-the-shelf solutions can&apos;t always meet your unique needs. Our custom development 
                ensures perfect alignment with your business processes.
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
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-professional-light to-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-cream-200"
              >
                <div className="text-5xl font-bold text-professional-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-professional-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-professional-gray text-sm leading-relaxed">
                  {item.description}
                </p>
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
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Transform your business operations with custom-built systems designed for success
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-professional-accent hover:bg-cream-50 px-8 py-6 text-lg font-semibold">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
