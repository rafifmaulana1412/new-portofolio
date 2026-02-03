"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";

const SoundToggle = () => {
  const { soundEnabled, toggleSound } = useSoundContext();

  return (
    <motion.button
      className="fixed top-16 sm:top-6 right-6"
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
