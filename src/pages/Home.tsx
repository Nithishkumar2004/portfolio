import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../config';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: PROFILE.github, bg: 'bg-gray-900 dark:bg-gray-700', hover: 'hover:bg-gray-800 dark:hover:bg-gray-600', text: 'text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: PROFILE.linkedin, bg: 'bg-blue-600', hover: 'hover:bg-blue-700', text: 'text-white' },
  { icon: Mail, label: 'Email', href: `mailto:${PROFILE.email}`, bg: 'bg-gray-200 dark:bg-gray-700', hover: 'hover:bg-gray-300 dark:hover:bg-gray-600', text: 'text-gray-900 dark:text-white' },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = PROFILE.subtitle + ' I build scalable software solutions and create meaningful digital experiences.';

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40); // 30ms per character
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] px-4 transition-transform duration-300"
      onMouseMove={handleMouseMove}
    >
      <div
        className="text-center space-y-6 max-w-3xl transform transition-transform duration-300"
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
        }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">
          {PROFILE.name}
        </h1>

        <p className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 font-medium">
          {PROFILE.role}
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-mono">
          {displayedText}
          <span className="inline-block w-1 h-6 bg-gray-900 dark:bg-white ml-1 animate-pulse"></span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 ${link.bg} ${link.text} rounded-lg ${link.hover} transition-transform transform hover:-translate-y-1 hover:scale-105`}
                style={{
                  transform: `translateX(${mousePos.x / 2}px) translateY(${-mousePos.y / 2}px)`
                }}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
