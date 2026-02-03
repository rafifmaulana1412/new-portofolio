"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Howl } from "howler";

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
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [sounds, setSounds] = useState<Record<string, Howl>>({});

  useEffect(() => {
    // Initialize sounds
    const soundFiles = {
      click: "/sounds/click.mp3",
      hover: "/sounds/hover.mp3",
      success: "/sounds/success.mp3",
      whoosh: "/sounds/whoosh.mp3",
    };

    const loadedSounds: Record<string, Howl> = {};

    Object.entries(soundFiles).forEach(([key, src]) => {
      loadedSounds[key] = new Howl({
        src: [src],
        volume: 0.3,
        preload: true,
      });
    });

    setSounds(loadedSounds);
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const playSound = (soundType: "click" | "hover" | "success" | "whoosh") => {
    if (soundEnabled && sounds[soundType]) {
      sounds[soundType].play();
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
