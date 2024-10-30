import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const TypingText = ({ text, typingSpeed = 0.15, pauseDuration = 1, repetitions = 3 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: repetitions });

    // Typing effect
    timeline.to(textRef.current, {
      text: text,
      duration: text.length * typingSpeed,
      ease: 'none',
    });

    // Pause before deleting
    timeline.to(textRef.current, { duration: pauseDuration });

    // Deleting effect from the end
    const deleteTimeline = gsap.timeline({
      repeat: text.length - 1,
      onRepeat: () => {
        const currentText = textRef.current.textContent;
        textRef.current.textContent = currentText.slice(0, -1);
      },
    });

    deleteTimeline.to({}, { duration: typingSpeed });
    timeline.add(deleteTimeline);

    return () => {
      timeline.kill();
      deleteTimeline.kill(); // Cleanup delete timeline
    };
  }, [text, typingSpeed, pauseDuration, repetitions]);

  return (
    <div ref={textRef} className="typing-effect">
      {/* GSAP will handle the text content */}
    </div>
  );
};

export default TypingText;
