'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUp } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Muhammadimam156', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-imam-6206b6273/', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://facebook.com/profile.php?id=100051504234303', label: 'Facebook' },
  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-dark-bg border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="#home" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-premium rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-white text-lg">Developer</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Creating stunning web experiences for startups and businesses worldwide. Specializing in modern frontend development with React and Next.js.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-300 block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-500/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-sm"
          >
            © {currentYear} Frontend Developer. All rights reserved. | Built with Next.js & Tailwind CSS
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-white/10 hover:bg-blue-500/20 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            title="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
