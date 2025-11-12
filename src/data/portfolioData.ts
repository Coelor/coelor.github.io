import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Gary Brenden',
    title: 'Junior Software Engineer',
    bio: {
      short: "Unity and VR developer passionate about building immersive simulations and scalable systems.",
      origin: 'Started my software development journey focusing on game development, VR technologies, and cloud systems',
      current: 'Currently working as a Virtual Reality Software Engineer at UNeTech Institute, developing VR training simulations for Meta Quest 3',
    },
  },

  workExperience: [
    {
      id: 'unetech',
      company: 'UNeTech Institute',
      position: 'Virtual Reality Software Engineer',
      duration: 'Feb 2025 – Present',
      location: 'Remote',
      responsibilities: 'Developed VR training simulations for Meta Quest 3 using Unity, C#, and PlayFab. Helped modularize dialogue systems, integrated PlayFab analytics, and collaborated with instructional designers to align VR features with educational goals.',
      projects: [],
    },
    {
      id: 'encartele',
      company: 'Encartele',
      position: 'Support Technician',
      duration: 'Oct 2024 – Feb 2025',
      location: 'Remote',
      responsibilities: 'Resolved 100+ client support tickets, configured routers and VoIP systems, and created onboarding materials for clients. Worked with ISPs and IT teams to diagnose and resolve connectivity issues.',
      projects: [],
    },
    {
      id: 'ipg',
      company: 'Interpublic Group (IPG)',
      position: 'Data Analyst Intern',
      duration: 'Oct 2022 – Sep 2024',
      location: 'Remote',
      responsibilities: 'Built and managed data hierarchies, developed SQL scripts for compliance, and performed QA testing on internal tools. Authored documentation to standardize workflows and audited data entries for accuracy.',
      projects: [],
    },
  ],

  projects: [
    {
      id: 'dnd-character-creator',
      title: 'DnD Character Creator',
      description: 'Full-stack web application for managing D&D characters and campaigns using AWS services.',
      longDescription: 'Built a comprehensive D&D character management system with user authentication, character creation, and campaign management. Leveraged AWS Amplify for hosting, Lambda for serverless functions, and DynamoDB for data persistence.',
      techStack: ['TypeScript', 'AWS Amplify', 'Lambda', 'Cognito', 'DynamoDB'],
      completionDate: '2024',
      highlights: ['AWS serverless architecture', 'User authentication', 'Campaign management'],
      githubUrl: 'https://github.com/Coelor/dnd-character-creator',
      images: [
        {
          url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23f5f5f5"/%3E%3Ctext x="400" y="280" font-family="Arial, sans-serif" font-size="32" fill="%23666" text-anchor="middle"%3EImage Coming Soon%3C/text%3E%3Ctext x="400" y="320" font-family="Arial, sans-serif" font-size="18" fill="%23999" text-anchor="middle"%3EDnD Character Creator%3C/text%3E%3C/svg%3E',
          alt: 'Placeholder - Image coming soon',
          caption: 'Project screenshot coming soon',
        },
      ],
    },
    {
      id: 'playfab-analysis-tool',
      title: 'PlayFab Analysis Tool',
      description: 'Analytics dashboard to retrieve and visualize player data, supporting QA and stakeholder insights.',
      longDescription: 'Developed a comprehensive analytics dashboard using .NET and React to interface with PlayFab API. Created visualizations for player behavior, game metrics, and performance data to support QA testing and business decisions.',
      techStack: ['C#', '.NET', 'React', 'PlayFab API'],
      completionDate: '2024',
      highlights: ['Real-time analytics', 'PlayFab integration', 'Data visualization'],
      githubUrl: 'https://github.com/Coelor/playfab-analysis-tool',
      images: [
        {
          url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23f5f5f5"/%3E%3Ctext x="400" y="280" font-family="Arial, sans-serif" font-size="32" fill="%23666" text-anchor="middle"%3EImage Coming Soon%3C/text%3E%3Ctext x="400" y="320" font-family="Arial, sans-serif" font-size="18" fill="%23999" text-anchor="middle"%3EPlayFab Analysis Tool%3C/text%3E%3C/svg%3E',
          alt: 'Placeholder - Image coming soon',
          caption: 'Project screenshot coming soon',
        },
      ],
    },
    {
      id: 'idle-game',
      title: 'Idle Game',
      description: 'Unity-based idle game project demonstrating gameplay systems and incremental mechanics.',
      longDescription: 'Created an idle/incremental game in Unity showcasing various game development concepts including save systems, upgrade mechanics, and progression systems. Implemented efficient performance optimization for continuous gameplay.',
      techStack: ['C#', 'Unity'],
      completionDate: '2023',
      highlights: ['Incremental mechanics', 'Save system', 'Performance optimization'],
      githubUrl: '',
      images: [
        {
          url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23f5f5f5"/%3E%3Ctext x="400" y="280" font-family="Arial, sans-serif" font-size="32" fill="%23666" text-anchor="middle"%3EImage Coming Soon%3C/text%3E%3Ctext x="400" y="320" font-family="Arial, sans-serif" font-size="18" fill="%23999" text-anchor="middle"%3EIdle Game%3C/text%3E%3C/svg%3E',
          alt: 'Placeholder - Image coming soon',
          caption: 'Project screenshot coming soon',
        },
      ],
    },
    {
      id: 'subtitle-display-tool',
      title: 'Subtitle Display Tool',
      description: 'Academic project for handling subtitle parsing and display, with support for multiple formats.',
      longDescription: 'Developed a C++ application for parsing and displaying subtitles in various formats. Implemented efficient text rendering, timing synchronization, and support for multiple subtitle file types as part of academic coursework.',
      techStack: ['C++'],
      completionDate: '2023',
      highlights: ['Multiple format support', 'Text rendering', 'Academic project'],
      githubUrl: '',
      images: [
        {
          url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23f5f5f5"/%3E%3Ctext x="400" y="280" font-family="Arial, sans-serif" font-size="32" fill="%23666" text-anchor="middle"%3EImage Coming Soon%3C/text%3E%3Ctext x="400" y="320" font-family="Arial, sans-serif" font-size="18" fill="%23999" text-anchor="middle"%3ESubtitle Display Tool%3C/text%3E%3C/svg%3E',
          alt: 'Placeholder - Image coming soon',
          caption: 'Project screenshot coming soon',
        },
      ],
    },
  ],

  education: [
    {
      id: 'community-college',
      degree: 'Associate of Science in Computer Science',
      school: 'Metropolitan Community College',
      year: '2020 - 2022',
      location: 'Omaha, Nebraska',
      description: '',
    },
    {
      id: 'university',
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Nebraska at Omaha',
      year: '2022 - 2025',
      location: 'Omaha, Nebraska',
      description: '',
    },
  ],

  certifications: [
    {
      id: 'scrummaster-cert',
      name: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      year: '2025 - 2027',
    },
  ],

  skillTags: [
    { name: 'Unity', category: 'Game Development' },
    { name: 'C#', category: 'Programming' },
    { name: '.NET', category: 'Framework' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Programming' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure (PlayFab)', category: 'Cloud' },
    { name: 'Git', category: 'Tools' },
    { name: 'Agile Scrum', category: 'Methodology' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'REST API', category: 'Backend' },
  ],

  contactMethods: [
    {
      label: 'Email',
      value: 'gary.brenden.dev@gmail.com',
      status: 'Online',
      url: 'mailto:gary.brenden.dev@gmail.com',
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
  ],

  resumeUrl: '/resume/Gary_Brenden_Resume.pdf',
};