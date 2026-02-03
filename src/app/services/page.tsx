'use client';

import { motion } from 'framer-motion';
import { Bot, Code, Globe, ArrowRight, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const services = [
    {
      icon: Bot,
      title: 'AI Bot Services',
      description: 'Intelligent chatbots and automated systems that enhance customer engagement and streamline operations with advanced AI technology.',
      features: [
        'Custom AI Chatbots',
        'Workflow Automation',
        '24/7 Customer Support',
        'Multi-platform Integration',
        'Natural Language Processing',
        'Machine Learning Models',
      ],
      benefits: [
        'Reduce response time by 90%',
        'Handle unlimited conversations',
        'Improve customer satisfaction',
        'Lower operational costs',
      ],
      link: '/services/ai-bot-services',
    },
    {
      icon: Code,
      title: 'In-house System Development',
      description: 'Custom internal systems and enterprise solutions tailored to your unique business requirements for maximum efficiency.',
      features: [
        'Custom ERP Systems',
        'Database Management',
        'API Development',
        'System Integration',
        'Cloud Solutions',
        'Legacy System Modernization',
      ],
      benefits: [
        'Streamlined workflows',
        'Enhanced data security',
        'Scalable architecture',
        'Reduced manual work',
      ],
      link: '/services/in-house-system-dev',
    },
    {
      icon: Globe,
      title: 'Web Solutions',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.',
      features: [
        'Responsive Websites',
        'E-commerce Platforms',
        'Progressive Web Apps',
        'CMS Integration',
        'SEO Optimization',
        'Performance Tuning',
      ],
      benefits: [
        'Mobile-first design',
        'Fast loading speeds',
        'Better search rankings',
        'Increased conversions',
      ],
      link: '/services/web-solutions',
    },
  ];

  const industries = [
    { name: 'Healthcare', projects: '15+' },
    { name: 'E-commerce', projects: '20+' },
    { name: 'Education', projects: '10+' },
    { name: 'Finance', projects: '8+' },
    { name: 'Real Estate', projects: '7+' },
    { name: 'Manufacturing', projects: '5+' },
  ];

  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    'TypeScript',
    'PostgreSQL & MongoDB',
    'AWS & Azure',
    'Docker & Kubernetes',
    'GraphQL & REST APIs',
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Free initial consultation to understand your needs and goals',
    },
    {
      number: '02',
      title: 'Proposal',
      description: 'Detailed project proposal with timeline and cost breakdown',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile development with regular updates and feedback',
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'Thorough testing, deployment, and training',
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
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border border-cream-200 mb-8">
              <Sparkles className="w-5 h-5 text-professional-accent" />
              <span className="text-sm font-semibold text-professional-gray">
                Comprehensive Digital Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-professional-dark mb-6">
              Our <span className="text-professional-accent">Services</span>
            </h1>
            <p className="text-xl text-professional-gray max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to transform your business 
              and drive sustainable growth in the digital age.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-professional-accent to-professional-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-professional-dark mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-professional-gray leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-professional-dark mb-3">Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-professional-gray">
                          <div className="w-1.5 h-1.5 rounded-full bg-professional-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-professional-dark mb-3">Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-professional-gray">
                          <CheckCircle className="w-4 h-4 text-professional-accent flex-shrink-0 mt-0.5" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={service.link}>
                    <Button className="w-full bg-professional-accent hover:bg-professional-gold text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Industries We Serve */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-professional-gray max-w-2xl mx-auto">
                Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-cream-200 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-2xl font-bold text-professional-accent mb-2">
                    {industry.projects}
                  </div>
                  <div className="text-sm text-professional-gray">
                    {industry.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-professional-gray max-w-2xl mx-auto">
                We leverage the latest and most reliable technologies to build robust solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-lg border border-cream-200 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-professional-dark font-semibold">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-4">
                How We Work
              </h2>
              <p className="text-lg text-professional-gray max-w-2xl mx-auto">
                Our streamlined process ensures efficient delivery and exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-cream-200"
                >
                  <div className="text-5xl font-bold text-professional-accent/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-professional-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-professional-gray text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-cream-200 mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-8 text-center">
              Why Choose Our Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-professional-accent" />
                </div>
                <h3 className="text-xl font-bold text-professional-dark mb-3">Fast Delivery</h3>
                <p className="text-professional-gray">
                  Agile methodology ensures quick turnaround without compromising quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-professional-accent" />
                </div>
                <h3 className="text-xl font-bold text-professional-dark mb-3">Secure & Reliable</h3>
                <p className="text-professional-gray">
                  Enterprise-grade security and reliability in every solution we build
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-professional-accent" />
                </div>
                <h3 className="text-xl font-bold text-professional-dark mb-3">Proven Track Record</h3>
                <p className="text-professional-gray">
                  60+ successful projects and 100+ satisfied clients speak for our quality
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-professional-accent to-professional-gold rounded-3xl p-12 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-white/90">
              Let&apos;s discuss how our services can help transform your business 
              and achieve your digital goals. Get a free consultation today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-professional-accent hover:bg-cream-50 px-8 py-4 text-lg font-semibold shadow-xl">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
