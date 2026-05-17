'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

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
              About <span className="bg-gradient-premium bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg md:text-xl"
            >
              Crafting digital experiences with modern technology
            </motion.p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.p
                variants={itemVariants}
                className="text-white/80 text-lg mb-6 leading-relaxed"
              >
                I&apos;m a passionate frontend developer and startup specialist dedicated to creating stunning, high-performance web applications that help businesses succeed in the digital world.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-white/80 text-lg mb-6 leading-relaxed"
              >
                With expertise in React, Next.js, and modern web technologies, I build responsive, SEO-friendly websites and applications that not only look amazing but also drive real business results.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <div>
                  <p className="text-white font-semibold mb-2">Core Expertise:</p>
                  <ul className="space-y-2 text-white/70">
                    <li>✓ Frontend Development (React, Next.js)</li>
                    <li>✓ Responsive Design & UI/UX</li>
                    <li>✓ Startup Website Development</li>
                    <li>✓ SaaS Landing Pages</li>
                    <li>✓ Performance Optimization</li>
                    <li>✓ Modern Animation & Interactions</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Stats Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Brief */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Why Work With Me?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/80">
              <div>
                <p className="font-semibold text-white mb-2">🎯 Results-Driven</p>
                <p>Focused on delivering solutions that generate real business value and user satisfaction.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">⚡ High Performance</p>
                <p>Building fast, optimized websites that rank well and provide excellent user experiences.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">🚀 Modern Tech Stack</p>
                <p>Using the latest technologies and best practices to create future-proof solutions.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
