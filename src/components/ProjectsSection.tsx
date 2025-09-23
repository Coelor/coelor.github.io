import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Stack, 
  Chip, 
  Button, 
  Card, 
  CardContent, 
  Modal, 
  IconButton, 
  Backdrop,
  Fade 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LaunchIcon from '@mui/icons-material/Launch';
import { ProjectsSectionProps, Project } from '../types/portfolio';

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

const DifficultyChip = styled(Chip)(({ theme, difficulty }: { theme: any; difficulty: string }) => {
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

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '1200px',
  height: '90vh',
  maxHeight: '800px',
  background: `linear-gradient(135deg, ${theme.palette.background.paper}F0 0%, rgba(0, 245, 255, 0.1) 100%)`,
  backdropFilter: 'blur(20px)',
  border: `2px solid ${theme.palette.primary.main}60`,
  borderRadius: '20px',
  boxShadow: `0 0 50px ${theme.palette.primary.main}30`,
  outline: 'none',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.primary.main}40`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.background.default,
  overflow: 'hidden',
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: `${theme.palette.background.paper}E0`,
  backdropFilter: 'blur(10px)',
  border: `2px solid ${theme.palette.primary.main}60`,
  color: theme.palette.primary.main,
  width: '60px',
  height: '60px',
  zIndex: 10,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.background.paper,
    boxShadow: `0 0 20px ${theme.palette.primary.main}60`,
    transform: 'translateY(-50%) scale(1.1)',
  },
  '&.left': {
    left: theme.spacing(2),
  },
  '&.right': {
    right: theme.spacing(2),
  },
}));

const ProjectImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  borderRadius: '8px',
  boxShadow: `0 0 30px ${theme.palette.primary.main}20`,
}));

const ModalContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: `linear-gradient(135deg, ${theme.palette.background.paper}80 0%, rgba(0, 245, 255, 0.05) 100%)`,
  backdropFilter: 'blur(10px)',
  borderTop: `1px solid ${theme.palette.primary.main}40`,
  maxHeight: '200px',
  overflowY: 'auto',
}));

const GitHubButton = styled(IconButton)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper}E0, rgba(255, 255, 255, 0.1))`,
  border: `2px solid ${theme.palette.text.secondary}40`,
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.text.primary,
    color: theme.palette.background.paper,
    boxShadow: `0 0 15px ${theme.palette.text.primary}40`,
    transform: 'scale(1.1)',
  },
}));

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleGitHubClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

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
                <Stack direction="row" spacing={1} alignItems="center">
                  <GitHubButton
                    size="small"
                    onClick={(e) => handleGitHubClick(project.githubUrl, e)}
                    title="View on GitHub"
                  >
                    <GitHubIcon fontSize="small" />
                  </GitHubButton>
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
                    onClick={() => handleOpenModal(project)}
                  >
                    View Details
                  </Button>
                  <Button variant="contained" color="secondary" size="small">
                    Live Demo
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </QuestCard>
        ))}
      </Stack>

      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: { backdropFilter: 'blur(10px)' },
        }}
      >
        <Fade in={!!selectedProject}>
          <ModalContainer>
            {selectedProject && (
              <>
                <ModalHeader>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="h4" color="primary">
                      {selectedProject.title}
                    </Typography>
                    <GitHubButton
                      size="small"
                      onClick={(e) => handleGitHubClick(selectedProject.githubUrl, e)}
                    >
                      <GitHubIcon />
                    </GitHubButton>
                  </Stack>
                  <IconButton
                    onClick={handleCloseModal}
                    sx={{
                      color: 'primary.main',
                      '&:hover': {
                        background: 'primary.main',
                        color: 'background.paper',
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </ModalHeader>

                <ImageContainer>
                  {selectedProject.images.length > 1 && currentImageIndex > 0 && (
                    <NavigationButton
                      className="left"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeftIcon />
                    </NavigationButton>
                  )}
                  
                  <ProjectImage
                    src={selectedProject.images[currentImageIndex].url}
                    alt={selectedProject.images[currentImageIndex].alt}
                    style={{ width: 'auto', height: 'auto', maxWidth: '90%', maxHeight: '90%' }}
                  />
                  
                  {selectedProject.images.length > 1 && currentImageIndex < selectedProject.images.length - 1 && (
                    <NavigationButton
                      className="right"
                      onClick={handleNextImage}
                    >
                      <ChevronRightIcon />
                    </NavigationButton>
                  )}

                  {selectedProject.images.length > 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 1,
                      }}
                    >
                      {selectedProject.images.map((_, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: index === currentImageIndex ? 'primary.main' : 'rgba(255, 255, 255, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </Box>
                  )}
                </ImageContainer>

                <ModalContent>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {selectedProject.longDescription}
                  </Typography>
                  
                  <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                    <Box>
                      <Typography variant="h6" color="primary" gutterBottom>
                        Tech Stack
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {selectedProject.techStack.map((tech, index) => (
                          <Chip key={index} label={tech} size="small" color="primary" />
                        ))}
                      </Stack>
                    </Box>
                    
                    <Box>
                      <Typography variant="h6" color="success.main" gutterBottom>
                        Achievements
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {selectedProject.rewards.map((reward, index) => (
                          <Chip key={index} label={reward} size="small" color="success" />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </ModalContent>
              </>
            )}
          </ModalContainer>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ProjectsSection;