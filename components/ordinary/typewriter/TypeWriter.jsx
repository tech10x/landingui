'use client';

import { useEffect, useState } from 'react';
import typeWriterStyle from './TypeWriter.module.css';

const TypeWriter = ({ texts, typingSpeed = 100, pauseDuration = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseDuration);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, textIndex, texts, typingSpeed, pauseDuration]);

  return <span className={typeWriterStyle.typewriter}>{displayedText}</span>;
};

export default TypeWriter;

