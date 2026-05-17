'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar } from 'react-icons/fi';
import { useState } from 'react';

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup Co',
      company: 'TechStartup Co',
      image: '👩‍💼',
      quote: 'The website he built transformed our business. Not only does it look amazing, but it also increased our leads by 150%. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, AI Solutions',
      company: 'AI Solutions',
      image: '👨‍💻',
      quote: 'Working with him was smooth and professional. He understood our vision perfectly and delivered beyond expectations. The performance is incredible!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Marketing Director, Digital Agency',
      company: 'Digital Agency',
      image: '👩‍🔬',
      quote: 'Outstanding work! Our SaaS landing page conversion rate improved dramatically. His attention to detail and design sense are unmatched.',
      rating: 5,
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Business Owner, E-Commerce Store',
      company: 'E-Commerce Store',
      image: '👨‍🏫',
      quote: 'Best decision we made was hiring him for our website redesign. The results speak for themselves. Professional, responsive, and talented!',
      rating: 5,
    },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

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
              What Clients <span className="bg-gradient-premium bg-clip-text text-transparent">Say</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg md:text-xl"
            >
              Real feedback from real clients
            </motion.p>
          </div>

          {/* Testimonials Slider */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            {/* Main Testimonial Card */}
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-8 md:p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
                &quot;{testimonials[activeIndex].quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-premium flex items-center justify-center text-2xl">
                  {testimonials[activeIndex].image}
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-white/60">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Dots */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-premium w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </motion.div>

          {/* Testimonials Grid for Mobile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mt-12 grid md:hidden gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-premium flex items-center justify-center text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-white/60 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
