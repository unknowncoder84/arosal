'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function AIBotServicesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Intelligent Chatbots',
      description: 'AI-powered conversational interfaces that understand context and provide human-like interactions.',
    },
    {
      icon: Zap,
      title: 'Automation Solutions',
      description: 'Streamline repetitive tasks and workflows with intelligent automation that learns and adapts.',
    },
    {
      icon: TrendingUp,
      title: 'Customer Engagement',
      description: 'Enhance customer satisfaction with 24/7 support and instant, accurate responses.',
    },
  ];

  const benefits = [
    'Reduce response time by up to 90%',
    'Handle unlimited conversations simultaneously',
    'Integrate seamlessly with existing systems',
    'Continuous learning and improvement',
    'Multi-language support',
    'Advanced analytics and insights',
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide instant answers to common questions, troubleshoot issues, and escalate complex cases to human agents.',
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads, schedule appointments, and nurture prospects through personalized conversations.',
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and guide them through the purchase process.',
    },
    {
      title: 'Internal Operations',
      description: 'Automate HR queries, IT support, and internal knowledge management for your team.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-cream-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,165,116,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-professional-light border border-professional-accent/20 mb-6">
              <Bot className="w-5 h-5 text-professional-accent" />
              <span className="text-sm font-medium text-professional-gray">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-professional-dark mb-6">
              AI Bot Services
            </h1>
            
            <p className="text-xl text-professional-gray mb-8 leading-relaxed">
              Transform your customer interactions with intelligent chatbots and automated systems 
              that enhance engagement, streamline operations, and drive business growth.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact">
                <Button className="bg-professional-accent hover:bg-professional-gold text-white px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" className="border-2 border-professional-accent text-professional-dark px-8 py-6 text-lg hover:bg-professional-light">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              Our AI bot services combine cutting-edge technology with practical business solutions
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

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-professional-light to-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-6">
                Why Choose Our AI Bots?
              </h2>
              <p className="text-lg text-professional-gray mb-8">
                Our intelligent automation solutions deliver measurable results and transform 
                how you interact with customers and manage operations.
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
                  <Bot className="w-32 h-32 text-professional-accent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-professional-dark mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-professional-gray max-w-2xl mx-auto">
              See how our AI bot services can transform different aspects of your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200"
              >
                <h3 className="text-2xl font-bold text-professional-dark mb-3">
                  {useCase.title}
                </h3>
                <p className="text-professional-gray leading-relaxed">
                  {useCase.description}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our AI bot services can help you achieve your goals
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-professional-accent hover:bg-cream-50 px-8 py-6 text-lg font-semibold">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
