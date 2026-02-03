"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    setMounted(true);
    setLoadingText("Initializing Portfolio");

    const playWhooshOnce = () => {
      const whoosh = new Audio("/sounds/whoosh.mp3"); // ✅ path benar
      whoosh.volume = 0.4;
      whoosh.play().catch(() => {});
      window.removeEventListener("click", playWhooshOnce);
    };

    window.addEventListener("click", playWhooshOnce);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev.endsWith("...")) {
          return "Initializing Portfolio";
        }
        return prev + ".";
      });
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-dark flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity },
          }}
        >
          <div className="w-20 h-20 mx-auto border-4 border-primary rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-cyber text-primary mb-8 glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {loadingText}
        </motion.h2>

        <div className="w-80 h-2 bg-dark-light rounded-full overflow-hidden mx-auto mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="text-primary font-mono text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {progress}%
        </motion.p>

        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full loading-dot"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
