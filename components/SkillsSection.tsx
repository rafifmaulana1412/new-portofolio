"use client";

import { motion } from "framer-motion";
import { useSoundContext } from "@/contexts/SoundContext";
import { useState } from "react";

const SkillsSection = () => {
  const { playSound } = useSoundContext();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
        { name: "Bootstrap", level: 80, color: "#7952B3" },
        { name: "HTML/CSS", level: 95, color: "#E34F26" },
        { name: "JavaScript", level: 88, color: "#F7DF1E" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Sequelize", level: 80, color: "#52B0E7" },
        { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "Express.js", level: 82, color: "#000000" },
        { name: "REST APIs", level: 88, color: "#FF6B6B" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85, color: "#F05032" },
        { name: "DBeaver", level: 78, color: "#382923" },
        { name: "VS Code", level: 90, color: "#007ACC" },
        { name: "Vercel", level: 80, color: "#000000" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-4 glow-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="game-card p-8 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => {
                      setHoveredSkill(skill.name);
                      playSound("hover");
                    }}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    {/* Skill name and percentage */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-primary font-bold"
                        animate={
                          hoveredSkill === skill.name
                            ? { scale: 1.1 }
                            : { scale: 1 }
                        }
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Progress bar background */}
                    <div className="w-full h-3 bg-dark-lighter rounded-full overflow-hidden">
                      {/* Progress bar fill */}
                      <motion.div
                        className="h-full rounded-full relative"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, #00f5ff)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Hover tooltip */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark-light px-3 py-1 rounded-lg text-sm text-primary border border-primary/30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        {skill.level}% Proficiency
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/30"></div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Category icon */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 border border-primary/20 rounded-lg flex items-center justify-center"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <div className="w-4 h-4 bg-primary/30 rounded"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
