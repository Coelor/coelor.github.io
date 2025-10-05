import { Box, Typography, Stack, Card, CardContent, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { ContactSectionProps } from '../types/portfolio';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.grey[50],
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'block',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-4px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
}));

const ContactSection = ({ contactMethods }: ContactSectionProps) => {
  const getContactIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'email':
        return <EmailIcon sx={{ fontSize: '2rem' }} />;
      case 'linkedin':
        return <LinkedInIcon sx={{ fontSize: '2rem' }} />;
      case 'github':
        return <GitHubIcon sx={{ fontSize: '2rem' }} />;
      default:
        return <EmailIcon sx={{ fontSize: '2rem' }} />;
    }
  };

  return (
    <SectionContainer id="contact">
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
            Get In Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
            Feel free to reach out for collaborations, opportunities, or just to connect
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {contactMethods.map((contact) => (
            <ContactCard
              key={contact.label}
              component="a"
              href={contact.url}
              target={contact.label !== 'Email' ? '_blank' : '_self'}
              rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
              sx={{ flex: 1, maxWidth: { md: '300px' } }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <IconWrapper sx={{ mx: 'auto' }}>
                  {getContactIcon(contact.label)}
                </IconWrapper>
                <Typography variant="h5" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
                  {contact.label}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {contact.value}
                </Typography>
              </CardContent>
            </ContactCard>
          ))}
        </Stack>
      </Container>
    </SectionContainer>
  );
};

export default ContactSection;