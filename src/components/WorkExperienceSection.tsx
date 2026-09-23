import {
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Card,
  CardContent,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { WorkExperienceSectionProps, Project } from '../types/portfolio';
import { useProjectModal } from '../hooks/useProjectModal';
import ProjectModal from './ProjectModal';

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
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
}));

const WorkExperienceSection = ({ workExperience }: WorkExperienceSectionProps) => {
  const { selectedProject, currentImageIndex, openModal, closeModal, nextImage, prevImage, selectImage } =
    useProjectModal();

  // Only opens the modal for a keydown that lands directly on the card
  // itself — a keydown bubbling up from a focused nested link (GitHub/Live
  // Demo) shouldn't also open the modal, mirroring how those links' own
  // onClick already stops the click from reaching the card.
  const handleCardKeyDown = (e: React.KeyboardEvent, project: Project) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
      e.preventDefault();
      openModal(project);
    }
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
                  <Typography variant="h4" component="h3" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                    {experience.position}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <BusinessIcon sx={{ fontSize: '1.2rem', color: 'text.secondary' }} />
                      <Typography variant="h6" component="p" color="text.secondary" sx={{ fontSize: '1rem' }}>
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
                  <Typography variant="h6" component="p" color="text.primary" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                    Key Projects
                  </Typography>
                  <Stack spacing={3}>
                    {experience.projects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`View details for ${project.title}`}
                        onClick={() => openModal(project)}
                        onKeyDown={(e) => handleCardKeyDown(e, project)}
                      >
                        <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" component="h4" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                            {project.title}
                          </Typography>

                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, flex: 1 }}>
                            {project.description}
                          </Typography>

                          <Box sx={{ mb: 2 }}>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              {project.techStack.map((tech) => (
                                <Chip
                                  key={tech}
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
                                  component="a"
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  variant="outlined"
                                  color="primary"
                                  size="small"
                                  startIcon={<GitHubIcon />}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  GitHub
                                </Button>
                              )}
                              {project.liveUrl && (
                                <Button
                                  component="a"
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  variant="contained"
                                  color="primary"
                                  size="small"
                                  startIcon={<LaunchIcon />}
                                  onClick={(e) => e.stopPropagation()}
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

      <ProjectModal
        project={selectedProject}
        currentImageIndex={currentImageIndex}
        onClose={closeModal}
        onNextImage={nextImage}
        onPrevImage={prevImage}
        onSelectImage={selectImage}
      />
    </SectionContainer>
  );
};

export default WorkExperienceSection;
