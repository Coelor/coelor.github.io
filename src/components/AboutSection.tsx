import { Box, Typography, Stack, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import type { AboutSectionProps } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const BioCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px 0 0 2px',
  },
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transform: 'translateX(-50%)',
  },
  [theme.breakpoints.down('md')]: {
    '&::before': {
      left: '20px',
    },
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  position: 'relative',
  '&:nth-of-type(even)': {
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    paddingLeft: theme.spacing(6),
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  border: `3px solid ${theme.palette.background.paper}`,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    left: '20px',
  },
}));

const TimelineContent = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: 'calc(50% - 40px)',
  padding: theme.spacing(0, 3),
  [theme.breakpoints.down('md')]: {
    maxWidth: 'none',
    paddingLeft: theme.spacing(4),
    paddingRight: 0,
  },
}));

const TimelineCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 4px 16px ${theme.palette.primary.main}15`,
    transform: 'translateY(-4px)',
  },
}));

const AboutSection = ({ personal }: AboutSectionProps) => {
  return (
    <SectionContainer id="about">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: 'text.primary',
              fontWeight: 700,
            }}
          >
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2, fontSize: '1.1rem' }}>
            {personal.bio.short}
          </Typography>
        </Box>

        {portfolioData.resumeUrl && (
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Button
              variant="contained"
              size="large"
              component="a"
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionIcon />}
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '8px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Download Resume
            </Button>
          </Box>
        )}

        <Stack spacing={4} sx={{ maxWidth: '800px', mx: 'auto' }}>
          <BioCard>
            <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
              Background
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              {personal.bio.origin}
            </Typography>
          </BioCard>

          <BioCard>
            <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
              Current Focus
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              {personal.bio.current}
            </Typography>
          </BioCard>
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection;