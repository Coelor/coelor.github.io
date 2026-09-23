import { Backdrop, Box, ButtonBase, Chip, Fade, IconButton, Modal, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import type { Project } from '../types/portfolio';

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

// A real ButtonBase (renders a <button>) rather than a plain onClick'd Box,
// so each dot is keyboard-focusable and activatable with Enter/Space for
// free, with no manual key handling needed.
const ImageDot = styled(ButtonBase)(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  transition: 'all 0.3s ease',
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
}));

interface ProjectModalProps {
  project: Project | null;
  currentImageIndex: number;
  onClose: () => void;
  onNextImage: () => void;
  onPrevImage: () => void;
  onSelectImage: (index: number) => void;
}

// Shared by ProjectsSection and WorkExperienceSection — both used to define
// this exact modal independently. MUI's Modal already provides focus
// trapping, return-focus-on-close, and Escape-to-close for free.
const ProjectModal = ({
  project,
  currentImageIndex,
  onClose,
  onNextImage,
  onPrevImage,
  onSelectImage,
}: ProjectModalProps) => {
  return (
    <Modal
      open={!!project}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="project-modal-title"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backdropFilter: 'blur(8px)' },
        },
      }}
    >
      <Fade in={!!project}>
        <ModalContainer>
          {project && (
            <>
              <ModalHeader>
                <Typography id="project-modal-title" variant="h4" component="h2" color="primary">
                  {project.title}
                </Typography>
                <IconButton
                  onClick={onClose}
                  aria-label="Close project details"
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
                {project.images.length > 1 && currentImageIndex > 0 && (
                  <NavigationButton className="left" onClick={onPrevImage} aria-label="Previous image">
                    <ChevronLeftIcon />
                  </NavigationButton>
                )}

                <ProjectImage
                  src={project.images[currentImageIndex].url}
                  alt={project.images[currentImageIndex].alt}
                />

                {project.images.length > 1 && currentImageIndex < project.images.length - 1 && (
                  <NavigationButton className="right" onClick={onNextImage} aria-label="Next image">
                    <ChevronRightIcon />
                  </NavigationButton>
                )}

                {project.images.length > 1 && (
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
                    {project.images.map((_, index) => (
                      <ImageDot
                        key={index}
                        onClick={() => onSelectImage(index)}
                        aria-label={`View image ${index + 1} of ${project.images.length}`}
                        aria-current={index === currentImageIndex ? 'true' : undefined}
                        sx={{
                          background: index === currentImageIndex ? 'primary.main' : 'rgba(0, 0, 0, 0.3)',
                        }}
                      />
                    ))}
                  </Box>
                )}
              </ImageContainer>

              <ModalContent>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                  {project.longDescription}
                </Typography>

                <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                  <Box>
                    <Typography variant="h6" component="h3" color="primary" gutterBottom sx={{ fontSize: '1rem' }}>
                      Technologies
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.techStack.map((tech) => (
                        <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                      ))}
                    </Stack>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      color="success.main"
                      gutterBottom
                      sx={{ fontSize: '1rem', fontWeight: 600 }}
                    >
                      Key Highlights
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.highlights.map((highlight) => (
                        <Chip key={highlight} label={highlight} size="small" color="success" variant="outlined" />
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
  );
};

export default ProjectModal;
