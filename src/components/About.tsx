'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PERSONAL } from '../config/personal';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const interests = [
    'Backend Engineering',
    'Systems Architecture',
    'Data Engineering',
    'Cloud Infrastructure',
    'AI-Assisted Development',
    'Product Engineering',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-background"
    >
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24 lg:mb-32"
        >
          <span className="font-mono text-xs text-accent mb-4 block">ABOUT</span>
          <h2 className="font-display text-text text-balance">
            About
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mb-16"
          >
            <p className="font-subtitle text-textMuted text-balance leading-relaxed">
              {PERSONAL.bio} Based in Chennai, Tamil Nadu, I specialize in backend engineering with expertise in Java, Spring Boot, and building scalable software systems.
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="font-mono text-xs text-textMuted mb-4">INTERESTS</h3>
            <div className="space-y-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-sm text-text">
                    {interest}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <StatCard
              value={PERSONAL.stats.yearsExperience}
              label="YEARS EXPERIENCE"
              delay={0.1}
            />
            <StatCard
              value={PERSONAL.stats.projects}
              label="PROJECTS / REPOSITORIES"
              delay={0.2}
            />
            <StatCard
              value={PERSONAL.stats.primaryBackend}
              label="PRIMARY BACKEND"
              delay={0.3}
            />
            <StatCard
              value={PERSONAL.stats.location}
              label="BASED IN"
              delay={0.4}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-surface border border-border rounded-lg p-8 hover:border-accent transition-colors group"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="font-hero text-text mb-4 group-hover:text-accent transition-colors"
      >
        {value}
      </motion.div>
      <div className="font-mono text-xs text-textMuted">
        {label}
      </div>
    </motion.div>
  );
}
