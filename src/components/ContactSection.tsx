import { useState } from 'react';
import { Box, Typography, Stack, TextField, Button, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ContactSectionProps, ContactForm } from '../types/portfolio';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  boxShadow: 'none',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.default,
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ContactMethodCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  background: theme.palette.background.default,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 4px 16px ${theme.palette.primary.main}15`,
  },
}));

const ContactSection = ({ contactMethods }: ContactSectionProps) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', formData);
  };

  return (
    <SectionContainer id="contact">
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
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
          Have a project in mind or want to collaborate? Let's connect
        </Typography>
      </Box>
      
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4}>
        <Box sx={{ flex: 1 }}>
          <ContactCard>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Send a Message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                I'll get back to you as soon as possible
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <StyledTextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  
                  <StyledTextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <StyledTextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  
                  <StyledTextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 500,
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </ContactCard>
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <ContactCard>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Feel free to reach out through any of these channels
              </Typography>
              
              <Stack spacing={3}>
                {contactMethods.map((method, index) => (
                  <ContactMethodCard
                    key={index}
                    onClick={() => method.url && window.open(method.url, '_blank')}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant="h6" color="primary" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                          {method.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {method.value}
                        </Typography>
                      </Box>
                      <Chip
                        label={method.status}
                        size="small"
                        color="success"
                        sx={{ fontWeight: 500 }}
                      />
                    </Stack>
                  </ContactMethodCard>
                ))}
              </Stack>
              
              <Box sx={{ mt: 4, p: 3, backgroundColor: (theme) => `${theme.palette.primary.main}10`, borderRadius: '12px', border: (theme) => `1px solid ${theme.palette.primary.main}20` }}>
                <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: '1rem' }}>
                  Response Time
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  I typically respond to all inquiries within 24 hours. For urgent matters, 
                  feel free to reach out via email or LinkedIn.
                </Typography>
              </Box>
            </CardContent>
          </ContactCard>
        </Box>
      </Stack>
    </SectionContainer>
  );
};

export default ContactSection;