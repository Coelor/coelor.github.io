// Core Portfolio Types
export interface PersonalInfo {
  name: string;
  title: string;
  level: string;
  role: string;
  avatar: string;
  bio: {
    short: string;
    origin: string;
    current: string;
  };
}

export interface CoreStat {
  label: string;
  value: number;
}

export interface Skill {
  name: string;
  level: number;
  experience: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  status: 'Completed' | 'In Progress' | 'Planning';
  techStack: string[];
  completionDate: string;
  rewards: string[];
  githubUrl: string;
  liveUrl?: string;
  images: ProjectImage[];
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

export interface ContactMethod {
  label: string;
  value: string;
  status: 'Online' | 'Active' | 'Available' | 'Offline';
  url?: string;
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
}

// Main Portfolio Data Interface
export interface PortfolioData {
  personal: PersonalInfo;
  coreStats: CoreStat[];
  skillCategories: SkillCategory[];
  timeline: TimelineEvent[];
  projects: Project[];
  blogPosts: BlogPost[];
  contactMethods: ContactMethod[];
  navigation: NavigationItem[];
}

// Component Props Interfaces
export interface HeroSectionProps {
  personal: PersonalInfo;
  coreStats: CoreStat[];
}

export interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export interface ProjectsSectionProps {
  projects: Project[];
}

export interface AboutSectionProps {
  personal: PersonalInfo;
  timeline: TimelineEvent[];
}

export interface BlogSectionProps {
  blogPosts: BlogPost[];
}

export interface ContactSectionProps {
  contactMethods: ContactMethod[];
}

export interface NavigationProps {
  navigation: NavigationItem[];
}