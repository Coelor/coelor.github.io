import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from './src/theme';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import WorkExperienceSection from './src/components/WorkExperienceSection';
import ProjectsSection from './src/components/ProjectsSection';
import EducationSection from './src/components/EducationSection';
import Navigation from './src/components/Navigation';
import SkillsTicker from './src/components/SkillsTicker';
import { portfolioData } from './src/data/portfolioData';

// Visually hidden until it receives keyboard focus, then slides into view —
// the standard "skip to content" pattern for a fixed sidebar layout that a
// keyboard/screen-reader user would otherwise have to tab through every load.
const SkipLink = styled('a')(({ theme }) => ({
  position: 'absolute',
  top: '-40px',
  left: 0,
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 2),
  zIndex: 2000,
  borderRadius: '0 0 8px 0',
  textDecoration: 'none',
  fontWeight: 600,
  transition: 'top 0.2s ease',
  '&:focus': {
    top: 0,
  },
}));

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
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <Navigation
          navigation={portfolioData.navigation}
          resumeUrl={portfolioData.resumeUrl}
          contactMethods={portfolioData.contactMethods}
          personalName={portfolioData.personal.name}
          personalTitle={portfolioData.personal.title}
        />
        <Box
          component="main"
          id="main-content"
          tabIndex={-1}
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
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;