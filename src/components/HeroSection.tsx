import { Box, Typography, Avatar, Stack, Chip, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import type { HeroSectionProps } from '../types/portfolio';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

const ContentCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  padding: theme.spacing(6),
  maxWidth: '900px',
  width: '100%',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
  },
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 140,
  height: 140,
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: `0 0 24px ${theme.palette.primary.main}40`,
  [theme.breakpoints.down('md')]: {
    width: 120,
    height: 120,
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}15`,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}30`,
  fontWeight: 500,
  fontSize: '0.875rem',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}25`,
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: '8px',
  backgroundColor: `${theme.palette.background.default}`,
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

const HeroSection = ({ personal, coreStats }: HeroSectionProps) => {
  return (
    <HeroContainer id="hero">
      <ContentCard>
        <Stack spacing={4}>
          {/* Profile Section */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={4} 
            alignItems="center"
          >
            <Box sx={{ textAlign: 'center' }}>
              <ProfileAvatar
                src={personal.avatar}
                alt={personal.name}
              />
            </Box>
            
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {personal.name}
              </Typography>
              
              <Typography 
                variant="h4" 
                color="text.secondary" 
                gutterBottom
                sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                {personal.title}
              </Typography>
              
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ mt: 2, mb: 3, maxWidth: '600px' }}
              >
                {personal.bio.short}
              </Typography>

              {/* Social Links */}
              <Stack 
                direction="row" 
                spacing={2} 
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                <SocialButton aria-label="GitHub">
                  <GitHubIcon />
                </SocialButton>
                <SocialButton aria-label="LinkedIn">
                  <LinkedInIcon />
                </SocialButton>
                <SocialButton aria-label="Email">
                  <EmailIcon />
                </SocialButton>
              </Stack>
            </Box>
          </Stack>

          {/* Core Stats */}
          <Box>
            <Typography 
              variant="h5" 
              color="primary" 
              gutterBottom 
              sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }}
            >
              Expertise
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
            >
              {coreStats.map((stat) => (
                <StatItem key={stat.label} sx={{ flex: 1 }}>
                  <Typography 
                    variant="h3" 
                    color="primary"
                    sx={{ fontWeight: 700, fontSize: '2rem' }}
                  >
                    {stat.value}%
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ mt: 0.5, fontWeight: 500 }}
                  >
                    {stat.label}
                  </Typography>
                </StatItem>
              ))}
            </Stack>
          </Box>

          {/* CTA Buttons */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
          >
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ 
                px: 4,
                boxShadow: '0 4px 14px rgba(0, 217, 255, 0.3)',
              }}
            >
              View Projects
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              sx={{ px: 4 }}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </ContentCard>
    </HeroContainer>
  );
};

export default HeroSection;