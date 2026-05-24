'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      id: 1,
      title: 'Apex AI Platform',
      description: 'An AI-powered modern web platform designed to deliver intelligent tools with a clean and interactive UI. Built with a focus on performance, responsiveness, and user-friendly experience.',
      tags: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Vercel"],
      image: '/ai saas landing page hero section.png',
      liveLink: 'https://apexaiplatform.vercel.app/',
      githubLink: 'https://github.com/Muhammadimam156/modern-ai-platform',
    },
    {
      id: 2,
      title: 'Medicare AI — Clinic Management SaaS',
      description: 'A production-ready healthcare platform engineered with the MERN stack, featuring multi-role access control for patients, doctors, and staff. It integrates the Google Gemini API to deliver AI-powered symptom analysis and automated, patient-friendly prescription explanations.',
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Gemini API", "Tailwind CSS", "JWT"],
      image: '/ai clinic docter roll dashboard.png',
      liveLink: 'https://medicare-ai-clinic-management-system.vercel.app/',
      githubLink: 'https://github.com/Muhammadimam156/Hekathon-frontend',
    },
    {
      id: 3,
      title: 'Founders Forge — AI Startup Pitch Generator',
      description: 'An AI-powered startup companion that helps entrepreneurs transform raw ideas into structured business concepts. It leverages advanced language models to generate unique startup names, catchy taglines, and comprehensive landing page content in both English and Roman Urdu, streamlining the early-stage ideation process.',
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Gemini API", "Tailwind CSS", "Framer Motion"],
      image: '/forge founder.png',
      liveLink: 'https://founders-forge.vercel.app/',
      githubLink: 'https://github.com/Muhammadimam156/studio',
    },
    
    {
      id: 4,
      title: 'Digital Agency Website',
      description: 'Full-featured agency website with portfolio showcase, case studies, and automated lead generation system.',
      tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      image: '📱',
      liveLink: '#',
      githubLink: '#',
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
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

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
              Featured <span className="bg-gradient-premium bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg md:text-xl"
            >
              Showcasing my latest work and expertise
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-64 md:h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden flex items-center justify-center">
                  {project.image.startsWith('/') ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={project.id === 1}
                    />
                  ) : (
                    <div className="text-6xl md:text-7xl">{project.image}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className="flex-1 px-4 py-2.5 bg-gradient-premium rounded-lg text-white font-semibold flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 gap-2"
                    >
                      Live Demo
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex-1 px-4 py-2.5 border border-white/20 rounded-lg text-white font-semibold flex items-center justify-center hover:bg-white/10 transition-all duration-300 gap-2"
                    >
                      Code
                      <FiGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/Muhammadimam156?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View All Projects →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
