'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-dark-bg/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="#home" className="flex items-center space-x-2">
              <div className="w-20 h-10 bg-gradient-premium rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Imam</span>
              </div>
              <span className="hidden sm:block font-bold text-white text-lg">Developer</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 font-medium text-sm"
                >
                  {link.name}
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-premium rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto' } : { height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-4 space-y-4 border-t border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white/70 hover:text-white transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2.5 bg-gradient-premium rounded-lg text-white font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
