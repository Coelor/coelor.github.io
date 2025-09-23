import React, { useState, useEffect, useMemo } from 'react';
import { Box, IconButton, Typography, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const HotbarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: `linear-gradient(135deg, ${theme.palette.background.paper}E6 0%, rgba(0, 245, 255, 0.1) 100%)`,
  backdropFilter: 'blur(10px)',
  border: `2px solid ${theme.palette.primary.main}60`,
  borderRadius: '50px',
  padding: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1),
  boxShadow: `0 0 30px ${theme.palette.primary.main}30`,
  zIndex: 1000,
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': { transform: 'translateX(-50%) translateY(0px)' },
    '50%': { transform: 'translateX(-50%) translateY(-5px)' },
  },
}));

const HotbarButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: active 
    ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
    : 'rgba(255, 255, 255, 0.1)',
  border: active 
    ? `2px solid ${theme.palette.primary.main}`
    : `2px solid transparent`,
  color: active ? theme.palette.common.black : theme.palette.text.primary,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}80, ${theme.palette.secondary.main}80)`,
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.common.black,
    transform: 'scale(1.1)',
    boxShadow: `0 0 20px ${theme.palette.primary.main}60`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}40, transparent)`,
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%',
  },
}));

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = useMemo(() => [
    { id: 'hero', icon: HomeOutlinedIcon, label: 'Home', color: 'primary' },
    { id: 'projects', icon: WorkOutlineOutlinedIcon, label: 'Projects', color: 'secondary' },
    { id: 'skills', icon: EmojiEventsOutlinedIcon, label: 'Skills', color: 'success' },
    { id: 'about', icon: PermIdentityOutlinedIcon, label: 'About', color: 'primary' },
{ id: 'contact', icon: MailOutlineOutlinedIcon, label: 'Contact', color: 'primary' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HotbarContainer>
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Tooltip 
            key={item.id} 
            title={
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" fontWeight="bold">
                  {item.label}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Navigate to {item.label.toLowerCase()}
                </Typography>
              </Box>
            }
            placement="top"
            arrow
          >
            <HotbarButton
              active={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
            >
              <IconComponent sx={{ fontSize: '28px' }} />
            </HotbarButton>
          </Tooltip>
        );
      })}
    </HotbarContainer>
  );
};

export default Navigation;