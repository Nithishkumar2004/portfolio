'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LOADING_MESSAGES = [
  'INITIALIZING NITHISH.K',
  'LOADING EXPERIENCE',
  'PREPARING PROJECTS',
  'INITIALIZING ENGINEERING STACK',
  'LOADING CASE STUDIES',
  'BUILDING INTERFACE',
  'OPTIMIZING EXPERIENCE',
  'ALMOST READY',
  'SYSTEM ONLINE'
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Change messages based on progress
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= LOADING_MESSAGES.length - 1) return prev;
        return prev + 1;
      });
    }, 400);

    // Complete loading after minimum time (to show loader) + actual load
    const minLoadTime = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
      clearTimeout(minLoadTime);
    };
  }, [onComplete]);

  const displayProgress = Math.min(Math.round(progress), 100);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="max-w-md w-full px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-mono text-2xl tracking-tight text-text mb-2">
            NITHISH.K
          </h1>
          <div className="font-mono text-xs text-textDim">
            SOFTWARE ENGINEER
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-1 bg-surfaceLight rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${displayProgress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="flex justify-between mt-2 font-mono text-xs text-textDim">
            <span>INITIALIZING SYSTEM</span>
            <span>{displayProgress}%</span>
          </div>
        </div>

        {/* Loading Message */}
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-sm text-accent text-center"
        >
          {LOADING_MESSAGES[messageIndex]}
        </motion.div>
      </div>
    </div>
  );
}
