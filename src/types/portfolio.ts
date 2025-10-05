// Core Portfolio Types
export interface PersonalInfo {
  name: string;
  title: string;
  bio: {
    short: string;
    origin: string;
    current: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  completionDate: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: ProjectImage[];
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface MediaContent {
  type: 'image' | 'video' | 'youtube';
  url: string;
  alt?: string;
  caption?: string;
  thumbnail?: string;
}

export interface SectionConfig {
  id: string;
  title: string;
  subtitle?: string;
  layout: 'hero' | 'media-left' | 'media-right' | 'centered' | 'columns' | 'slider';
  background?: {
    type: 'color' | 'gradient' | 'image';
    value: string;
    overlay?: string;
  };
  media?: MediaContent;
  content?: string;
  visible: boolean;
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

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  responsibilities: string;
  projects: Project[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  location?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface SkillTag {
  name: string;
  category?: string;
}

// Main Portfolio Data Interface
export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  skillTags: SkillTag[];
  contactMethods: ContactMethod[];
  navigation: NavigationItem[];
  resumeUrl?: string;
}

// Component Props Interfaces
export interface HeroSectionProps {
  personal: PersonalInfo;
}

export interface ProjectsSectionProps {
  projects: Project[];
}

export interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

export interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
}

export interface SkillsTickerProps {
  skills: SkillTag[];
}

export interface AboutSectionProps {
  personal: PersonalInfo;
}

export interface ContactSectionProps {
  contactMethods: ContactMethod[];
}

export interface NavigationProps {
  navigation: NavigationItem[];
}