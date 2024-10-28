// ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Add smooth transition class to body when the component mounts
    document.body.classList.add('transition-colors', 'duration-500');

    // Check initial theme from local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark', newMode);
      // Store theme preference in local storage
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <label
      htmlFor="toggleTheme"
      className="flex items-center cursor-pointer select-none"
    >
      <div className="relative">
        <input
          type="checkbox"
          id="toggleTheme"
          className="peer sr-only"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="block h-8 w-14 rounded-full border border-[#BFCEFF] bg-gray-300 dark:bg-gray-800 dark:border-gray-600 transition-colors duration-300 ease-in-out peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
        <div className="absolute w-6 h-6 transition-transform transform rounded-full dot bg-white peer-checked:bg-white peer-checked:shadow-neon left-1 top-1 peer-checked:translate-x-full"></div>
      </div>
    </label>
  );
};

export default ThemeToggle;
