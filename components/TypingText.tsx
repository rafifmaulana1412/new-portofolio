"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  className = "",
  delay = 0,
  speed = 50,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      },
      delay + currentIndex * speed,
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 750);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        className="border-r-3 border-primary"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypingText;
