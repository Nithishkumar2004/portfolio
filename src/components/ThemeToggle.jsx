import React, { useState, useEffect } from 'react';
import LightBulb from '../assets/LightBulb.png';
import DarkBulb from '../assets/DarkBulb.png';
import Color_photo from '../assets/Color_photo.png'
import Black_white_photo from '../assets/Black_white_photo.png'
const ThemeToggle = () => {
  // Retrieve the initial theme preference from localStorage or default to false
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('isDark');
    return savedTheme === 'true' || false; // Parse the string to a boolean
  });

  useEffect(() => {
    // Apply theme class to document root with transition
    document.documentElement.classList.toggle('dark', isDark);
    // Save the current theme preference in localStorage
    localStorage.setItem('isDark', isDark);
  }, [isDark]);

  const handleToggle = () => {
    setIsDark(prevIsDark => !prevIsDark); // Use functional update to toggle state
  };

  return (

<div className="relative inline-block">
    <img src={isDark ? Black_white_photo : Color_photo} alt="" className="w-auto h-auto object-cover" />

    <div className="absolute top-0 -right-[33%] m-2 w-15 h-15 flex items-center justify-center">
        <img
            onClick={handleToggle}
            aria-label="Toggle theme"
            src={isDark ? LightBulb : DarkBulb}
            alt="Toggle Icon"
            className="max-w-full max-h-full"
        />
    </div>
</div>

  );
};

export default ThemeToggle;