"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useSoundContext } from "@/contexts/SoundContext";
import { Code, Database, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);
  const { playSound } = useSoundContext();

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, Next.js, Tailwind CSS, Bootstrap",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Next.js API, Prisma, Sequelize",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Database",
      description: "PostgreSQL, DBeaver",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Modern Stack",
      description: "Full-stack Next.js, REST APIs, Vercel",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-4 glow-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-dark rounded-full overflow-hidden">
                <img
                  src="/images/foto-saya.jpeg"
                  alt="Muhammad Ahdan Rafif Maulana"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements around image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-primary/50 rounded-full"
                  style={{
                    left: `${20 + Math.cos((i * 60 * Math.PI) / 180) * 150}px`,
                    top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 150}px`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="game-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Full-Stack Web Developer
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                A Full-Stack Web Developer who builds end-to-end web
                applications, from user interfaces to backend systems and
                databases.
              </p>

              <motion.div
                className={`text-gray-300 leading-relaxed transition-all duration-500 overflow-hidden ${
                  showMore ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="mb-4">
                  Proficient in frontend development using React, Next.js,
                  Tailwind CSS, and Bootstrap, as well as building backend
                  systems with Node.js, Next.js API Routes, Prisma, Sequelize,
                  and PostgreSQL. With a strong understanding of HTML and CSS
                  structure and experience managing databases using DBeaver.
                </p>

                <p>
                  Focused on building functional, well-structured, and
                  production-ready web applications. Open to both professional
                  job opportunities and freelance projects.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-3 mt-6">
                <motion.button
                  className="game-button px-6 py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    playSound("click");
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? "Show Less" : "Read More"}
                </motion.button>

                <motion.a
                  href="/cv/M Ahdan Rafif CV.pdf"
                  download="M Ahdan Rafif CV.pdf"
                  className="px-6 py-3 rounded-lg font-semibold border-2 border-primary/50 text-primary/80 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => playSound("click")}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="game-card p-6 rounded-xl text-center group cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              onHoverStart={() => playSound("hover")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-primary mb-4 flex justify-center"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {feature.icon}
              </motion.div>

              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>

              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
