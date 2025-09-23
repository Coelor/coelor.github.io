# Portfolio Content Management Guide

This portfolio uses a centralized configuration system that makes all content easily updatable and expandable. All content is managed through a single data file.

## How to Update Your Portfolio

### 1. Main Configuration File
All portfolio content is stored in: **`src/data/portfolioData.ts`**

This file contains all your personal information, projects, skills, and other content. Simply edit this file to update your portfolio.

### 2. Content Sections

#### Personal Information
```typescript
personal: {
  name: "Your Name",                    // UPDATE: Your actual name
  title: "Your Job Title",              // UPDATE: Your professional title  
  avatar: "path/to/your/photo.jpg",     // UPDATE: Your photo URL
  level: "Level 99 Developer",          // Can customize this "gaming" title
  role: "Full Stack Wizard"             // Can customize this role description
}
```

#### Core Stats (Skills Overview)
```typescript
stats: [
  { label: 'Frontend', value: 95 },     // UPDATE: Adjust based on your skills (0-100)
  { label: 'Backend', value: 85 },      // UPDATE: Adjust based on your skills
  { label: 'DevOps', value: 75 },       // UPDATE: Adjust based on your skills  
  { label: 'Design', value: 80 },       // UPDATE: Adjust based on your skills
]
```

#### Contact Information
```typescript
contact: {
  methods: [
    { 
      label: 'Email', 
      value: 'your.email@example.com',    // UPDATE: Your actual email
      status: 'Online',
      url: 'mailto:your.email@example.com'
    },
    // Add more contact methods as needed
  ]
}
```

#### About Section
```typescript
about: {
  originStory: {
    title: "Origin Story",
    paragraphs: [
      "Your first paragraph about your journey...",    // UPDATE: Your actual story
      "Your second paragraph..."                       // UPDATE: Continue your story
    ]
  },
  timeline: [
    {
      year: '2020',
      title: 'Your Career Milestone',                  // UPDATE: Your actual timeline
      description: 'What happened in this year...'
    }
    // Add more timeline events
  ]
}
```

#### Skills
```typescript
skills: [
  {
    title: 'Frontend Arsenal',                         // Can customize category names
    skills: [
      { 
        name: 'React/Next.js',                         // UPDATE: Your actual skills
        level: 95,                                     // UPDATE: Your skill level (0-100)
        experience: '5+ years'                         // UPDATE: Your experience
      }
      // Add more skills
    ]
  }
  // Add more skill categories
]
```

#### Projects
```typescript
projects: [
  {
    title: 'Your Project Name',                        // UPDATE: Actual project name
    description: 'Project description...',             // UPDATE: Actual description
    difficulty: 'Expert',                              // Options: 'Easy', 'Medium', 'Hard', 'Expert'
    status: 'Completed',                               // Options: 'Completed', 'In Progress', 'Planning'
    techStack: ['React', 'Node.js'],                   // UPDATE: Technologies used
    completionDate: '2024',                            // UPDATE: When completed
    rewards: ['Full Stack Mastery'],                   // UPDATE: Skills gained/highlights
    demoUrl: 'https://your-demo.com',                  // Optional: Live demo URL
    githubUrl: 'https://github.com/you/project'        // Optional: GitHub repository
  }
  // Add more projects
]
```

#### Blog Posts
```typescript
blog: [
  {
    title: 'Your Blog Post Title',                     // UPDATE: Actual blog post
    date: '2024-01-15',                                // UPDATE: Publication date
    category: 'Development',                           // UPDATE: Post category
    excerpt: 'Brief description...',                   // UPDATE: Post summary
    readTime: '8 min read',                           // UPDATE: Estimated read time
    tags: ['React', 'JavaScript'],                    // UPDATE: Relevant tags
    url: 'https://your-blog.com/post'                 // Optional: Link to actual post
  }
  // Add more blog posts
]
```

## 3. Adding New Content

### Adding a New Project
```typescript
// Add to the projects array:
{
  title: 'New Project Name',
  description: 'What this project does...',
  difficulty: 'Medium',
  status: 'In Progress',
  techStack: ['Technology1', 'Technology2'],
  completionDate: '2024',
  rewards: ['Skill Learned', 'Achievement Unlocked'],
  demoUrl: 'https://demo-link.com',      // Optional
  githubUrl: 'https://github.com/link'   // Optional
}
```

### Adding a New Skill Category
```typescript
// Add to the skills array:
{
  title: 'New Skill Category',
  skills: [
    { name: 'New Technology', level: 80, experience: '2+ years' },
    { name: 'Another Tech', level: 65, experience: '1+ year' }
  ]
}
```

### Adding a Timeline Event
```typescript
// Add to the about.timeline array:
{
  year: '2024',
  title: 'New Achievement',
  description: 'What you accomplished this year...'
}
```

## 4. Features

- **Clickable Links**: Contact methods, project demos, GitHub links, and blog posts automatically become clickable if URLs are provided
- **Dynamic Buttons**: Buttons are automatically disabled if URLs are not provided
- **Expandable**: Easy to add new sections, projects, skills, or timeline events
- **Type Safety**: TypeScript ensures data consistency
- **Centralized**: All content in one file for easy management

## 5. Quick Start Checklist

1. [ ] Update `personal` information with your details
2. [ ] Replace contact methods with your actual contact info
3. [ ] Rewrite the `about.originStory` with your story
4. [ ] Update `about.timeline` with your career milestones
5. [ ] Adjust `stats` to reflect your skill levels
6. [ ] Replace `skills` with your actual technologies and experience
7. [ ] Replace `projects` with your real projects
8. [ ] Update `blog` posts or remove the section if not applicable
9. [ ] Add your actual photo to `personal.avatar`
10. [ ] Test all links and URLs

## 6. Optional Customization

- **Gaming Theme**: The portfolio uses gaming terminology ("Quest Log", "Character Lore", etc.) which you can modify in the component files if desired
- **Styling**: The components use Material-UI with a cyberpunk/gaming aesthetic
- **Sections**: You can hide entire sections by commenting them out in `App.portfolio.tsx`

## 7. Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production  
npm run lint     # Check code quality
```

---

**Important**: After updating the data file, restart your development server (`npm run dev`) to see changes.