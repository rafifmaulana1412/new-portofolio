"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSoundContext } from "@/contexts/SoundContext";
import { X, Menu, Volume2, VolumeX } from "lucide-react";

// Sound toggle kecil khusus untuk navbar mobile
const SoundToggleInline = () => {
  const { soundEnabled, toggleSound } = useSoundContext();
  return (
    <motion.button
      className={`p-2 rounded-full border transition-all duration-300 ${
        soundEnabled
          ? "border-primary text-primary bg-primary/10"
          : "border-gray-600 text-gray-400"
      }`}
      whileTap={{ scale: 0.9 }}
      onClick={toggleSound}
    >
      {soundEnabled ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
    </motion.button>
  );
};

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { playSound } = useSoundContext();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    playSound("click");
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-dark/80 backdrop-blur-md border-b border-primary/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="text-2xl font-cyber font-bold text-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("home")}
            >
              <span className="glow-text">AHDAN.DEV</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-gray-300 hover:text-primary"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                  onHoverStart={() => playSound("hover")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile: Sound toggle + hamburger dalam satu baris */}
            <div className="flex md:hidden items-center gap-1">
              {/* Sound toggle mini */}
              <SoundToggleInline />
              <motion.button
                className="p-2 text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  playSound("click");
                  setMobileOpen(!mobileOpen);
                }}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-dark-light border-l border-primary/20 z-40 md:hidden flex flex-col pt-20 pb-8 px-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Brand */}
              <p className="text-xs font-mono text-primary/50 uppercase tracking-widest mb-6">
                Navigation
              </p>

              {/* Nav items */}
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10 border border-primary/30"
                        : "text-gray-300 hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto">
                <motion.a
                  href="/cv/M Ahdan Rafif CV.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg game-button text-sm font-semibold"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setMobileOpen(false)}
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
