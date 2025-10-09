import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { HeroSectionProps } from '../types/portfolio';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    minHeight: '80vh',
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const HeroSection = ({ personal }: HeroSectionProps) => {
  return (
    <HeroContainer id="hero">
      <ContentWrapper maxWidth="md">
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            mb: 2,
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          {personal.name}
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: '1.25rem', md: '1.75rem' },
            fontWeight: 400,
            mb: 3,
            opacity: 0.95,
          }}
        >
          {personal.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
            mb: 5,
            maxWidth: '700px',
            mx: 'auto',
            opacity: 0.9,
          }}
        >
          {personal.bio.short}
        </Typography>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;