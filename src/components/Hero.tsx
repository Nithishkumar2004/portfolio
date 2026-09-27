'use client';

import { motion } from 'framer-motion';
import { PERSONAL } from '../config/personal';
import { SOCIAL } from '../config/social';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Static Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        {/* Name - H1 for SEO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-hero text-text mb-4"
        >
          Nithish Kumar
        </motion.h1>

        {/* Role - H2 for semantic structure */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-textMuted mb-8"
        >
          Software Engineer — Chennai, India
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-subtitle text-textMuted max-w-2xl mx-auto mb-12 text-balance"
        >
          &ldquo;{PERSONAL.tagline}&rdquo;
        </motion.p>

        {/* Current Position */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-mono text-sm text-textDim mb-12"
        >
          Software Engineer @ {PERSONAL.currentCompany}
          <br />
          {PERSONAL.location}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#work"
            className="px-8 py-4 bg-accent text-white font-mono text-sm tracking-wide hover:bg-accentHover transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW WORK
          </motion.a>

          <motion.a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-text font-mono text-sm tracking-wide hover:border-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GITHUB ↗
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-textDim rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
