'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Lightbulb, Shield, Zap, Heart, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth and success in the modern world.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A passionate group of developers, designers, and innovators dedicated to excellence in every project.',
    },
    {
      icon: Award,
      title: 'Our Quality',
      description: 'We maintain the highest standards in code quality, design, and customer satisfaction.',
    },
    {
      icon: TrendingUp,
      title: 'Our Growth',
      description: 'Continuously evolving with the latest technologies to deliver cutting-edge solutions.',
    },
  ];

  const stats = [
    { value: '60+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our commitment to delivering on time and maintaining the highest quality standards has earned us the trust of over 100 clients.',
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'We optimize every process to ensure fast delivery without compromising on quality, helping businesses achieve their goals quickly.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with clients to understand their needs and deliver solutions that exceed expectations.',
    },
  ];

  const achievements = [
    { number: '60+', text: 'Successful Projects Delivered' },
    { number: '100+', text: 'Satisfied Clients Worldwide' },
    { number: '98%', text: 'Client Satisfaction Rate' },
    { number: '5+', text: 'Years of Industry Experience' },
    { number: '15+', text: 'Industry Awards & Recognition' },
    { number: '24/7', text: 'Dedicated Support Team' },
  ];

  const whyChooseUs = [
    'Expert team with 5+ years of experience',
    'Proven track record with 60+ successful projects',
    'Cutting-edge technology stack',
    'Agile development methodology',
    'Transparent communication throughout',
    'Post-launch support and maintenance',
    'Competitive pricing without compromising quality',
    'On-time delivery guarantee',
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and challenges through detailed consultations.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Our team develops a comprehensive strategy tailored to your specific needs and objectives.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'We create intuitive, user-friendly designs that align with your brand and engage your audience.',
    },
    {
      step: '04',
      title: 'Development',
      description: 'Our developers build robust, scalable solutions using the latest technologies and best practices.',
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance ensures your solution works flawlessly across all platforms.',
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We handle deployment and provide training to ensure a smooth transition.',
    },
    {
      step: '07',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your solution running optimally.',
    },
  ];

  const teamMembers = [
    {
      name: 'Rishi Sawant',
      role: 'Senior Developer & Multi-Tasker',
      description: 'Expert in full-stack development and project management',
    },
    {
      name: 'Ayush Singh',
      role: 'Senior Developer & Multi-Tasker',
      description: 'Specialized in modern web technologies and system architecture',
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
              About <span className="text-professional-accent">AROSAL</span>
            </h1>
            <p className="text-xl text-professional-gray max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate developers and innovators dedicated to creating 
              exceptional digital solutions that transform businesses and drive success.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-professional-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-professional-gray">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-cream-200 mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-professional-gray leading-relaxed max-w-4xl mx-auto">
              <p>
                Founded in 2019, AROSAL Software Solutions began with a simple yet powerful vision: 
                to bridge the gap between cutting-edge technology and real-world business needs. 
                What started as a small team of passionate developers has grown into a trusted 
                partner for businesses seeking digital transformation.
              </p>
              <p>
                Over the past 5+ years, we've had the privilege of working with over 100 clients 
                across various industries, delivering 60+ successful projects that have helped 
                businesses streamline operations, engage customers, and achieve sustainable growth.
              </p>
              <p>
                Our journey has been marked by continuous learning, adaptation, and innovation. 
                We've evolved from a web development agency to a comprehensive digital solutions 
                provider, offering AI automation, custom software development, and enterprise 
                solutions that address the complex challenges of modern businesses.
              </p>
              <p>
                Today, AROSAL stands as a testament to what dedication, expertise, and client-focused 
                service can achieve. Every project we undertake is an opportunity to push boundaries, 
                solve problems creatively, and deliver value that goes beyond expectations.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-professional-accent to-professional-gold flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-professional-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-professional-gray leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-12 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-cream-200 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-professional-accent/10 to-professional-gold/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-professional-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-professional-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-professional-gray leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-12 text-center">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-cream-200 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-professional-accent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-professional-gray">
                    {achievement.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-12 text-center">
              Why Choose AROSAL?
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-cream-200">
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

          {/* Our Process */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-12 text-center">
              Our Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.slice(0, 4).map((item, index) => (
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
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {process.slice(4).map((item, index) => (
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

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-professional-dark mb-12 text-center">
              Team of Experts
            </h2>
            <p className="text-xl text-professional-gray text-center mb-12 max-w-3xl mx-auto">
              Our dedicated team of senior developers brings years of experience and expertise to every project
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-cream-200 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-professional-accent to-professional-gold mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-professional-dark mb-2">
                    {member.name}
                  </h3>
                  <div className="text-professional-accent font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-professional-gray">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-professional-accent to-professional-gold rounded-3xl p-12 md:p-16 text-center text-white"
          >
            <Star className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-white/90">
              Join over 100 satisfied clients who have transformed their businesses with AROSAL. 
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-professional-accent hover:bg-cream-50 px-8 py-4 text-lg font-semibold shadow-xl">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
