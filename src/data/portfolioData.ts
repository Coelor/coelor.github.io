import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Gary Brenden',
    title: 'Junior Software Engineer',
    level: 'Level 99 Developer', // Remove later 
    role: 'Full Stack Wizard',
    avatar: '',
    bio: {
      short: 'bio short',
      origin: '',
      current: 'bio',
    },
  },

  coreStats: [
    { label: 'Backend', value: 85 },
    { label: '', value: 0 },
  ],

  skillCategories: [
    // {
    //   title: 'Frontend Arsenal',
    //   skills: [
    //     { name: 'React/Next.js', level: 95, experience: '5+ years' },
    //     { name: 'TypeScript', level: 90, experience: '4+ years' },
    //     { name: 'Vue.js', level: 85, experience: '3+ years' },
    //     { name: 'CSS/SCSS', level: 90, experience: '6+ years' },
    //   ],
    // },
    {
      title: 'Backend Mastery',
      skills: [
        { name: 'MongoDB', level: 75, experience: '2+ years' },
      ],
    },
    // {
    //   title: 'DevOps & Tools',
    //   skills: [
    //     { name: 'Docker', level: 80, experience: '3+ years' },
    //     { name: 'AWS', level: 75, experience: '2+ years' },
    //     { name: 'Git', level: 95, experience: '6+ years' },
    //     { name: 'CI/CD', level: 70, experience: '2+ years' },
    //   ],
    // },
  ],

  timeline: [
    // {
    //   year: '2018',
    //   title: 'The Beginning',
    //   description: 'Started the coding journey with HTML, CSS, and JavaScript. First steps into the digital realm.',
    // },
  ],

  projects: [
    // {
    //   id: 'ecommerce-platform',
    //   title: 'E-Commerce Platform Quest',
    //   description: 'Built a full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    //   longDescription: 'A comprehensive e-commerce solution featuring modern UI/UX design, secure payment processing with Stripe integration, real-time inventory management, advanced search and filtering capabilities, responsive design for all devices, and a powerful admin dashboard for managing products, orders, and analytics.',
    //   difficulty: 'Expert',
    //   status: 'Completed',
    //   techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    //   completionDate: '2024',
    //   rewards: ['Full Stack Mastery', 'Payment Integration', 'Cloud Deployment'],
    //   githubUrl: 'https://github.com/johndoe/ecommerce-platform',
    //   liveUrl: 'https://ecommerce-demo.johndoe.dev',
    //   images: [
    //     {
    //       url: 'https://images.unsplash.com/photo-1642052503083-bc49dd433478?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwZWNvbW1lcmNlfGVufDB8MHx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
    //       alt: 'E-commerce platform dashboard - PiggyBank on Unsplash',
    //       caption: 'Admin Dashboard Overview',
    //     },
    //     {
    //       url: 'https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwZWNvbW1lcmNlfGVufDB8MHx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
    //       alt: 'E-commerce website interface - Team Nocoloco on Unsplash',
    //       caption: 'Product Catalog Interface',
    //     },
    //     {
    //       url: 'https://images.unsplash.com/photo-1642054220942-d3c7dd1466cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwZWNvbW1lcmNlfGVufDB8MHx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
    //       alt: 'E-commerce checkout process - PiggyBank on Unsplash',
    //       caption: 'Checkout & Payment Flow',
    //     },
    //   ],
    // },
    
  ],

  blogPosts: [
    // {
    //   id: 'scalable-react-2024',
    //   title: 'Mission Log: Building Scalable React Applications',
    //   date: '2024-01-15',
    //   category: 'Frontend',
    //   excerpt: 'Discovered advanced patterns for building scalable React applications. Explored component composition, custom hooks, and state management strategies that have proven effective in large-scale projects.',
    //   readTime: '8 min read',
    //   tags: ['React', 'Architecture', 'Best Practices'],
    //   slug: 'building-scalable-react-applications',
    //   featured: true,
    // },
    // {
    //   id: 'typescript-mastery-2024',
    //   title: 'Quest Report: Mastering TypeScript in 2024',
    //   date: '2024-01-08',
    //   category: 'Development',
    //   excerpt: 'Deep dive into advanced TypeScript features and how they can improve code quality and developer experience. Covered utility types, conditional types, and template literal types.',
    //   readTime: '12 min read',
    //   tags: ['TypeScript', 'JavaScript', 'Types'],
    //   slug: 'mastering-typescript-2024',
    //   featured: true,
    // },
    // {
    //   id: 'modern-css-techniques',
    //   title: 'Field Notes: Modern CSS Techniques',
    //   date: '2024-01-01',
    //   category: 'Design',
    //   excerpt: 'Explored the latest CSS features including container queries, cascade layers, and modern layout techniques. How these tools are changing the way we approach responsive design.',
    //   readTime: '6 min read',
    //   tags: ['CSS', 'Design', 'Responsive'],
    //   slug: 'modern-css-techniques',
    // },
    // {
    //   id: 'nextjs-14-journey',
    //   title: 'Adventure Log: My Journey with Next.js 14',
    //   date: '2023-12-20',
    //   category: 'Framework',
    //   excerpt: 'Comprehensive guide to Next.js 14 features including the new App Router, Server Components, and improved performance optimizations. Real-world examples and migration tips.',
    //   readTime: '15 min read',
    //   tags: ['Next.js', 'React', 'Performance'],
    //   slug: 'nextjs-14-journey',
    // },
  ],

  contactMethods: [
    {
      label: 'Email',
      value: '',
      status: 'Online',
      url: 'mailto:',
      icon: 'email',
    },
    {
      label: 'LinkedIn',
      value: '/in/gary-brenden',
      status: 'Active',
      url: 'https://linkedin.com/in/gary-brenden',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      value: '/coelor',
      status: 'Active',
      url: 'https://github.com/coelor',
      icon: 'github',
    },
    // {
    //   label: 'Discord',
    //   value: 'JohnDoe#1234',
    //   status: 'Available',
    //   icon: 'discord',
    // },
  ],

  navigation: [
    { id: 'hero', label: 'Home', icon: 'home', color: 'primary' },
    { id: 'projects', label: 'Projects', icon: 'work', color: 'secondary' },
    { id: 'skills', label: 'Skills', icon: 'trophy', color: 'success' },
    { id: 'about', label: 'About', icon: 'person', color: 'primary' },
    { id: 'blog', label: 'Blog', icon: 'book', color: 'success' },
    { id: 'contact', label: 'Contact', icon: 'mail', color: 'primary' },
  ],
};