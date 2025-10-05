import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './src/theme';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import WorkExperienceSection from './src/components/WorkExperienceSection';
import ProjectsSection from './src/components/ProjectsSection';
import EducationSection from './src/components/EducationSection';
import ContactSection from './src/components/ContactSection';
import Navigation from './src/components/Navigation';
import SkillsTicker from './src/components/SkillsTicker';
import { portfolioData } from './src/data/portfolioData';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <Navigation />
        <Box
          sx={{
            marginLeft: { xs: 0, sm: '280px' },
            minHeight: '100vh',
            transition: 'margin-left 0.3s ease',
            '@media (max-width: 899px)': {
              marginLeft: '260px',
            },
            '@media (max-width: 599px)': {
              marginLeft: 0,
            },
          }}
        >
          <HeroSection personal={portfolioData.personal} />

          <SkillsTicker skills={portfolioData.skillTags} />

          <AboutSection personal={portfolioData.personal} />

          <WorkExperienceSection workExperience={portfolioData.workExperience} />

          <ProjectsSection projects={portfolioData.projects} />

          <EducationSection
            education={portfolioData.education}
            certifications={portfolioData.certifications}
          />

          <ContactSection contactMethods={portfolioData.contactMethods} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;