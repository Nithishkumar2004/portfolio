'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface ConsoleOutput {
  command: string;
  response: string;
}

export default function Console() {
  const [output, setOutput] = useState<ConsoleOutput[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands = {
    experience: 'View my professional experience and work history.',
    projects: 'Explore the projects I\'ve built and their technical details.',
    skills: 'See my technical stack and technologies I work with.',
    github: 'Visit my GitHub profile for repositories and contributions.',
    resume: 'Download my resume in PDF format.',
    contact: 'Get in touch with me via email or social media.',
    clear: 'Clear the console output.',
    help: 'Available commands: experience, projects, skills, github, resume, contact, clear, help',
  };

  useEffect(() => {
    // Auto-scroll to bottom when output changes
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    if (cmd === 'clear') {
      setOutput([]);
      setCurrentInput('');
      return;
    }

    const response = commands[cmd as keyof typeof commands] || 'Command not found. Type "help" for available commands.';
    
    setOutput(prev => [...prev, { command, response }]);
    setCurrentInput('');
  };

  const handleQuickCommand = (command: string) => {
    setCurrentInput(command);
    setTimeout(() => handleCommand(command), 300);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-surface border border-border rounded-lg overflow-hidden"
      >
        {/* Console Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-surfaceLight border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-xs text-textDim">terminal</span>
        </div>

        {/* Console Body */}
        <div className="p-6 font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto" ref={scrollRef}>
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-textMuted"
          >
            <p className="text-accent mb-2">$ explore nithish</p>
            <p className="mb-4">Welcome to my interactive console. Click a command below or type to explore:</p>
          </motion.div>

          {/* Output */}
          <AnimatePresence>
            {output.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4"
              >
                <p className="text-accent">$ {item.command}</p>
                <p className="text-textMuted mt-1">{item.response}</p>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input Line */}
          <div className="flex items-center mt-4">
            <span className="text-accent mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && currentInput.trim()) {
                  handleCommand(currentInput);
                }
              }}
              placeholder="Type a command..."
              className="flex-1 bg-transparent border-none outline-none text-text placeholder:text-textDim font-mono text-sm"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Quick Commands */}
        <div className="px-6 py-4 bg-surfaceLight border-t border-border">
          <p className="font-mono text-xs text-textDim mb-3">QUICK COMMANDS:</p>
          <div className="flex flex-wrap gap-2">
            {Object.keys(commands).filter(cmd => cmd !== 'clear' && cmd !== 'help').map((cmd) => (
              <motion.button
                key={cmd}
                onClick={() => handleQuickCommand(cmd)}
                className="px-3 py-1.5 bg-surface border border-border text-textDim hover:text-accent hover:border-accent font-mono text-xs transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cmd}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
