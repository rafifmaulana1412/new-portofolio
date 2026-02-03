"use client";

import { motion } from "framer-motion";
import { useSoundContext } from "@/contexts/SoundContext";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { playSound } = useSoundContext();

  const experiences = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Tech Startup",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Developing end-to-end web applications using React, Node.js, and PostgreSQL. Leading frontend development and collaborating with backend teams to deliver scalable solutions.",
      achievements: [
        "Built responsive web applications serving 10k+ users",
        "Implemented real-time features using WebSocket technology",
        "Optimized application performance by 40%",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Jakarta, Indonesia",
      period: "2022 - 2023",
      description:
        "Focused on creating modern, responsive user interfaces using React and modern CSS frameworks. Collaborated with designers to implement pixel-perfect designs.",
      achievements: [
        "Delivered 15+ client projects on time",
        "Improved website loading speed by 50%",
        "Mentored junior developers",
      ],
      technologies: ["React", "Bootstrap", "SASS", "JavaScript"],
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "Local Software Company",
      location: "Bandung, Indonesia",
      period: "2021 - 2022",
      description:
        "Learned full-stack development fundamentals while working on various client projects. Gained experience in both frontend and backend technologies.",
      achievements: [
        "Completed 5+ web development projects",
        "Learned modern development workflows",
        "Contributed to team code reviews",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-4 glow-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in web development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-secondary"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-dark z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="w-full h-full bg-primary rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(0, 245, 255, 0.7)",
                        "0 0 0 10px rgba(0, 245, 255, 0)",
                        "0 0 0 0 rgba(0, 245, 255, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className={`game-card p-6 rounded-xl ml-20 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-8 md:text-right"
                      : "md:ml-8 md:text-left"
                  } md:w-5/12 cursor-pointer group`}
                  whileHover={{
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? -2 : 2,
                  }}
                  onHoverStart={() => playSound("hover")}
                >
                  {/* Company and role */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary mb-1 group-hover:glow-text transition-all">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-300 text-sm mb-2">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-accent text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-400 text-sm flex items-start space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover glow effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current status */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="game-card p-6 rounded-xl inline-block">
            <h3 className="text-xl font-bold text-primary mb-2">
              Currently Available
            </h3>
            <p className="text-gray-300">
              Open for new opportunities and exciting projects
            </p>
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full mx-auto mt-3"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
