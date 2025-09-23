// Portfolio Data Types

export interface PersonalInfo {
  name: string;
  title: string;
  avatar: string;
  level: string;
  role: string;
}

export interface Stat {
  label: string;
  value: number;
}

export interface ContactMethod {
  label: string;
  value: string;
  status: string;
  url?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface AboutContent {
  originStory: {
    title: string;
    paragraphs: string[];
  };
  timeline: TimelineEvent[];
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

export interface Project {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  status: 'Completed' | 'In Progress' | 'Planning';
  techStack: string[];
  completionDate: string;
  rewards: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  url?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stat[];
  contact: {
    methods: ContactMethod[];
    responseMessage: string;
  };
  about: AboutContent;
  skills: SkillCategory[];
  projects: Project[];
  blog: BlogPost[];
}