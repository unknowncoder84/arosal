'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle, Zap, Shield, Award, Users, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security in every solution we build',
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '60+ successful projects and 100+ satisfied clients',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled developers and designers dedicated to your success',
    },
  ];

  const services = [
    {
      title: 'AI Bot Services',
      description: 'Intelligent chatbots and automation systems that enhance customer engagement',
      link: '/services/ai-bot-services',
    },
    {
      title: 'In-house System Development',
      description: 'Custom enterprise solutions tailored to your business needs',
      link: '/services/in-house-system-dev',
    },
    {
      title: 'Web Solutions',
      description: 'Modern, responsive websites and web applications',
      link: '/services/web-solutions',
    },
  ];

  const achievements = [
    { number: '60+', label: 'Projects Delivered', description: 'Successfully completed projects' },
    { number: '100+', label: 'Happy Clients', description: 'Satisfied customers worldwide' },
    { number: '5+', label: 'Years Experience', description: 'In the industry' },
    { number: '98%', label: 'Success Rate', description: 'Client satisfaction' },
  ];

  const whyChooseUs = [
    'Expert team with proven track record',
    'Cutting-edge technology stack',
    'Agile development methodology',
    'Transparent communication',
    '24/7 dedicated support',
    'Competitive pricing',
    'On-time delivery guarantee',
    'Post-launch maintenance',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cream-50 to-cream-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-professional-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-professional-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border border-cream-200 mb-8"
            >
              <Sparkles className="w-5 h-5 text-professional-accent" />
              <span className="text-sm font-semibold text-professional-gray">
                Welcome to AROSAL Software Solutions
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold text-professional-dark mb-6 leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-professional-accent to-professional-gold bg-clip-text text-transparent">
                Digital Vision
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-professional-gray mb-12 max-w-3xl mx-auto leading-relaxed">
              We craft exceptional digital solutions that drive growth, innovation, and success. 
              From AI automation to custom software development, we bring your ideas to life.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
            >
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-professional-accent mb-2">
                  60+
                </div>
                <div className="text-lg text-professional-gray">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-professional-accent mb-2">
                  100+
                </div>
                <div className="text-lg text-professional-gray">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-professional-accent mb-2">
                  5+
                </div>
                <div className="text-lg text-professional-gray">Years Experience</div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              <Link href="/about">
                <Button className="bg-professional-accent hover:bg-professional-gold text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl">
                  About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button className="bg-white hover:bg-cream-50 text-professional-dark px-8 py-6 text-lg shadow-xl hover:shadow-2xl border-2 border-cream-200">
                  Our Services
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button className="bg-white hover:bg-cream-50 text-professional-dark px-8 py-6 text-lg shadow-xl hover:shadow-2xl border-2 border-cream-200">
                  Portfolio
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white hover:bg-cream-50 text-professional-dark px-8 py-6 text-lg shadow-xl hover:shadow-2xl border-2 border-cream-200">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-professional-accent/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-professional-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Why Choose AROSAL?
            </h2>
            <p className="text-xl text-professional-gray max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream-50 rounded-2xl p-8 shadow-lg border border-cream-200 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-professional-accent to-professional-gold flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-professional-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-professional-gray">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-cream-50 to-cream-100">
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
            <p className="text-xl text-professional-gray max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 hover:shadow-2xl transition-all h-full cursor-pointer group">
                    <h3 className="text-2xl font-bold text-professional-dark mb-4 group-hover:text-professional-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-professional-gray mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-professional-accent font-semibold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button className="bg-professional-accent hover:bg-professional-gold text-white px-8 py-4 text-lg">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-professional-gray max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream-50 rounded-2xl p-8 shadow-lg border border-cream-200 text-center"
              >
                <div className="text-5xl font-bold text-professional-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-professional-dark mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-professional-gray">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-professional-gray max-w-3xl mx-auto">
              We go above and beyond to ensure your success
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-cream-200">
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-professional-accent flex-shrink-0 mt-1" />
                  <span className="text-professional-gray text-lg">{reason}</span>
                </motion.div>
              ))}
            </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let&apos;s transform your ideas into reality. Get in touch with us today 
              for a free consultation and discover how we can help your business grow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-professional-accent hover:bg-cream-50 px-8 py-4 text-lg font-semibold shadow-xl">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
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
