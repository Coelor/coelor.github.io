import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Gary Brenden",
    title: "Unity and VR Developer",
    avatar: "https://i.pravatar.cc/150?img=12", // UPDATE: Replace with your actual photo URL
    level: "Level 99 VR Developer",
    role: "Unity & Full-Stack Engineer"
  },

  stats: [
    { label: 'Unity/VR', value: 95 }, // Primary expertise in VR development
    { label: 'C# / .NET', value: 90 }, // Strong backend and Unity development
    { label: 'Full-Stack', value: 85 }, // AWS, TypeScript, web development
    { label: 'Data Analysis', value: 80 }, // SQL, PowerApps, analytics experience
  ],

  contact: {
    methods: [
      { 
        label: 'Email', 
        value: 'gbrenden15@gmail.com',
        status: 'Online',
        url: 'mailto:gbrenden15@gmail.com'
      },
      { 
        label: 'Phone', 
        value: '(531) 772-2526',
        status: 'Available',
        url: 'tel:+15317722526'
      },
      { 
        label: 'GitHub', 
        value: 'Coelor',
        status: 'Active',
        url: 'https://github.com/coelor'
      },
      { 
        label: 'LinkedIn', 
        value: 'gary-brenden',
        status: 'Active',
        url: 'https://linkedin.com/in/gary-brenden'
      },
      { 
        label: 'Location', 
        value: 'Omaha, NE',
        status: 'Current'
      },
    ],
    responseMessage: "All incoming transmissions are processed within 24 hours. Priority messages regarding collaboration opportunities receive immediate attention."
  },

  about: {
    originStory: {
      title: "Professional Journey",
      paragraphs: [
        "Dynamic Unity and VR developer with a proven track record in crafting immersive simulations for the Meta Quest 3 and expertise in developing full-stack web applications utilizing AWS. Currently working as a Virtual Reality Software Engineer at University of Nebraska Medical Center, developing educational VR experiences and analytics dashboards.",
        "Proficient in C#, Unity, TypeScript, and serverless architecture, with a strong foundation in game mechanics and interactive experiences. A passion for creating scalable systems drives a commitment to delivering high-quality solutions. Experience spans from data analysis internships to cutting-edge VR development, always focused on innovative problem-solving and technical excellence."
      ]
    },
    timeline: [
      {
        year: '2022',
        title: 'Data Analyst Intern',
        description: 'Started at Interpublic Group (IPG), building Excel data hierarchies, developing SQL scripts, and performing QA testing on PowerApps. Gained foundation in data analysis and compliance.',
      },
      {
        year: '2022',
        title: 'Education Milestone',
        description: 'Completed Associate of Science in Computer Science at Metropolitan Community College, establishing programming fundamentals.',
      },
      {
        year: '2024',
        title: 'Support Technician',
        description: 'Joined Encartele, resolving 100+ client support tickets and configuring VoIP systems. Developed skills in hardware troubleshooting and network solutions.',
      },
      {
        year: '2025',
        title: 'VR Software Engineer',
        description: 'Current role at University of Nebraska Medical Center - UNeTech, developing immersive VR simulations for Meta Quest 3, integrating PlayFab analytics, and building .NET/React dashboards.',
      },
      {
        year: '2025',
        title: "Bachelor's Degree",
        description: 'Graduating with Bachelor of Science in Computer Science from University of Nebraska at Omaha in May 2025.',
      },
      {
        year: '2024',
        title: 'Certified ScrumMaster',
        description: 'Obtained Certified ScrumMaster (CSM) certification, demonstrating expertise in Agile methodologies and team leadership.',
      },
    ]
  },

  skills: [
    {
      title: 'VR & Game Development',
      skills: [
        { name: 'Unity', level: 95, experience: '3+ years' },
        { name: 'Meta Quest SDK (OVR)', level: 90, experience: '2+ years' },
        { name: 'XR Interaction Toolkit', level: 85, experience: '2+ years' },
        { name: 'PlayFab', level: 85, experience: '2+ years' },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C# / .NET', level: 95, experience: '4+ years' },
        { name: 'TypeScript / JavaScript', level: 80, experience: '3+ years' },
        { name: 'Python', level: 75, experience: '2+ years' },
        { name: 'SQL', level: 85, experience: '3+ years' },
      ],
    },
    {
      title: 'Cloud & Web Technologies',
      skills: [
        { name: 'AWS (Amplify, Lambda, Cognito)', level: 80, experience: '2+ years' },
        { name: 'REST APIs', level: 85, experience: '3+ years' },
        { name: 'React', level: 75, experience: '2+ years' },
        { name: 'DynamoDB / S3', level: 70, experience: '2+ years' },
      ],
    },
  ],

  projects: [
    {
      title: 'VR Medical Simulation Platform',
      description: 'Developing immersive VR simulations for Meta Quest 3 at UNeTech. Modularized dialogue system architecture with triggers and branching logic, integrated PlayFab for real-time data logging and analytics.',
      difficulty: 'Expert',
      status: 'In Progress',
      techStack: ['Unity', 'C#', 'Meta Quest SDK', 'PlayFab', 'XR Interaction Toolkit'],
      completionDate: '2025',
      rewards: ['VR Development Mastery', 'Medical Simulation', 'Real-time Analytics', 'Educational Technology'],
      githubUrl: '' // Private/NDA project
    },
    {
      title: 'PlayFab Analytics Dashboard',
      description: 'Built internal analytics dashboard using .NET and React to interface with PlayFab API. Enables stakeholders to retrieve and visualize player data for QA and research purposes.',
      difficulty: 'Hard',
      status: 'In Progress',
      techStack: ['.NET', 'React', 'PlayFab API', 'Data Visualization'],
      completionDate: '2025',
      rewards: ['Full Stack Development', 'API Integration', 'Data Analytics', 'Dashboard Design'],
      githubUrl: '' // Private/work project
    },
    {
      title: 'D&D Character Creator',
      description: 'AWS Amplify Gen 2 starter application for creating D&D characters. Demonstrates full-stack development with modern serverless architecture.',
      difficulty: 'Hard',
      status: 'Completed',
      techStack: ['TypeScript', 'AWS Amplify', 'React', 'DynamoDB'],
      completionDate: '2024',
      rewards: ['AWS Amplify Mastery', 'Serverless Architecture', 'Game Tool Creation'],
      githubUrl: 'https://github.com/Coelor/dnd-character-creator'
    },
    {
      title: 'CraftingAdditions',
      description: 'C# application enhancing crafting mechanics and game systems. Demonstrates advanced object-oriented programming and game logic implementation.',
      difficulty: 'Medium',
      status: 'Completed',
      techStack: ['C#', 'Game Logic', 'Object-Oriented Programming'],
      completionDate: '2023',
      rewards: ['C# Mastery', 'Game Development', 'System Architecture'],
      githubUrl: 'https://github.com/Coelor/CraftingAdditions'
    },
  ],
};