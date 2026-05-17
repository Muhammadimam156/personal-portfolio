'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
  FiGlobe,
} from 'react-icons/fi';

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      id: 1,
      title: 'Startup Websites',
      description: 'Custom-built websites for startups with modern design, SEO optimization, and conversion-focused layouts.',
      icon: FiGlobe,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'SaaS Landing Pages',
      description: 'High-converting landing pages for SaaS products with animated demos, pricing tables, and lead capture.',
      icon: FiTrendingUp,
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Business Websites',
      description: 'Professional business websites that establish credibility and attract qualified leads for your company.',
      icon: FiCode,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 4,
      title: 'Frontend Development',
      description: 'Full-featured frontend development using modern frameworks like React and Next.js with best practices.',
      icon: FiLayout,
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 5,
      title: 'Responsive Design',
      description: 'Mobile-first responsive design that looks perfect on all devices from smartphones to large displays.',
      icon: FiSmartphone,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 6,
      title: 'Modern UI/UX',
      description: 'Beautiful, modern user interfaces with smooth animations and premium glassmorphism design effects.',
      icon: FiZap,
      color: 'from-green-500 to-green-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Services I <span className="bg-gradient-premium bg-clip-text text-transparent">Offer</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg md:text-xl"
            >
              Comprehensive web development solutions tailored to your needs
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className="relative mb-6 inline-flex p-4 rounded-xl bg-white/5 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="relative text-white/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="relative mt-4 flex items-center text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-semibold">Learn more &rarr;</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 md:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-white/70 mb-6 text-lg">
              Let's discuss your project and how I can help bring your ideas to life.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-premium rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
