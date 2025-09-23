import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'John Doe',
    title: 'Senior Software Engineer & Digital Architect',
    level: 'Level 99 Developer',
    role: 'Full Stack Wizard',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: {
      short: 'Passionate full-stack developer with expertise in modern web technologies and a love for creating exceptional digital experiences.',
      origin: 'In the vast digital realm, a curious mind discovered the power of code. What started as simple HTML pages evolved into a passion for creating digital experiences that matter. Through countless hours of debugging, learning new frameworks, and solving complex problems, a developer was forged.',
      current: 'Today, this journey continues with each new project, each challenge overcome, and each line of code written. The quest for knowledge never ends, and the adventure in technology keeps evolving.',
    },
  },

  coreStats: [
    { label: 'Frontend', value: 95 },
    { label: 'Backend', value: 85 },
    { label: 'DevOps', value: 75 },
    { label: 'Design', value: 80 },
  ],

  skillCategories: [
    {
      title: 'Frontend Arsenal',
      skills: [
        { name: 'React/Next.js', level: 95, experience: '5+ years' },
        { name: 'TypeScript', level: 90, experience: '4+ years' },
        { name: 'Vue.js', level: 85, experience: '3+ years' },
        { name: 'CSS/SCSS', level: 90, experience: '6+ years' },
      ],
    },
    {
      title: 'Backend Mastery',
      skills: [
        { name: 'Node.js', level: 90, experience: '4+ years' },
        { name: 'Python', level: 85, experience: '3+ years' },
        { name: 'PostgreSQL', level: 80, experience: '3+ years' },
        { name: 'MongoDB', level: 75, experience: '2+ years' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 80, experience: '3+ years' },
        { name: 'AWS', level: 75, experience: '2+ years' },
        { name: 'Git', level: 95, experience: '6+ years' },
        { name: 'CI/CD', level: 70, experience: '2+ years' },
      ],
    },
  ],

  timeline: [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started the coding journey with HTML, CSS, and JavaScript. First steps into the digital realm.',
    },
    {
      year: '2019',
      title: 'Framework Discovery',
      description: 'Discovered React and fell in love with component-based architecture. Built first SPA.',
    },
    {
      year: '2020',
      title: 'Full Stack Evolution',
      description: 'Expanded to backend development with Node.js and databases. Became a full-stack warrior.',
    },
    {
      year: '2021',
      title: 'Professional Quest',
      description: 'Joined first tech company as a Junior Developer. Started working on real-world projects.',
    },
    {
      year: '2022',
      title: 'Senior Promotion',
      description: 'Promoted to Senior Developer. Led team projects and mentored junior developers.',
    },
    {
      year: '2023',
      title: 'Freelance Adventure',
      description: 'Started freelancing and built multiple successful projects for various clients.',
    },
    {
      year: '2024',
      title: 'Current Chapter',
      description: 'Continuing to grow, learn new technologies, and take on challenging projects.',
    },
  ],

  projects: [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform Quest',
      description: 'Built a full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      longDescription: 'A comprehensive e-commerce solution featuring modern UI/UX design, secure payment processing with Stripe integration, real-time inventory management, advanced search and filtering capabilities, responsive design for all devices, and a powerful admin dashboard for managing products, orders, and analytics.',
      difficulty: 'Expert',
      status: 'Completed',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      completionDate: '2024',
      rewards: ['Full Stack Mastery', 'Payment Integration', 'Cloud Deployment'],
      githubUrl: 'https://github.com/johndoe/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.johndoe.dev',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1642052503083-bc49dd433478?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwZWNvbW1lcmNlfGVufDB8MHx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
          alt: 'E-commerce platform dashboard - PiggyBank on Unsplash',
          caption: 'Admin Dashboard Overview',
        },
        {
          url: 'https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwZWNvbW1lcmNlfGVufDB8MHx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
          alt: 'E-commerce website interface - Team Nocoloco on Unsplash',
          caption: 'Product Catalog Interface',
        },
        {
          url: 'https://images.unsplash.com/photo-1642054220942-d3c7dd1466cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwZWNvbW1lcmNlfGVufDB8MHx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
          alt: 'E-commerce checkout process - PiggyBank on Unsplash',
          caption: 'Checkout & Payment Flow',
        },
      ],
    },
    {
      id: 'realtime-chat',
      title: 'Real-time Chat Application',
      description: 'Developed a real-time chat application using Socket.io, React, and MongoDB. Includes private messaging, group chats, and file sharing.',
      longDescription: 'A feature-rich real-time messaging platform with instant message delivery, group chat functionality, file and media sharing, emoji reactions, message encryption, user presence indicators, and mobile-responsive design. Built with modern web technologies for optimal performance.',
      difficulty: 'Hard',
      status: 'Completed',
      techStack: ['React', 'Socket.io', 'MongoDB', 'Express'],
      completionDate: '2023',
      rewards: ['WebSocket Mastery', 'Real-time Systems', 'File Handling'],
      githubUrl: 'https://github.com/johndoe/realtime-chat',
      liveUrl: 'https://chat-app.johndoe.dev',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1675865254433-6ba341f0f00b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxjaGF0JTIwbWVzc2FnaW5nJTIwaW50ZXJmYWNlfGVufDB8MHx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
          alt: 'Chat application interface - Levart_Photographer on Unsplash',
          caption: 'Main Chat Interface',
        },
        {
          url: 'https://images.unsplash.com/photo-1682941664177-7920d0e59418?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxjaGF0JTIwbWVzc2FnaW5nJTIwaW50ZXJmYWNlfGVufDB8MHx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
          alt: 'Mobile chat interface - Sanket Mishra on Unsplash',
          caption: 'Mobile Responsive Design',
        },
      ],
    },
    {
      id: 'ai-task-manager',
      title: 'AI-Powered Task Manager',
      description: 'Created an intelligent task management system with AI-powered priority suggestions and automated scheduling using machine learning.',
      longDescription: 'An intelligent productivity platform that leverages machine learning to optimize task scheduling, predict completion times, suggest priorities based on user behavior, and provide insights into productivity patterns. Features include smart notifications, calendar integration, and collaborative workspaces.',
      difficulty: 'Expert',
      status: 'In Progress',
      techStack: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      completionDate: '2024',
      rewards: ['AI Integration', 'Machine Learning', 'Advanced Algorithms'],
      githubUrl: 'https://github.com/johndoe/ai-task-manager',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBwcm9kdWN0aXZpdHklMjBpbnRlcmZhY2V8ZW58MHwwfHx8MTc1ODYwMDY0M3ww&ixlib=rb-4.1.0&q=85',
          alt: 'Task management dashboard - Luke Chesser on Unsplash',
          caption: 'Analytics Dashboard',
        },
        {
          url: 'https://images.unsplash.com/photo-1676276374803-36e48196d5ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmQlMjBwcm9kdWN0aXZpdHklMjBpbnRlcmZhY2V8ZW58MHwwfHx8MTc1ODYwMDY0M3ww&ixlib=rb-4.1.0&q=85',
          alt: 'Task board interface - Walls.io on Unsplash',
          caption: 'Kanban Board View',
        },
      ],
    },
    {
      id: 'weather-app',
      title: 'Mobile Weather App',
      description: 'Developed a cross-platform weather application with location-based forecasts, interactive maps, and push notifications.',
      longDescription: 'A comprehensive weather application providing accurate forecasts, interactive weather maps, severe weather alerts, location-based services, offline functionality, and beautiful weather animations. Designed with a focus on user experience and accessibility across all devices.',
      difficulty: 'Medium',
      status: 'Completed',
      techStack: ['React Native', 'Weather API', 'Maps API'],
      completionDate: '2023',
      rewards: ['Mobile Development', 'API Integration', 'Geolocation'],
      githubUrl: 'https://github.com/johndoe/weather-app',
      liveUrl: 'https://weather.johndoe.dev',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjB3ZWF0aGVyJTIwYXBwfGVufDB8MXx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
          alt: 'Weather app interface - Typerium App on Unsplash',
          caption: 'Main Weather Interface',
        },
        {
          url: 'https://images.unsplash.com/photo-1692681157014-2f7ee75c0ea0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxtb2JpbGUlMjB3ZWF0aGVyJTIwYXBwfGVufDB8MXx8fDE3NTg2MDA2NDR8MA&ixlib=rb-4.1.0&q=85',
          alt: 'Mobile weather interface - Greg Rosenke on Unsplash',
          caption: 'Mobile App Design',
        },
      ],
    },
  ],

  blogPosts: [
    {
      id: 'scalable-react-2024',
      title: 'Mission Log: Building Scalable React Applications',
      date: '2024-01-15',
      category: 'Frontend',
      excerpt: 'Discovered advanced patterns for building scalable React applications. Explored component composition, custom hooks, and state management strategies that have proven effective in large-scale projects.',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Best Practices'],
      slug: 'building-scalable-react-applications',
      featured: true,
    },
    {
      id: 'typescript-mastery-2024',
      title: 'Quest Report: Mastering TypeScript in 2024',
      date: '2024-01-08',
      category: 'Development',
      excerpt: 'Deep dive into advanced TypeScript features and how they can improve code quality and developer experience. Covered utility types, conditional types, and template literal types.',
      readTime: '12 min read',
      tags: ['TypeScript', 'JavaScript', 'Types'],
      slug: 'mastering-typescript-2024',
      featured: true,
    },
    {
      id: 'modern-css-techniques',
      title: 'Field Notes: Modern CSS Techniques',
      date: '2024-01-01',
      category: 'Design',
      excerpt: 'Explored the latest CSS features including container queries, cascade layers, and modern layout techniques. How these tools are changing the way we approach responsive design.',
      readTime: '6 min read',
      tags: ['CSS', 'Design', 'Responsive'],
      slug: 'modern-css-techniques',
    },
    {
      id: 'nextjs-14-journey',
      title: 'Adventure Log: My Journey with Next.js 14',
      date: '2023-12-20',
      category: 'Framework',
      excerpt: 'Comprehensive guide to Next.js 14 features including the new App Router, Server Components, and improved performance optimizations. Real-world examples and migration tips.',
      readTime: '15 min read',
      tags: ['Next.js', 'React', 'Performance'],
      slug: 'nextjs-14-journey',
    },
  ],

  contactMethods: [
    {
      label: 'Email',
      value: 'john.doe@example.com',
      status: 'Online',
      url: 'mailto:john.doe@example.com',
      icon: 'email',
    },
    {
      label: 'LinkedIn',
      value: '/in/johndoe',
      status: 'Active',
      url: 'https://linkedin.com/in/johndoe',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      value: '/johndoe',
      status: 'Active',
      url: 'https://github.com/johndoe',
      icon: 'github',
    },
    {
      label: 'Discord',
      value: 'JohnDoe#1234',
      status: 'Available',
      icon: 'discord',
    },
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