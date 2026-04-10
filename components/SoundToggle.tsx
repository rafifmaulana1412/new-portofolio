"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";

const SoundToggle = () => {
  const { soundEnabled, toggleSound } = useSoundContext();

  return (
    <motion.button
      className={`hidden md:flex fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
        soundEnabled
          ? "bg-primary/20 border-primary text-primary"
          : "bg-dark-light/80 border-gray-600 text-gray-400 hover:border-gray-400"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleSound}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      title={
        soundEnabled
          ? "Sound ON — klik untuk matikan"
          : "Sound OFF — klik untuk aktifkan"
      }
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
