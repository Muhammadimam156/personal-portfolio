'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaFire,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiBootstrap,
  SiRedux,
} from 'react-icons/si';

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = [
    {
      name: 'React',
      icon: FaReact,
      color: 'text-cyan-400',
      level: 95,
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: 'text-white',
      level: 95,
    },
    {
      name: 'Node.js',
      icon: FaNode,
      color: 'text-green-500',
      level: 92,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: 'text-cyan-400',
      level: 90,
    },
    {
      name: 'JavaScript',
      icon: FaNode,
      color: 'text-yellow-400',
      level: 92,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: 'text-blue-500',
      level: 88,
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      color: 'text-gray-400',
      level: 90,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: 'text-green-600',
      level: 88,
    },
    {
      name: 'Mongoose',
      icon: SiMongodb,
      color: 'text-green-500',
      level: 87,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      color: 'text-blue-400',
      level: 85,
    },
    {
      name: 'Bootstrap',
      icon: SiBootstrap,
      color: 'text-purple-600',
      level: 88,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
      color: 'text-purple-400',
      level: 85,
    },
    {
      name: 'Redux',
      icon: SiRedux,
      color: 'text-purple-500',
      level: 82,
    },
    {
      name: 'HTML & CSS',
      icon: FaHtml5,
      color: 'text-orange-400',
      level: 95,
    },
    {
      name: 'Git & GitHub',
      icon: FaGitAlt,
      color: 'text-gray-400',
      level: 90,
    },
    {
      name: 'Responsive Design',
      icon: FaFire,
      color: 'text-red-400',
      level: 94,
    },
    {
      name: 'REST APIs',
      icon: FaDatabase,
      color: 'text-indigo-400',
      level: 92,
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
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate={inView ? 'visible' : 'visible'}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              My <span className="bg-gradient-premium bg-clip-text text-transparent">Skills</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-lg md:text-xl"
            >
              Technologies I work with daily
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="visible"
            animate={inView ? 'visible' : 'visible'}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon className={`w-8 h-8 ${skill.color}`} />
                  </div>

                  {/* Name */}
                  <h3 className="text-white font-semibold mb-3 text-lg">{skill.name}</h3>

                  {/* Progress Bar */}
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-premium"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.1 * index }}
                    />
                  </div>
                  <p className="text-white/60 text-sm mt-2">{skill.level}% Proficiency</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Skills Text */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-4">Additional Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6 text-white/80">
              <div>
                <p className="font-semibold text-white mb-3">Development</p>
                <div className="space-y-2">
                  <p>✓ Full-Stack Development</p>
                  <p>✓ SEO Optimization</p>
                  <p>✓ Performance Tuning</p>
                  <p>✓ API Integration</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">Design & Tools</p>
                <div className="space-y-2">
                  <p>✓ Figma to Code</p>
                  <p>✓ UI/UX Implementation</p>
                  <p>✓ Responsive Design</p>
                  <p>✓ Web Animations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
