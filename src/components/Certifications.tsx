'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CERTIFICATIONS } from '../config/certifications';

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-background"
    >
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 lg:mb-32"
        >
          <span className="font-mono text-xs text-accent mb-4 block">CERTIFICATIONS</span>
          <h2 className="font-display text-text text-balance">
            Professional certifications and courses completed.
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="block bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors group"
            >
              <div className="space-y-4">
                <h3 className="font-mono text-sm text-text group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <div className="space-y-2">
                  <div className="font-mono text-xs text-textDim">
                    <span className="text-textMuted">ISSUED BY:</span> {cert.issuingOrg}
                  </div>
                  <div className="font-mono text-xs text-textDim">
                    <span className="text-textMuted">DATE:</span> {cert.date}
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-accent text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>VIEW CERTIFICATE</span>
                  <span>↗</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
