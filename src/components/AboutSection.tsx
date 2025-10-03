import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { AboutSectionProps } from '../types/portfolio';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
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

const AboutSection = ({ personal, timeline }: AboutSectionProps) => {
  return (
    <SectionContainer id="about">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{
            background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
          My journey, experience, and what drives me as a developer
        </Typography>
      </Box>
      
      <BioCard>
        <Typography variant="h4" color="primary" gutterBottom>
          Background
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          {personal.bio.origin}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          {personal.bio.current}
        </Typography>
      </BioCard>

      <Box>
        <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Career Timeline
        </Typography>
        
        <TimelineContainer>
          {timeline.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineDot />
              <TimelineContent>
                <TimelineCard>
                  <Typography variant="h6" color="secondary.main" gutterBottom>
                    {event.year}
                  </Typography>
                  <Typography variant="h5" gutterBottom sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {event.description}
                  </Typography>
                </TimelineCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Box>
    </SectionContainer>
  );
};

export default AboutSection;