import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box, Container } from '@mui/material';
import theme from './src/theme';
import HeroSection from './src/components/HeroSection';
import SkillsSection from './src/components/SkillsSection';
import ProjectsSection from './src/components/ProjectsSection';
import AboutSection from './src/components/AboutSection';
import BlogSection from './src/components/BlogSection';
import ContactSection from './src/components/ContactSection';
import Navigation from './src/components/Navigation';
import { usePortfolioData } from './src/hooks/usePortfolioData';

const App: React.FC = () => {
  const portfolioData = usePortfolioData();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: (theme) => `
            radial-gradient(circle at 20% 20%, ${theme.palette.primary.main}08 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main}08 0%, transparent 50%),
            ${theme.palette.background.default}
          `,
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <HeroSection 
            personal={portfolioData.personal} 
            coreStats={portfolioData.coreStats} 
          />
          <SkillsSection 
            skillCategories={portfolioData.skillCategories} 
          />
          <ProjectsSection 
            projects={portfolioData.projects} 
          />
          <AboutSection 
            personal={portfolioData.personal} 
            timeline={portfolioData.timeline} 
          />
          <ContactSection 
            contactMethods={portfolioData.contactMethods} 
          />
        </Container>
        <Navigation />
      </Box>
    </ThemeProvider>
  );
};

export default App;