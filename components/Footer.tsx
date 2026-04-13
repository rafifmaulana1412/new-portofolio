"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";

const Footer = () => {
  const { playSound } = useSoundContext();

  const scrollToTop = () => {
    playSound("whoosh");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-dark-light border-t border-primary/20">
      <div className="container mx-auto px-6">
        {/* Scroll to top button */}
        <motion.button
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark hover:bg-accent transition-colors duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-cyber font-bold text-primary mb-2 glow-text">
              AHDAN.DEV
            </h3>
            <p className="text-gray-400 text-sm">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center space-x-6">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <motion.button
                  key={link}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    playSound("click");
                    document
                      .getElementById(link.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end space-x-1">
              <span>Made with</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ff006e", "#00f5ff", "#8338ec", "#ff006e"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              <span>by Ahdan</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © 2024 Muhammad Ahdan Rafif Maulana
            </p>
          </motion.div>
        </div>

        {/* Animated gradient line */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
            animate={{
              background: [
                "linear-gradient(90deg, #00f5ff, #8338ec, #ff006e)",
                "linear-gradient(90deg, #8338ec, #ff006e, #00f5ff)",
                "linear-gradient(90deg, #ff006e, #00f5ff, #8338ec)",
                "linear-gradient(90deg, #00f5ff, #8338ec, #ff006e)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Floating social icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 border border-primary/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
