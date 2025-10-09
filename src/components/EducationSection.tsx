import { Box, Typography, Stack, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import type { EducationSectionProps } from '../types/portfolio';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.grey[50],
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const EducationCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-4px)',
  },
}));

const CertificationCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    borderColor: theme.palette.success.main,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  marginBottom: theme.spacing(2),
}));

const EducationSection = ({ education, certifications }: EducationSectionProps) => {
  return (
    <SectionContainer id="education">
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
            Education & Certifications
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
            Academic background and professional credentials
          </Typography>
        </Box>

        {/* Education Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" color="text.primary" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
            Education
          </Typography>
          <Stack spacing={3}>
            {education.map((edu) => (
              <EducationCard key={edu.id}>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <IconWrapper>
                      <SchoolIcon sx={{ fontSize: '2rem' }} />
                    </IconWrapper>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="h6" color="text.primary" gutterBottom sx={{ fontSize: '1.1rem' }}>
                        {edu.school}
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <CalendarTodayIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {edu.year}
                          </Typography>
                        </Stack>
                        {edu.location && (
                          <Stack direction="row" spacing={1} alignItems="center">
                            <LocationOnIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {edu.location}
                            </Typography>
                          </Stack>
                        )}
                      </Stack>
                      {edu.description && (
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {edu.description}
                        </Typography>
                      )}
                    </Box>
                  </Stack>
                </CardContent>
              </EducationCard>
            ))}
          </Stack>
        </Box>

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <Box>
            <Typography variant="h4" color="text.primary" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
              Professional Certifications
            </Typography>
            <Stack spacing={2}>
              {certifications.map((cert) => (
                <CertificationCard
                  key={cert.id}
                  component={cert.credentialUrl ? 'a' : 'div'}
                  href={cert.credentialUrl}
                  target={cert.credentialUrl ? '_blank' : undefined}
                  rel={cert.credentialUrl ? 'noopener noreferrer' : undefined}
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'success.main',
                          color: 'white',
                        }}
                      >
                        <VerifiedIcon />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {cert.name}
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                          <Typography variant="body2" color="text.secondary">
                            {cert.issuer}
                          </Typography>
                          <Chip
                            icon={<EmojiEventsIcon />}
                            label={cert.year}
                            size="small"
                            color="success"
                            variant="outlined"
                          />
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </CertificationCard>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </SectionContainer>
  );
};

export default EducationSection;