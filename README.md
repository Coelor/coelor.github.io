# Gary Brenden - Portfolio Website

A modern, responsive portfolio website showcasing the work and experience of Gary Brenden, a Virtual Reality Software Engineer and Junior Software Developer. Built with React, TypeScript, and Material-UI.

🌐 **Live Demo:** [View Portfolio](https://your-username.github.io/portfolio)

## ✨ Features

- **Interactive Project Showcase** - Detailed project modals with tech stacks and GitHub links
- **Professional Work Timeline** - Comprehensive work experience with achievements
- **Animated Skills Ticker** - Continuously scrolling display of technical skills
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation** - Fixed sidebar with active section highlighting
- **Resume Integration** - Direct PDF resume download
- **Contact Links** - Easy access to LinkedIn, GitHub, and email

## 🚀 Tech Stack

### Core Technologies
- **React 19** - Modern React with latest features
- **TypeScript** - Full type safety and enhanced developer experience
- **Material-UI v7** - Professional React component library
- **Emotion** - CSS-in-JS styling solution

### Build & Development
- **Vite** - Fast build tool and development server
- **ESLint** - Code quality with production-ready configuration
- **GitHub Actions** - Automated deployment to GitHub Pages

### Key Libraries
- `@mui/material` - UI components and theming
- `@mui/icons-material` - Professional iconography
- `date-fns` - Date formatting and calculations
- `react-error-boundary` - Error handling

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Fixed sidebar navigation
│   ├── ProjectsSection.tsx   # Project showcase
│   ├── WorkExperienceSection.tsx  # Work timeline
│   └── SkillsTicker.tsx # Animated skills display
├── data/
│   └── portfolioData.ts # Centralized content data
├── theme.ts            # Material-UI theme configuration
└── main.tsx           # Application entry point
```

## 🎨 Customization

### Updating Content
All portfolio content is centralized in `src/data/portfolioData.ts`. Update this file to modify:
- Personal information and bio
- Work experience and projects
- Skills and technologies
- Contact information

### Theming
Customize colors, typography, and spacing in `src/theme.ts` using Material-UI's theming system.

### Adding New Sections
1. Create component in `src/components/`
2. Add data structure to `portfolioData.ts`
3. Import and use in main application
4. Update navigation if needed

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

Navigation automatically switches to a mobile-friendly overlay on smaller screens.

## 🚀 Deployment

The project is configured for automatic deployment to GitHub Pages via GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site is available at `https://your-username.github.io/portfolio`

### Manual Deployment
```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 🔧 Production Configuration

The project includes production-ready ESLint configuration with:
- Type-aware TypeScript rules
- React-specific linting
- Accessibility checks
- Performance optimizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Gary Brenden**
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- GitHub: [Your GitHub](https://github.com/your-username)
- Email: your.email@example.com

---

Built with ❤️ using React, TypeScript, and Material-UI