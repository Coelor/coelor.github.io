import { useState } from 'react';
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
import type { ProjectsSectionProps, Project } from '../types/portfolio';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 8px 24px ${theme.palette.primary.main}15`,
    transform: 'translateY(-8px)',
  },
}));

const DifficultyChip = styled(Chip)(({ theme, difficulty }: { theme: any; difficulty: string }) => {
  const colors = {
    Easy: theme.palette.success.main,
    Medium: '#FFB020',
    Hard: theme.palette.error.main,
    Expert: theme.palette.primary.main,
  };
  
  return {
    backgroundColor: `${colors[difficulty as keyof typeof colors]}15`,
    color: colors[difficulty as keyof typeof colors],
    border: `1px solid ${colors[difficulty as keyof typeof colors]}30`,
    fontWeight: 500,
    fontSize: '0.75rem',
  };
});

const StatusChip = styled(Chip)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '0.75rem',
}));

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '1200px',
  height: '90vh',
  maxHeight: '800px',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  boxShadow: '0 24px 48px rgba(0, 0, 0, 0.5)',
  outline: 'none',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
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
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.primary.main,
  width: '48px',
  height: '48px',
  zIndex: 10,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.main,
  },
  '&.left': {
    left: theme.spacing(2),
  },
  '&.right': {
    right: theme.spacing(2),
  },
}));

const ProjectImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  borderRadius: '8px',
});

const ModalContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  maxHeight: '200px',
  overflowY: 'auto',
}));

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
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

  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <SectionContainer id="projects">
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
          Featured Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
          A showcase of my recent work and technical achievements
        </Typography>
      </Box>
      
      <Stack spacing={4}>
        {projects.map((project, index) => (
          <ProjectCard key={index} onClick={() => handleOpenModal(project)}>
            <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                <Typography variant="h4" color="primary" gutterBottom>
                  {project.title}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <DifficultyChip
                    label={project.difficulty}
                    size="small"
                    difficulty={project.difficulty}
                  />
                  <StatusChip
                    label={project.status}
                    size="small"
                    color={project.status === 'Completed' ? 'success' : 'warning'}
                    variant="outlined"
                  />
                </Stack>
              </Stack>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, flex: 1 }}>
                {project.description}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontSize: '0.95rem', fontWeight: 600 }}>
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
              
              <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                <Typography variant="body2" color="text.secondary">
                  {project.completionDate}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    size="small"
                    startIcon={<GitHubIcon />}
                    onClick={(e) => handleLinkClick(project.githubUrl, e)}
                  >
                    GitHub
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="small"
                      startIcon={<LaunchIcon />}
                      onClick={(e) => handleLinkClick(project.liveUrl!, e)}
                    >
                      Live Demo
                    </Button>
                  )}
                </Stack>
              </Stack>
            </CardContent>
          </ProjectCard>
        ))}
      </Stack>

      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backdropFilter: 'blur(8px)' },
          },
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
                  </Stack>
                  <IconButton
                    onClick={handleCloseModal}
                    sx={{
                      color: 'text.primary',
                      '&:hover': {
                        background: 'primary.main',
                        color: 'primary.contrastText',
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
                      <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: '1rem' }}>
                        Technologies
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {selectedProject.techStack.map((tech, index) => (
                          <Chip key={index} label={tech} size="small" color="primary" variant="outlined" />
                        ))}
                      </Stack>
                    </Box>
                    
                    <Box>
                      <Typography variant="h6" color="success.main" gutterBottom sx={{ fontSize: '1rem' }}>
                        Key Features
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {selectedProject.rewards.map((reward, index) => (
                          <Chip key={index} label={reward} size="small" color="success" variant="outlined" />
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
    </SectionContainer>
  );
};

export default ProjectsSection;