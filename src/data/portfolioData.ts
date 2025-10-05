import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Gary Brenden',
    title: 'Junior Software Engineer',
    bio: {
      short: "I'm a passionate software engineer specializing in full-stack development with expertise in Unity, AWS, and modern web technologies. I thrive in collaborative environments and am committed to delivering high-quality, scalable solutions.",
      origin: 'Started my software development journey in 2018, focusing on game development and cloud technologies',
      current: 'Currently working as a Junior Software Engineer, building scalable applications and contributing to innovative projects',
    },
  },

  workExperience: [
    {
      id: 'gravity-well',
      company: 'Gravity Well',
      position: 'Engineering Director',
      duration: '2022 - Present',
      location: 'Remote',
      responsibilities: 'Leading engineering teams in developing scalable game systems and backend infrastructure. Architecting cloud-based solutions using AWS and PlayFab. Implementing CI/CD pipelines and maintaining code quality standards.',
      projects: [
        {
          id: 'multiplayer-system',
          title: 'Multiplayer Game System',
          description: 'Architected and implemented a scalable multiplayer system supporting 10,000+ concurrent players.',
          longDescription: 'Designed and developed a robust multiplayer infrastructure using Unity, PlayFab, and AWS. Implemented real-time synchronization, matchmaking algorithms, and anti-cheat systems. Optimized network performance reducing latency by 40%.',
          techStack: ['Unity', 'C#', 'PlayFab', 'AWS Lambda', 'DynamoDB'],
          completionDate: '2023',
          highlights: ['10,000+ concurrent players', '40% latency reduction', 'Real-time synchronization'],
          githubUrl: '',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnR8ZW58MHwwfHx8MTc1ODYwMDY0NHww&ixlib=rb-4.1.0&q=85',
              alt: 'Multiplayer game development - Florian Olivo on Unsplash',
              caption: 'Game Development Environment',
            },
          ],
        },
      ],
    },
    {
      id: 'chessplus',
      company: 'Chessplus',
      position: 'Digital Director / Part Owner',
      duration: '2021 - Present',
      location: 'Remote',
      responsibilities: 'Overseeing digital strategy and technical implementation for chess gaming platform. Managing full-stack development team. Integrating payment systems and user analytics.',
      projects: [
        {
          id: 'chess-platform',
          title: 'Chess Gaming Platform',
          description: 'Built a comprehensive online chess platform with real-time gameplay, tournaments, and social features.',
          longDescription: 'Developed a full-stack chess platform using React, Node.js, and WebSockets for real-time gameplay. Implemented ELO rating system, tournament management, and social features. Integrated Stripe for payments and AWS for hosting.',
          techStack: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'AWS', 'Stripe'],
          completionDate: '2022',
          highlights: ['Real-time gameplay', 'Tournament system', 'Payment integration'],
          liveUrl: 'https://chessplus.com',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGdhbWV8ZW58MHwwfHx8MTc1ODYwMDY0NHww&ixlib=rb-4.1.0&q=85',
              alt: 'Chess game platform - Jeshoots.com on Unsplash',
              caption: 'Chess Platform Interface',
            },
          ],
        },
      ],
    },
  ],

  projects: [
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a modern, responsive portfolio website using React and Material-UI.',
      longDescription: 'Created a professional portfolio website showcasing projects and skills. Implemented smooth scrolling navigation, responsive design, and dynamic content management. Deployed on Vercel with CI/CD integration.',
      techStack: ['React', 'TypeScript', 'Material-UI', 'Vite', 'Vercel'],
      completionDate: '2024',
      highlights: ['Responsive design', 'Smooth animations', 'SEO optimized'],
      githubUrl: 'https://github.com/coelor/portfolio',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfDB8fHwxNzU4NjAwNjQ0fDA&ixlib=rb-4.1.0&q=85',
          alt: 'Web development workspace - Eftakher Alam on Unsplash',
          caption: 'Portfolio Development',
        },
      ],
    },
    {
      id: 'task-manager',
      title: 'Task Management Application',
      description: 'Built a full-stack task management app with real-time collaboration features.',
      longDescription: 'Developed a comprehensive task management application with drag-and-drop interface, real-time updates, and team collaboration features. Implemented authentication, role-based access control, and data persistence.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
      completionDate: '2023',
      highlights: ['Real-time collaboration', 'Drag-and-drop interface', 'Role-based access'],
      githubUrl: 'https://github.com/coelor/task-manager',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudHxlbnwwfDB8fHwxNzU4NjAwNjQ0fDA&ixlib=rb-4.1.0&q=85',
          alt: 'Task management workspace - Startaê Team on Unsplash',
          caption: 'Task Management Interface',
        },
      ],
    },
  ],

  education: [
    {
      id: 'university',
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      year: '2018 - 2022',
      location: 'Sydney, Australia',
      description: 'Focused on software engineering, algorithms, and game development. Graduated with honors.',
    },
  ],

  certifications: [
    {
      id: 'unity-cert',
      name: 'Unity Certified Developer',
      issuer: 'Unity Technologies',
      year: '2022',
    },
    {
      id: 'aws-cert',
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      year: '2022',
    },
    {
      id: 'scrum-cert',
      name: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      year: '2023',
    },
  ],

  skillTags: [
    { name: 'Unity', category: 'Game Development' },
    { name: 'C#', category: 'Programming' },
    { name: '.NET', category: 'Framework' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Programming' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'PlayFab', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
    { name: 'Agile Scrum', category: 'Methodology' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'REST API', category: 'Backend' },
  ],

  contactMethods: [
    {
      label: 'Email',
      value: 'gary.brenden@example.com',
      status: 'Online',
      url: 'mailto:gary.brenden@example.com',
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
  ],

  navigation: [
    { id: 'hero', label: 'Home', icon: 'home', color: 'primary' },
    { id: 'about', label: 'About', icon: 'person', color: 'primary' },
    { id: 'experience', label: 'Experience', icon: 'work', color: 'primary' },
    { id: 'projects', label: 'Projects', icon: 'build', color: 'primary' },
    { id: 'education', label: 'Education', icon: 'school', color: 'primary' },
    { id: 'contact', label: 'Contact', icon: 'mail', color: 'primary' },
  ],

  resumeUrl: '/resume.pdf',
};