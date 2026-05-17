'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-dark-bg text-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg -z-20" />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Stats />
        <Contact />
      </motion.div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
