import { Box, Typography, Button, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import type { HeroSectionProps } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

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

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {portfolioData.resumeUrl && (
            <Button
              variant="contained"
              size="large"
              component="a"
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionIcon />}
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: 'white',
                color: '#667eea',
                fontWeight: 600,
                fontSize: '1rem',
                borderRadius: '8px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Download Resume
            </Button>
          )}
          <Button
            variant="outlined"
            size="large"
            component="a"
            href={portfolioData.contactMethods.find(c => c.label === 'LinkedIn')?.url}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderColor: 'rgba(255, 255, 255, 0.8)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              borderRadius: '8px',
              borderWidth: '2px',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px)',
                borderWidth: '2px',
              },
              transition: 'all 0.3s ease',
            }}
          >
            LinkedIn
          </Button>
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          {portfolioData.contactMethods.map((contact) => (
            <Button
              key={contact.label}
              component="a"
              href={contact.url}
              target={contact.label !== 'Email' ? '_blank' : '_self'}
              rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
              sx={{
                minWidth: '48px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#667eea',
                  borderColor: 'white',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {contact.label === 'Email' && <EmailIcon />}
              {contact.label === 'LinkedIn' && <LinkedInIcon />}
              {contact.label === 'GitHub' && <GitHubIcon />}
            </Button>
          ))}
        </Stack>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;