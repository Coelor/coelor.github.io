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
            radial-gradient(circle at 20% 20%, ${theme.palette.primary.main}10 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main}10 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, ${theme.palette.success.main}05 0%, transparent 50%),
            ${theme.palette.background.default}
          `,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(45deg, transparent 49%, ${theme.palette.primary.main}02 50%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, ${theme.palette.secondary.main}02 50%, transparent 51%)
            `,
            backgroundSize: '100px 100px',
            pointerEvents: 'none',
            zIndex: 0,
          },
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
          {/* <BlogSection 
            blogPosts={portfolioData.blogPosts} 
          /> */}
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