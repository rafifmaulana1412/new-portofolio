"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";

const SoundToggle = () => {
  const { soundEnabled, toggleSound } = useSoundContext();

  return (
    <motion.button
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-dark-light/80 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleSound}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default SoundToggle;
