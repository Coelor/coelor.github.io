import { useState, useEffect, useMemo } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { NavigationProps } from '../types/portfolio';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: '280px',
  background: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  overflow: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '260px',
    padding: theme.spacing(2.5),
  },
  [theme.breakpoints.down('sm')]: {
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '4px 0 16px rgba(0, 0, 0, 0.1)',
    '&.open': {
      transform: 'translateX(0)',
    },
  },
}));

const NameSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  cursor: 'pointer',
  '&:hover .name': {
    color: theme.palette.primary.main,
  },
}));

const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  color: theme.palette.text.primary,
  lineHeight: 1.2,
  margin: 0,
  transition: 'color 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '0.9rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.4,
  margin: 0,
  marginTop: theme.spacing(0.5),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const NameRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  gap: theme.spacing(1.5),
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
  },
}));


const NavLinksWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const NavLinksGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

const NavLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  fontWeight: 500,
  fontSize: '0.95rem',
  textTransform: 'none',
  padding: theme.spacing(1.25, 1.5),
  minWidth: 'auto',
  width: '100%',
  justifyContent: 'flex-start',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  backgroundColor: active ? `${theme.palette.primary.main}08` : 'transparent',
  border: 'none',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  borderRadius: '8px',
  borderLeft: active ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}08`,
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  '&:focus': {
    outline: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    padding: theme.spacing(1, 1.25),
  },
}));

const ContactSection = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  paddingTop: theme.spacing(3),
  borderTop: `1px solid ${theme.palette.divider}20`,
}));

const ContactHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.85rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));


const ContactLink = styled(Button)(({ theme }) => ({
  minWidth: '40px',
  width: '40px',
  height: '40px',
  padding: 0,
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.primary,
  borderRadius: '8px',
  border: 'none',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    transform: 'translateY(-2px)',
  },
  '&:last-child': {
    marginRight: 0,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '36px',
    width: '36px',
    height: '36px',
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },
  },
}));

const ResumeButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: '0.95rem',
  borderRadius: '8px',
  textTransform: 'none',
  marginBottom: theme.spacing(2),
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
  },
}));

const MobileToggle = styled(Button)(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1001,
  minWidth: 'auto',
  width: '48px',
  height: '48px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const MobileOverlay = styled(Box)(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  opacity: 0,
  transition: 'opacity 0.3s ease',
  '&.open': {
    opacity: 1,
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const Navigation = ({ navigation, resumeUrl, contactMethods, personalName, personalTitle }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(() => navigation, [navigation]);

  const getContactIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'email':
        return <EmailIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'github':
        return <GitHubIcon />;
      default:
        return <EmailIcon />;
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Throttle scroll events to reduce jumping
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = navItems.map(item => item.id);
        const scrollPosition = window.scrollY;
        const offset = 100; // Offset for better section detection

        let currentActiveSection = 'hero'; // Default to hero

        // Check each section to see which one is currently in view
        for (let i = 0; i < sections.length; i++) {
          const sectionId = sections[i];
          const element = document.getElementById(sectionId);
          
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;
            
            // If we're in this section's area
            if (scrollPosition + offset >= elementTop && scrollPosition + offset < elementBottom) {
              currentActiveSection = sectionId;
            }
            // If we've scrolled past all sections, highlight the last one
            else if (i === sections.length - 1 && scrollPosition + offset >= elementTop) {
              currentActiveSection = sectionId;
            }
          }
        }

        setActiveSection(currentActiveSection);
      }, 50); // Small delay to throttle
    };

    // Initial call to set correct section on load
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId); // Immediate visual feedback
      
      const offset = 50; // Small offset for better positioning
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setMobileOpen(false);
    }
  };

  return (
    <>
      <MobileToggle onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </MobileToggle>

      <MobileOverlay
        className={mobileOpen ? 'open' : ''}
        onClick={() => setMobileOpen(false)}
      />
      
      <NavContainer className={mobileOpen ? 'open' : ''}>
        <NameSection onClick={() => scrollToSection('hero')}>
          <Name className="name">
            {personalName}
          </Name>
          <Title>
            {personalTitle}
          </Title>
        </NameSection>
        
        <NavLinksWrapper>
          <NavLinksGroup>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                active={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinksGroup>

          {resumeUrl && (
            <ResumeButton
              component="a"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionIcon />}
            >
              Download Resume
            </ResumeButton>
          )}
          
          <ContactSection>
            <ContactHeader>
              Connect
            </ContactHeader>
            <Stack direction="row" spacing={1}>
              {contactMethods.map((contact) => (
                <ContactLink
                  key={contact.label}
                  component="a"
                  href={contact.url}
                  target={contact.label !== 'Email' ? '_blank' : '_self'}
                  rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={`Contact via ${contact.label}`}
                  title={`Contact via ${contact.label}`}
                >
                  {getContactIcon(contact.label)}
                </ContactLink>
              ))}
            </Stack>
          </ContactSection>
        </NavLinksWrapper>
      </NavContainer>
    </>
  );
};

export default Navigation;