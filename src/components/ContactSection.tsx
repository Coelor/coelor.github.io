import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, Button, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

import { portfolioData } from '../data/portfolioData';
const CommunicationInterface = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(0, 245, 255, 0.05) 100%)`,
  border: `2px solid ${theme.palette.primary.main}40`,
  borderRadius: '16px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.success.main})`,
    animation: 'scan 3s linear infinite',
  },
  '@keyframes scan': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
}));

const GlowingTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    '& fieldset': {
      borderColor: theme.palette.primary.main + '40',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main + '60',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 10px ${theme.palette.primary.main}40`,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
}));

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
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
    // Handle form submission
    console.log('Message sent:', formData);
  };

  const contactMethods = portfolioData.contact.methods;

  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Typography variant="h2" color="primary" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Communication Interface
      </Typography>
      
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4}>
        <Box sx={{ flex: 1 }}>
          <CommunicationInterface>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Send Message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Establish communication channel for collaboration opportunities
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <GlowingTextField
                    fullWidth
                    label="Commander Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  
                  <GlowingTextField
                    fullWidth
                    label="Communication Frequency (Email)"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <GlowingTextField
                    fullWidth
                    label="Mission Objective"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  
                  <GlowingTextField
                    fullWidth
                    label="Detailed Mission Brief"
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
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      boxShadow: `0 0 20px ${(theme) => theme.palette.primary.main}40`,
                      '&:hover': {
                        boxShadow: `0 0 30px ${(theme) => theme.palette.primary.main}60`,
                      },
                    }}
                  >
                    Transmit Message
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </CommunicationInterface>
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <CommunicationInterface>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" color="secondary.main" gutterBottom>
                Active Channels
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Available communication protocols and current status
              </Typography>
              
              <Stack spacing={3}>
                {contactMethods.map((method, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 3,
                      border: (theme) => `1px solid ${theme.palette.secondary.main}40`,
                      borderRadius: '12px',
                      background: 'rgba(255, 107, 53, 0.05)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                        boxShadow: (theme) => `0 0 15px ${theme.palette.secondary.main}30`,
                      },
                    }}
                    onClick={() => method.url && window.open(method.url, '_blank')}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant="h6" color="secondary.main">
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
                        sx={{
                          boxShadow: `0 0 8px ${(theme) => theme.palette.success.main}40`,
                        }}
                      />
                    </Stack>
                  </Box>
                ))}
              </Stack>
              
              <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(0, 245, 255, 0.1)', borderRadius: '12px' }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  Response Protocol
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {portfolioData.contact.responseMessage}
                </Typography>
              </Box>
            </CardContent>
          </CommunicationInterface>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactSection;