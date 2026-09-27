'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EXPERIENCE } from '../config/experience';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="experience"
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
          <span className="font-mono text-xs text-accent mb-4 block">EXPERIENCE</span>
          <h2 className="font-display text-text text-balance">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden lg:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-full bg-accent origin-top"
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-16 lg:space-y-24 lg:ml-8">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: typeof EXPERIENCE[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-background border-2 border-accent hidden lg:block" />

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Period */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3 mb-4 lg:mb-0"
        >
          <span className="font-mono text-sm text-textDim">
            {experience.period}
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-9"
        >
          <div className="space-y-6">
            {/* Title & Company */}
            <div>
              <h3 className="font-title text-text mb-1">
                {experience.title}
              </h3>
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-accent hover:text-accentHover transition-colors"
                >
                  {experience.company}
                  <span className="text-textDim mx-2">•</span>
                  {experience.location}
                </a>
              ) : (
                <p className="font-mono text-sm text-accent">
                  {experience.company}
                  <span className="text-textDim mx-2">•</span>
                  {experience.location}
                </p>
              )}
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="font-mono text-xs text-textMuted mb-3">RESPONSIBILITIES</h4>
              <ul className="space-y-2">
                {experience.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="text-subtitle text-textMuted flex items-start"
                  >
                    <span className="text-accent mr-2 mt-1.5">▹</span>
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-xs text-textMuted mb-3">TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 border border-border text-textDim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-mono text-xs text-textMuted mb-3">KEY ACHIEVEMENTS</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="text-subtitle text-textMuted flex items-start"
                  >
                    <span className="text-green-500 mr-2 mt-1.5">✓</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
