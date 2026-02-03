// Global types for the portfolio

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  status: "Completed" | "In Progress" | "Planning";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
