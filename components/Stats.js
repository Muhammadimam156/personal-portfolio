'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [counts, setCounts] = useState({ projects: 0, clients: 0, technologies: 0, years: 0 });

  const stats = [
    { label: 'Projects Completed', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 10, suffix: '+' },
    { label: 'Technologies Used', value: 15, suffix: '+' },
    { label: 'Years Learning', value: 2, suffix: '+' },
  ];

  useEffect(() => {
    if (!inView) return;

    const intervals = {
      projects: null,
      clients: null,
      technologies: null,
      years: null,
    };

    const countUp = (key, target, duration = 2000) => {
      const start = 0;
      const steps = 60;
      const stepDuration = duration / steps;
      let step = 0;

      intervals[key] = setInterval(() => {
        step++;
        const progress = step / steps;
        const value = Math.floor(start + (target - start) * progress);
        setCounts((prev) => ({ ...prev, [key]: value }));

        if (step === steps) {
          clearInterval(intervals[key]);
          setCounts((prev) => ({ ...prev, [key]: target }));
        }
      }, stepDuration);
    };

    countUp('projects', 50);
    countUp('clients', 10);
    countUp('technologies', 15);
    countUp('years', 2);

    return () => {
      Object.values(intervals).forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [inView]);

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
      id="stats"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

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
              By The <span className="bg-gradient-premium bg-clip-text text-transparent">Numbers</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg md:text-xl"
            >
              Impact and achievements at a glance
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 text-center"
              >
                {/* Number */}
                <div className="mb-4">
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-premium bg-clip-text text-transparent">
                    {index === 0
                      ? counts.projects
                      : index === 1
                      ? counts.clients
                      : index === 2
                      ? counts.technologies
                      : counts.years}
                    {stat.suffix}
                  </p>
                </div>

                {/* Label */}
                <p className="text-white/70 font-semibold text-lg">{stat.label}</p>

                {/* Decorative Bar */}
                <div className="mt-4 h-1 bg-white/10 rounded-full">
                  <motion.div
                    className="h-full bg-gradient-premium rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement Message */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl text-center"
          >
            <p className="text-white/80 text-lg">
              These numbers represent real impact on real businesses. Every project delivered is an opportunity to create something extraordinary.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
