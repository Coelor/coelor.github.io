import React from 'react';
import { Box, Typography, Avatar, Stack, Chip, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HeroSectionProps } from '../types/portfolio';

const GlowingCard = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(0, 245, 255, 0.1) 100%)`,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '16px',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, transparent 30%, ${theme.palette.primary.main}20 50%, transparent 70%)`,
    animation: 'shimmer 3s infinite',
  },
  '@keyframes shimmer': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
}));

const StatBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const GlowingAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: `3px solid ${theme.palette.primary.main}`,
  boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
  animation: 'glow 2s ease-in-out infinite alternate',
  '@keyframes glow': {
    from: { boxShadow: `0 0 20px ${theme.palette.primary.main}40` },
    to: { boxShadow: `0 0 30px ${theme.palette.primary.main}80` },
  },
}));

const HeroSection: React.FC<HeroSectionProps> = ({ personal, coreStats }) => {
  return (
    <Box id="hero" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 4 }}>
      <GlowingCard sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
          <Box sx={{ textAlign: 'center' }}>
            <GlowingAvatar
              src={personal.avatar}
              alt="Character Avatar"
              sx={{ mx: 'auto', mb: 2 }}
            />
            <Typography variant="h4" color="primary" gutterBottom>
              {personal.level}
            </Typography>
            <Chip
              label={personal.role}
              color="secondary"
              sx={{ 
                fontSize: '0.9rem',
                fontWeight: 'bold',
                boxShadow: `0 0 10px ${(theme) => theme.palette.secondary.main}40`,
              }}
            />
          </Box>
          
          <Box sx={{ flex: 1, width: '100%' }}>
            <Typography variant="h2" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {personal.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {personal.title}
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Core Stats
              </Typography>
              {coreStats.map((stat) => (
                <StatBar key={stat.label}>
                  <Typography variant="body2" sx={{ minWidth: 80 }}>
                    {stat.label}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={stat.value}
                    sx={{
                      flex: 1,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        background: `linear-gradient(90deg, ${(theme) => theme.palette.primary.main}, ${(theme) => theme.palette.secondary.main})`,
                        boxShadow: `0 0 10px ${(theme) => theme.palette.primary.main}60`,
                      },
                    }}
                  />
                  <Typography variant="body2" color="primary" sx={{ minWidth: 40, textAlign: 'right' }}>
                    {stat.value}%
                  </Typography>
                </StatBar>
              ))}
            </Box>
          </Box>
        </Stack>
      </GlowingCard>
    </Box>
  );
};

export default HeroSection;