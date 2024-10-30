import React, { useState, useEffect } from 'react';

const TypingText = ({ text , typingSpeed = 150, pauseDuration = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (!isDeleting && index < text.length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } 
    // Deleting effect
    else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, typingSpeed);
    } 
    // When typing is complete, pause, then start deleting
    else if (index === text.length && !isDeleting) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } 
    // Reset to start typing again after deleting
    else if (index === 0 && isDeleting) {
      setIsDeleting(false);
      setTimeout(() => setIndex(0), pauseDuration);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, typingSpeed, pauseDuration]);

  return (
    <span className="text-gray-800 dark:text-white">
      {displayedText}
    </span>
  );
};

export default TypingText;
