import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoreCard = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(0, 245, 255, 0.05) 100%)`,
  border: `1px solid ${theme.palette.primary.main}40`,
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
    borderRadius: '2px',
  },
}));

const CustomTimelineContainer = styled(Box)(({ theme }) => ({
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
    boxShadow: `0 0 10px ${theme.palette.primary.main}40`,
  },
  [theme.breakpoints.down('md')]: {
    '&::before': {
      left: '20px',
    },
  },
}));

const TimelineItemContainer = styled(Box)(({ theme }) => ({
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

const GlowingTimelineDot = styled(Box)(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  boxShadow: `0 0 15px ${theme.palette.primary.main}60`,
  animation: 'pulse 2s infinite',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
  '@keyframes pulse': {
    '0%': { boxShadow: `0 0 15px ${theme.palette.primary.main}60` },
    '50%': { boxShadow: `0 0 25px ${theme.palette.primary.main}80` },
    '100%': { boxShadow: `0 0 15px ${theme.palette.primary.main}60` },
  },
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

const AboutSection: React.FC = () => {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started the coding journey with HTML, CSS, and JavaScript. First steps into the digital realm.',
    },
    {
      year: '2019',
      title: 'Framework Discovery',
      description: 'Discovered React and fell in love with component-based architecture. Built first SPA.',
    },
    {
      year: '2020',
      title: 'Full Stack Evolution',
      description: 'Expanded to backend development with Node.js and databases. Became a full-stack warrior.',
    },
    {
      year: '2021',
      title: 'Professional Quest',
      description: 'Joined first tech company as a Junior Developer. Started working on real-world projects.',
    },
    {
      year: '2022',
      title: 'Senior Promotion',
      description: 'Promoted to Senior Developer. Led team projects and mentored junior developers.',
    },
    {
      year: '2023',
      title: 'Freelance Adventure',
      description: 'Started freelancing and built multiple successful projects for various clients.',
    },
    {
      year: '2024',
      title: 'Current Chapter',
      description: 'Continuing to grow, learn new technologies, and take on challenging projects.',
    },
  ];

  return (
    <Box id="about" sx={{ py: 8 }}>
      <Typography variant="h2" color="primary" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Character Lore
      </Typography>
      
      <LoreCard>
        <Typography variant="h4" color="primary" gutterBottom>
          Origin Story
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          In the vast digital realm, a curious mind discovered the power of code. What started as simple HTML pages 
          evolved into a passion for creating digital experiences that matter. Through countless hours of debugging, 
          learning new frameworks, and solving complex problems, a developer was forged.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          Today, this journey continues with each new project, each challenge overcome, and each line of code written. 
          The quest for knowledge never ends, and the adventure in technology keeps evolving.
        </Typography>
      </LoreCard>

      <Box>
        <Typography variant="h4" color="secondary.main" gutterBottom sx={{ mb: 4 }}>
          Character Timeline
        </Typography>
        
        <CustomTimelineContainer>
          {timeline.map((event, index) => (
            <TimelineItemContainer key={index}>
              <GlowingTimelineDot />
              <TimelineContent>
                <Box
                  sx={{
                    background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(255, 107, 53, 0.05) 100%)`,
                    border: (theme) => `1px solid ${theme.palette.secondary.main}40`,
                    borderRadius: '12px',
                    p: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                      boxShadow: (theme) => `0 0 20px ${theme.palette.secondary.main}30`,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography variant="h6" color="secondary.main" gutterBottom>
                    {event.year} - {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItemContainer>
          ))}
        </CustomTimelineContainer>
      </Box>
    </Box>
  );
};

export default AboutSection;