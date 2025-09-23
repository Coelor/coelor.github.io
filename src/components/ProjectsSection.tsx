import React from 'react';
import { Box, Typography, Stack, Chip, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { portfolioData } from '../data/portfolioData';

const QuestCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(255, 107, 53, 0.1) 100%)`,
  border: `1px solid ${theme.palette.secondary.main}40`,
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    border: `2px solid ${theme.palette.secondary.main}`,
    boxShadow: `0 0 25px ${theme.palette.secondary.main}30`,
    transform: 'translateY(-8px)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px',
    height: '100px',
    background: `radial-gradient(circle, ${theme.palette.secondary.main}20 0%, transparent 70%)`,
    borderRadius: '50%',
    transform: 'translate(50%, -50%)',
  },
}));

const DifficultyChip = styled(Chip)<{ difficulty: string }>(({ theme, difficulty }) => {
  const colors = {
    Easy: theme.palette.success.main,
    Medium: theme.palette.warning.main,
    Hard: theme.palette.error.main,
    Expert: theme.palette.primary.main,
  };
  
  return {
    backgroundColor: `${colors[difficulty as keyof typeof colors]}20`,
    color: colors[difficulty as keyof typeof colors],
    border: `1px solid ${colors[difficulty as keyof typeof colors]}`,
    fontWeight: 'bold',
    boxShadow: `0 0 10px ${colors[difficulty as keyof typeof colors]}30`,
  };
});

const ProjectsSection: React.FC = () => {
  const projects = portfolioData.projects;

  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Typography variant="h2" color="secondary.main" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Quest Log
      </Typography>
      
      <Stack spacing={4}>
        {projects.map((project, index) => (
          <QuestCard key={index}>
            <CardContent sx={{ p: 4 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                <Typography variant="h4" color="secondary.main" gutterBottom>
                  {project.title}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <DifficultyChip
                    label={project.difficulty}
                    size="small"
                    difficulty={project.difficulty}
                  />
                  <Chip
                    label={project.status}
                    size="small"
                    color={project.status === 'Completed' ? 'success' : 'warning'}
                    variant="outlined"
                  />
                </Stack>
              </Stack>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                {project.description}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Tech Stack
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {project.techStack.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      variant="outlined"
                      color="primary"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" color="success.main" gutterBottom>
                  Rewards Earned
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {project.rewards.map((reward, rewardIndex) => (
                    <Chip
                      key={rewardIndex}
                      label={reward}
                      size="small"
                      color="success"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Box>
              
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="text.secondary">
                  Completed: {project.completionDate}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    size="small"
                    onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                    disabled={!project.githubUrl}
                  >
                    {project.githubUrl ? 'GitHub' : 'View Details'}
                  </Button>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="small"
                    onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
                    disabled={!project.demoUrl}
                  >
                    {project.demoUrl ? 'Live Demo' : 'Coming Soon'}
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </QuestCard>
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectsSection;