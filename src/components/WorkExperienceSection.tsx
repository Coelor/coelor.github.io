import { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Card,
  CardContent,
  Container,
  Modal,
  IconButton,
  Backdrop,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LaunchIcon from '@mui/icons-material/Launch';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { WorkExperienceSectionProps, Project } from '../types/portfolio';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const ExperienceCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  marginBottom: theme.spacing(4),
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  background: theme.palette.grey[50],
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-4px)',
  },
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
  borderRadius: '12px',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  outline: 'none',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
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
  background: theme.palette.grey[50],
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

const WorkExperienceSection = ({ workExperience }: WorkExperienceSectionProps) => {
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
    <SectionContainer id="experience">
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
            Professional Experience
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
            My work history and key projects that showcase my technical expertise
          </Typography>
        </Box>

        <Stack spacing={4}>
        {workExperience.map((experience) => (
          <ExperienceCard key={experience.id}>
            <CardContent sx={{ p: 4 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} sx={{ mb: 3 }}>
                <Box>
                  <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                    {experience.position}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <BusinessIcon sx={{ fontSize: '1.2rem', color: 'text.secondary' }} />
                      <Typography variant="h6" color="text.secondary" sx={{ fontSize: '1rem' }}>
                        {experience.company}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CalendarTodayIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {experience.duration}
                      </Typography>
                    </Stack>
                    {experience.location && (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOnIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {experience.location}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                </Box>
              </Stack>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                {experience.responsibilities}
              </Typography>

              {experience.projects.length > 0 && (
                <Box>
                  <Typography variant="h6" color="text.primary" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                    Key Projects
                  </Typography>
                  <Stack spacing={3}>
                    {experience.projects.map((project) => (
                      <ProjectCard key={project.id} onClick={() => handleOpenModal(project)}>
                        <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                            {project.title}
                          </Typography>

                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, flex: 1 }}>
                            {project.description}
                          </Typography>

                          <Box sx={{ mb: 2 }}>
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
                              {project.githubUrl && (
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  size="small"
                                  startIcon={<GitHubIcon />}
                                  onClick={(e) => handleLinkClick(project.githubUrl!, e)}
                                >
                                  GitHub
                                </Button>
                              )}
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
                </Box>
              )}
            </CardContent>
          </ExperienceCard>
                        ))}
                        </Stack>
                      </Container>

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
                  <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
                    {selectedProject.title}
                  </Typography>
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
                    <NavigationButton className="left" onClick={handlePrevImage}>
                      <ChevronLeftIcon />
                    </NavigationButton>
                  )}

                  <ProjectImage
                    src={selectedProject.images[currentImageIndex].url}
                    alt={selectedProject.images[currentImageIndex].alt}
                  />

                  {selectedProject.images.length > 1 && currentImageIndex < selectedProject.images.length - 1 && (
                    <NavigationButton className="right" onClick={handleNextImage}>
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
                            background: index === currentImageIndex ? 'primary.main' : 'rgba(0, 0, 0, 0.3)',
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
                      <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: '1rem', fontWeight: 600 }}>
                        Technologies
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {selectedProject.techStack.map((tech, index) => (
                          <Chip key={index} label={tech} size="small" color="primary" variant="outlined" />
                        ))}
                      </Stack>
                    </Box>

                    <Box>
                      <Typography variant="h6" color="success.main" gutterBottom sx={{ fontSize: '1rem', fontWeight: 600 }}>
                        Key Highlights
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {selectedProject.highlights.map((highlight, index) => (
                          <Chip key={index} label={highlight} size="small" color="success" variant="outlined" />
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

export default WorkExperienceSection;