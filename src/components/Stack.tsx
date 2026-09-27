'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { SKILLS } from '../config/skills';

export default function Stack() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.entries(SKILLS).filter(([key]) => 
    ['languages', 'frontend', 'backend', 'databases', 'tools'].includes(key)
  );

  return (
    <section
      id="stack"
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
          <span className="font-mono text-xs text-accent mb-4 block">TECHNICAL STACK</span>
          <h2 className="font-display text-text text-balance">
            Technologies I work with to build scalable systems.
          </h2>
        </motion.div>

        {/* Interactive Stack Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(([key, category], index) => (
            <SkillCategory
              key={key}
              category={category}
              index={index}
              isActive={activeCategory === key}
              onMouseEnter={() => setActiveCategory(key)}
              onMouseLeave={() => setActiveCategory(null)}
            />
          ))}
        </div>

        {/* System Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 lg:mt-32"
        >
          <div className="bg-surface border border-border rounded-lg p-8 lg:p-12">
            <h3 className="font-mono text-xs text-textMuted mb-6">SYSTEM ARCHITECTURE</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Backend Layer */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-surfaceLight border border-border rounded-lg p-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-textMuted">BACKEND</span>
                </div>
                <div className="space-y-2">
                  {SKILLS.backend.items.map((item) => (
                    <div key={item} className="font-mono text-sm text-text">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Data Layer */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-surfaceLight border border-border rounded-lg p-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-mono text-xs text-textMuted">DATA</span>
                </div>
                <div className="space-y-2">
                  {SKILLS.databases.items.map((item: string) => (
                    <div key={item} className="font-mono text-sm text-text">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Infrastructure Layer */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-surfaceLight border border-border rounded-lg p-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="font-mono text-xs text-textMuted">INFRASTRUCTURE</span>
                </div>
                <div className="space-y-2">
                  {SKILLS.tools.items.filter(item => ['Docker', 'AWS', 'CI/CD'].includes(item)).map((item: string) => (
                    <div key={item} className="font-mono text-sm text-text">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 pt-6 border-t border-border"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="font-mono text-xs text-textMuted">TOOLS</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {SKILLS.tools.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm px-4 py-2 bg-surface border border-border text-textDim hover:text-text hover:border-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SkillCategory({
  category,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  category: { title: string; items: string[] };
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative bg-surface border border-border rounded-lg p-8 transition-all duration-300 ${
        isActive ? 'border-accent' : 'hover:border-borderLight'
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        className="absolute inset-0 bg-accent/5 rounded-lg pointer-events-none"
      />

      <h3 className="font-mono text-xs text-accent mb-6">{category.title}</h3>
      
      <div className="space-y-3">
        {category.items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-textDim group-hover:bg-accent transition-colors"
              animate={{ scale: isActive ? 1.2 : 1 }}
            />
            <span className="font-mono text-sm text-text group-hover:text-textMuted transition-colors">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
