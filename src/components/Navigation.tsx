import { useState, useEffect, useMemo } from 'react';
import { Box, Button, Stack, useScrollTrigger, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const NavContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '24px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: `${theme.palette.background.paper}F5`,
  backdropFilter: 'blur(12px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  padding: theme.spacing(1.5),
  display: 'flex',
  gap: theme.spacing(1),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  zIndex: 1000,
  [theme.breakpoints.down('sm')]: {
    bottom: '16px',
    padding: theme.spacing(1),
    gap: theme.spacing(0.5),
  },
}));

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  minWidth: '48px',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  padding: 0,
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  color: active ? theme.palette.primary.contrastText : theme.palette.text.secondary,
  border: active ? 'none' : `1px solid transparent`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : `${theme.palette.primary.main}20`,
    color: active ? theme.palette.primary.contrastText : theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '22px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '44px',
    width: '44px',
    height: '44px',
    '& .MuiSvgIcon-root': {
      fontSize: '20px',
    },
  },
}));

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const navItems = useMemo(() => [
    { id: 'hero', icon: HomeOutlinedIcon, label: 'Home' },
    { id: 'skills', icon: EmojiEventsOutlinedIcon, label: 'Skills' },
    { id: 'projects', icon: WorkOutlineOutlinedIcon, label: 'Projects' },
    { id: 'about', icon: PermIdentityOutlinedIcon, label: 'About' },
    { id: 'contact', icon: MailOutlineOutlinedIcon, label: 'Contact' },
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
    <Slide appear={false} direction="up" in={!trigger || activeSection !== 'hero'}>
      <NavContainer>
        <Stack direction="row" spacing={1}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <NavButton
                key={item.id}
                active={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
              >
                <IconComponent />
              </NavButton>
            );
          })}
        </Stack>
      </NavContainer>
    </Slide>
  );
};

export default Navigation;