"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSoundContext } from "@/contexts/SoundContext";
import { ExternalLink, Github, X, Play } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { playSound } = useSoundContext();

  const projects = [
    {
      id: 1,
      title: "Restoran Montevia",
      description:
        "Modern restaurant management system with elegant UI and comprehensive features",
      longDescription:
        "A sophisticated restaurant management system built with modern web technologies. Features include online reservation system, menu management, order tracking, customer management, and admin dashboard. The system provides a seamless experience for both customers and restaurant staff with its intuitive interface and robust functionality.",
      image: "/images/restoran-montevia.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Bootstrap", "DBeaver"],
      github: "https://github.com/rafifmaulana1412/final-project-frontend",
      live: "https://final-project-frontend-tau-seven.vercel.app/",
      status: "Completed",
      difficulty: "Advanced",
    },
    {
      id: 2,
      title: "Wedding Invitation - Rizky & Rizka",
      description:
        "Elegant digital wedding invitation with interactive features and beautiful animations",
      longDescription:
        "A beautiful and interactive digital wedding invitation created for Rizky & Rizka's special day. Features include RSVP functionality, event details, photo gallery, love story timeline, and guest book. Built with modern web technologies to provide a memorable experience for wedding guests with smooth animations and responsive design.",
      image: "/images/wedding-invitation.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      github: "https://github.com/rafifmaulana1412/wedding-invitation",
      live: "https://wedding-invitation-psi-lac.vercel.app/",
      status: "Completed",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      title: "Yayasan Hidayatullah Gorontalo",
      description:
        "Comprehensive foundation website for charity and educational programs",
      longDescription:
        "A comprehensive website for Yayasan Hidayatullah Gorontalo foundation, focusing on charity work and educational programs for orphans and underprivileged children. Features include program information, donation system, volunteer registration, news updates, and administrative dashboard. Built with accessibility and user experience in mind to effectively communicate the foundation's mission.",
      image: "/images/yayasan-hidayatullah.png",
      technologies: ["React", "Tailwind CSS", "Javasrcipt"],
      github: "https://github.com/ahdan-rafif/yayasan-hidayatullah",
      live: "https://yayasan-hidayatullah-gorontaloutara.vercel.app/",
      status: "Completed",
      difficulty: "Advanced",
    },
    {
      id: 4,
      title: "Portal Iuran Internal Pendidikan Qur'ani",
      description:
        "Internal payment portal for Quranic education with comprehensive management system",
      longDescription:
        "An internal payment management portal specifically designed for Quranic education institutions. The system handles student fee payments, generates reports, manages student data, tracks payment history, and provides administrative tools for educational staff. Features include automated payment reminders, receipt generation, and comprehensive reporting dashboard.",
      image: "/images/portal-quran.png",
      technologies: ["React", "Tailwind CSS", "Javasrcipt"],
      github: "https://github.com/rafifmaulana1412/yayasan-almutaqin",
      live: "https://yayasan-almuttaqiin.vercel.app/",
      status: "Completed",
      difficulty: "Intermediate",
    },
    {
      id: 6,
      title: "Nahda Showroom",
      description:
        "Full-stack marketplace website for buying and selling used cars with payment gateway integration",
      longDescription:
        "Nahda Showroom is a full-stack used car marketplace built entirely with Next.js (frontend & backend). Users can browse car listings, view detailed specs, and complete purchases through an integrated payment gateway. The platform features user authentication, car listing management, transaction history, and an admin dashboard. Data is stored on PostgreSQL via Supabase for a scalable and reliable cloud database solution.",
      image: "/images/nahda-showroom.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Supabase",
        "Payment Gateway",
      ],
      github: "https://github.com/rafifmaulana1412/Nahda-Showroom",
      live: "https://nahda-showroom.vercel.app",
      status: "Completed",
      difficulty: "Advanced",
    },
    {
      id: 7,
      title: "Ruwang Arsip",
      description:
        "Digital archive management system for BPRS/BPR banking institutions",
      longDescription:
        "Ruwang Arsip is a digital archive management system specifically designed for BPRS (Bank Pembiayaan Rakyat Syariah) and BPR (Bank Perkreditan Rakyat) institutions. The frontend is built with Next.js while the backend runs on Express.js with Prisma ORM for database management. The backend is deployed on a dedicated server with its own IP, ensuring reliable and secure access for banking operations. Features include document upload, categorization, search, access control, and audit trail.",
      image: "/images/ruwang-arsip.png",
      technologies: [
        "Next.js",
        "Express.js",
        "Prisma",
        "TypeScript",
        "PostgreSQL",
      ],
      github: "https://github.com/ahdan-rafif/ruwang-arsip",
      live: "https://ruwang-arsip.vercel.app",
      status: "Completed",
      difficulty: "Advanced",
    },
  ];

  const openProject = (projectId: number) => {
    playSound("whoosh");
    setSelectedProject(projectId);
  };

  const closeProject = () => {
    playSound("click");
    setSelectedProject(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Advanced":
        return "text-red-400";
      default:
        return "text-primary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-400";
      case "In Progress":
        return "text-yellow-400";
      case "Planning":
        return "text-blue-400";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-4 glow-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Select a level to explore my projects - each one showcases different
            skills and technologies
          </p>
        </motion.div>

        {/* Projects Grid - Game Level Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="game-card p-6 rounded-xl cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                z: 50,
              }}
              onHoverStart={() => playSound("hover")}
              onClick={() => openProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>

                {/* Play button overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-primary">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                </motion.div>

                {/* Status badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)} bg-dark/80 backdrop-blur-sm`}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`text-sm font-semibold ${getDifficultyColor(project.difficulty)}`}
                  >
                    {project.difficulty}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0,245,255,0.05), rgba(131,56,236,0.05))",
                      "linear-gradient(45deg, rgba(131,56,236,0.05), rgba(255,0,110,0.05))",
                      "linear-gradient(45deg, rgba(255,0,110,0.05), rgba(0,245,255,0.05))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            >
              <motion.div
                className="bg-dark-light rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject,
                  );
                  if (!project) return null;

                  return (
                    <div className="p-8">
                      {/* Close button */}
                      <button
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-primary transition-colors"
                        onClick={closeProject}
                      >
                        <X className="w-6 h-6" />
                      </button>

                      {/* Project image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />

                      {/* Project details */}
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl font-bold text-primary">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm ${getStatusColor(project.status)}`}
                            >
                              {project.status}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(project.difficulty)}`}
                            >
                              {project.difficulty}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex space-x-4 pt-6">
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="game-button px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>

                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
