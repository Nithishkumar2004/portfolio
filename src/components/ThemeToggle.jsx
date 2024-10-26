// ThemeToggle.jsx
import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <label
      htmlFor="toggleSeven"
      className="flex items-center cursor-pointer select-none"
    >
      <div className="relative">
        <input
          type="checkbox"
          id="toggleSeven"
          className="peer sr-only"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="block h-8 w-14 rounded-full border border-[#BFCEFF] bg-gray-300 dark:bg-gray-800 dark:border-gray-600 transition-colors duration-300 ease-in-out peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
        <div className="absolute w-6 h-6 transition rounded-full dot bg-white peer-checked:bg-white peer-checked:shadow-neon left-1 top-1 peer-checked:translate-x-full"></div>
      </div>
    </label>
  );
};

export default ThemeToggle;
