'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { PROJECTS } from '../config/projects';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="work"
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
          <span className="font-mono text-xs text-accent mb-4 block">WORK</span>
          <h2 className="font-display text-text text-balance">
            Selected Work
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24 lg:space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Project Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <span className="font-mono text-6xl lg:text-8xl text-textDim/20 font-light">
            {project.number}
          </span>
        </motion.div>

        {/* Project Info */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="font-mono text-xs text-accent block mb-2">
              {project.category}
            </span>
            <h3 className="font-title text-text mb-4 group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="font-subtitle text-textMuted text-balance">
              {project.description}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1 border border-border text-textDim"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Role & Impact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-2 pt-4 border-t border-border"
          >
            <div className="font-mono text-xs text-textDim">
              <span className="text-textMuted">ROLE:</span> {project.role}
            </div>
            <div className="font-mono text-xs text-textDim">
              <span className="text-textMuted">IMPACT:</span> {project.impact}
            </div>
          </motion.div>

          {/* CTAs */}
          <div className="flex items-center space-x-4">
            {project.caseStudy && (
              <motion.a
                href={project.caseStudy}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center font-mono text-sm text-accent hover:text-accentHover transition-colors"
                whileHover={{ x: 5 }}
              >
                VIEW CASE STUDY →
              </motion.a>
            )}
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center font-mono text-sm text-textMuted hover:text-accent transition-colors"
                whileHover={{ x: 5 }}
              >
                GITHUB ↗
              </motion.a>
            )}
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center font-mono text-sm text-textMuted hover:text-accent transition-colors"
                whileHover={{ x: 5 }}
              >
                LIVE DEMO ↗
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-6"
        >
          <div className="relative aspect-video bg-surface border border-border overflow-hidden">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Hover Overlay */}
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-accent/10 backdrop-blur-sm flex items-center justify-center"
              >
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: isHovered ? 1 : 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-mono text-sm text-accent"
                >
                  VIEW LIVE DEMO →
                </motion.span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
