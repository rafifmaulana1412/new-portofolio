"use client";

import { motion } from "framer-motion";
import { useSoundContext } from "@/contexts/SoundContext";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { playSound } = useSoundContext();

  // Newest first: Nahda Showroom (right) → Ruwang Arsip (left) → Course-Net (right)
  const experiences = [
    {
      id: 1,
      title: "Freelance Fullstack Web Developer",
      company: "Freelance",
      location: "Banten, Indonesia",
      period: "April 2026 - Present",
      description:
        "Developed a fullstack car showroom web application (Nahda Showroom) with complete admin dashboard, payment gateway integration, and modern responsive UI.",
      achievements: [
        "Built authentication system using NextAuth with role-based access control (admin & user)",
        "Implemented admin dashboard for managing car listings (CRUD operations)",
        "Integrated Cloudinary for image upload and storage",
        "Designed responsive and modern UI using Tailwind CSS",
        "Developed RESTful APIs for handling data operations",
        "Implemented dynamic catalog and detail pages with server-side rendering",
        "Integrated payment gateway for handling transactions",
        "Managed database schema and queries using Prisma ORM",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Prisma ORM",
        "PostgreSQL",
        "Supabase",
        "Tailwind CSS",
        "Cloudinary",
        "NextAuth",
        "REST API",
      ],
    },
    {
      id: 2,
      title: "Freelance Full-Stack Developer",
      company: "Freelance",
      location: "Banten, Indonesia",
      period: "2025 - Present",
      description:
        "Developed and integrated a web-based digital archive management system (Ruwang Arsip). ",
      achievements: [
        "Integrated frontend with backend services via REST API endpoints",
        "Implemented token-based authentication (JWT) and RBAC access control",
        "Managed master data: users, roles, divisions, document types, and storage locations",
        "Built modules for digital archive, incoming mail, disposition, and document history tracking",
        "Identified and fixed incorrect API endpoint configurations and environment variables",
        "Collaborated with team on backend deployment to dedicated server",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "REST API",
        "Postman",
        "JWT",
      ],
    },
    {
      id: 3,
      title: "Fullstack Developer Bootcamp Participant",
      company: "Course-Net",
      location: "Jakarta, Indonesia",
      period: "September 2024 - November 2024",
      description:
        "Completed an intensive full-stack web development bootcamp, focusing on building end-to-end web applications from frontend to backend and database integration.",
      achievements: [
        "Built and deployed multiple full-stack web applications",
        "Worked on real-world client-based projects",
        "Collaborated in team environments using Git and Agile workflows",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "Sequelize",
        "PostgreSQL",
        "Postman",
      ],
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
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary top-0"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isRight = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  className="relative grid grid-cols-1 md:grid-cols-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* LEFT SLOT */}
                  <div className="flex justify-end pr-8 md:pr-10">
                    {!isRight && (
                      <motion.div
                        className="game-card p-6 rounded-xl w-full max-w-md group cursor-pointer relative"
                        whileHover={{ scale: 1.02 }}
                        onHoverStart={() => playSound("hover")}
                      >
                        <CardContent exp={exp} index={index} />
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      </motion.div>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <motion.div
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-dark z-10"
                    style={{ top: "1.5rem" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(0, 245, 255, 0.7)",
                        "0 0 0 8px rgba(0, 245, 255, 0)",
                        "0 0 0 0 rgba(0, 245, 255, 0)",
                      ],
                    }}
                  />

                  {/* RIGHT SLOT */}
                  <div className="flex justify-start pl-8 md:pl-10">
                    {isRight && (
                      <motion.div
                        className="game-card p-6 rounded-xl w-full max-w-md group cursor-pointer relative"
                        whileHover={{ scale: 1.02 }}
                        onHoverStart={() => playSound("hover")}
                      >
                        <CardContent exp={exp} index={index} />
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Currently Available */}
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
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CardContent = ({
  exp,
  index,
}: {
  exp: {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
  };
  index: number;
}) => (
  <>
    <div className="mb-4">
      <h3 className="text-lg font-bold text-primary mb-2">{exp.title}</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-300 text-sm mb-1">
        <div className="flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <span>{exp.company}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <span>{exp.location}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-accent text-sm font-medium">
        <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{exp.period}</span>
      </div>
    </div>

    <p className="text-gray-300 text-sm leading-relaxed mb-4">
      {exp.description}
    </p>

    <div className="mb-4">
      <h4 className="text-white font-semibold text-sm mb-2">
        Key Achievements:
      </h4>
      <ul className="space-y-1.5">
        {exp.achievements.map((item, i) => (
          <motion.li
            key={i}
            className="text-gray-400 text-sm flex items-start gap-2"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + i * 0.04 }}
            viewport={{ once: true }}
          >
            <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>

    <div className="flex flex-wrap gap-1.5">
      {exp.technologies.map((tech, i) => (
        <motion.span
          key={tech}
          className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + i * 0.04 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </>
);

export default ExperienceSection;
