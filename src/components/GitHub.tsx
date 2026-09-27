'use client';

import { motion } from 'framer-motion';
import { SOCIAL } from '../config/social';

export default function GitHub() {
  const repositories = [
    { name: 'portfolio', language: 'TypeScript', stars: 0, forks: 0 },
    { name: 'Cynate_movies', language: 'JavaScript', stars: 0, forks: 0 },
  ];

  return (
    <section className="relative py-32 lg:py-48 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24 lg:mb-32"
        >
          <span className="font-mono text-xs text-accent mb-4 block">GITHUB</span>
          <h2 className="font-display text-text text-balance">
            Open source contributions and repositories.
          </h2>
        </motion.div>

        {/* Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="font-mono text-xs text-textMuted mb-6">SELECTED REPOSITORIES</h3>
          
          {repositories.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={`${SOCIAL.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="block bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-mono text-sm text-text group-hover:text-accent transition-colors mb-2">
                    {repo.name}
                  </h4>
                  <div className="flex items-center space-x-4 text-xs text-textDim">
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span>{repo.language}</span>
                    </span>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-textDim group-hover:text-accent transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border border-border text-text font-mono text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>VIEW FULL PROFILE</span>
            <span>↗</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
