"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (soundType: "click" | "hover" | "success" | "whoosh") => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Default OFF, persist ke localStorage
  const [soundEnabled, setSoundEnabled] = useState(false);
  const soundsRef = useRef<Record<string, HTMLAudioElement>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Baca dari localStorage, kalau belum ada default false
    const saved = localStorage.getItem("soundEnabled");
    setSoundEnabled(saved === "true");

    const soundFiles: Record<string, string> = {
      click: "/sounds/click.mp3",
      hover: "/sounds/hover.mp3",
      success: "/sounds/success.mp3",
      whoosh: "/sounds/whoosh.mp3",
    };

    Object.entries(soundFiles).forEach(([key, src]) => {
      const audio = new Audio(src);
      audio.volume = 0.3;
      audio.preload = "auto";
      soundsRef.current[key] = audio;
    });

    setReady(true);
  }, []);

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("soundEnabled", String(next));
      return next;
    });
  };

  const playSound = (soundType: "click" | "hover" | "success" | "whoosh") => {
    if (!soundEnabled || !ready) return;
    const audio = soundsRef.current[soundType];
    if (!audio) return;
    // Reset dan play ulang agar bisa dipanggil berulang cepat
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore autoplay policy errors
    });
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
