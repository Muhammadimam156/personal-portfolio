'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-dark-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center md:items-stretch">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center p-8 md:p-12"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Modern Web Developer &{' '}
              <span className="bg-gradient-premium bg-clip-text text-transparent">
                Startup Specialist
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed"
            >
              I craft stunning, high-performance websites for startups and businesses. Specializing in React, Next.js, and modern UI/UX design to create digital experiences that convert.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-premium rounded-lg text-white font-semibold flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                View Projects
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 text-center"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-8 md:gap-12"
            >
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">50+</p>
                <p className="text-white/60 text-sm md:text-base">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">10+</p>
                <p className="text-white/60 text-sm md:text-base">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">2+</p>
                <p className="text-white/60 text-sm md:text-base">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            variants={floatingVariants}
            initial="hidden"
            animate="visible"
            whileInView="animate"
            className="relative flex justify-center items-center mt-8 md:mt-0"
          >
            {/* Profile Image */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            >
              <Image
                src="/profile.png"
                alt="Profile"
                width={450}
                height={550}
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
