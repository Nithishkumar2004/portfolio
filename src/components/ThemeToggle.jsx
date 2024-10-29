import React, { useState, useEffect } from 'react';
import LightBulb from '../assets/LightBulb.png';
import LightBulb2 from '../assets/LightBulb2.png';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply theme class to document root with transition
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
      <button
        onClick={handleToggle}
        aria-label="Toggle theme"
      >
        <img src={isDark ? LightBulb : LightBulb2} alt="Toggle Icon"/>
      </button>
  );
};

export default ThemeToggle;
