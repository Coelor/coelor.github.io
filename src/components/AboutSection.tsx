import { Box, Typography, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { AboutSectionProps } from '../types/portfolio';

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