import { Box, Typography, Stack, Chip, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import type { ProjectsSectionProps } from '../types/portfolio';
import { useProjectModal } from '../hooks/useProjectModal';
import ProjectModal, { ProjectModalTrigger } from './ProjectModal';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-4px)',
  },
}));

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const { selectedProject, currentImageIndex, openModal, closeModal, nextImage, prevImage, selectImage } =
    useProjectModal();

  return (
    <SectionContainer id="projects">
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: 'text.primary',
              fontWeight: 700,
            }}
          >
            Personal Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
            Side projects and experiments showcasing creativity and technical skills
          </Typography>
        </Box>

      <Stack spacing={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} onClick={() => openModal(project)}>
            <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                <ProjectModalTrigger
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(project);
                  }}
                >
                  {project.title}
                </ProjectModalTrigger>
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, flex: 1 }}>
                {project.description}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" component="p" color="text.primary" gutterBottom sx={{ fontSize: '0.95rem', fontWeight: 600 }}>
                  Tech Stack
                </Typography>
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

export default ProjectsSection;
