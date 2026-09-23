import { useState, useEffect, useMemo } from 'react';
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
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
})) as typeof Box;

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

// Active state is toggled via a plain `active` class (matching NavContainer/
// MobileOverlay's own className-based state elsewhere in this file) rather
// than a custom typed prop — styled() doesn't preserve Button's polymorphic
// `component` typing when combined with a custom generic prop, and a class
// sidesteps that entirely so `component="a" href={...}` below still works.
const NavLink = styled(Button)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '0.95rem',
  textTransform: 'none',
  padding: theme.spacing(1.25, 1.5),
  minWidth: 'auto',
  width: '100%',
  justifyContent: 'flex-start',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  border: 'none',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  borderRadius: '8px',
  borderLeft: '3px solid transparent',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}08`,
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  '&.active': {
    color: theme.palette.primary.main,
    backgroundColor: `${theme.palette.primary.main}08`,
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    padding: theme.spacing(1, 1.25),
  },
})) as unknown as typeof Button;

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
})) as unknown as typeof Button;

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
  const theme = useTheme();
  // Below the sm breakpoint the sidebar slides off-screen when closed; it has
  // to be inert then too, or keyboard users tab into links they can't see.
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

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

      // Update the URL fragment without letting the browser jump there on
      // its own (pushState doesn't scroll) — the custom offset scroll below
      // handles the actual positioning, but the address bar still reflects
      // the section, so links stay shareable/bookmarkable and back/forward
      // still works, same as clicking a plain <a href="#section"> would.
      window.history.pushState(null, '', `#${sectionId}`);

      const offset = 50; // Small offset for better positioning
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      setMobileOpen(false);
    }
  };

  // Real <a href="#section"> anchors give keyboard/screen-reader users
  // proper link semantics (open-in-new-tab, copy-link, URL fragments) while
  // this still drives the custom-offset smooth scroll for a plain click.
  // Modifier-clicks and non-primary buttons are left alone so the browser's
  // native anchor behavior (new tab, etc.) still works.
  const handleNavLinkClick = (e: React.MouseEvent, sectionId: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <MobileToggle
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileOpen}
        aria-controls="primary-navigation"
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </MobileToggle>

      <MobileOverlay
        className={mobileOpen ? 'open' : ''}
        onClick={() => setMobileOpen(false)}
      />
      
      <NavContainer
        component="nav"
        id="primary-navigation"
        aria-label="Primary"
        inert={isMobile && !mobileOpen}
        className={mobileOpen ? 'open' : ''}
      >
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
                component="a"
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavLinkClick(e, item.id)}
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
                  aria-label={`Contact via ${contact.label}`}
                  title={`Contact via ${contact.label}`}
                  onClick={() => {
                    if (contact.label === 'Email') {
                      window.location.href = contact.url;
                    } else {
                      window.open(contact.url, '_blank', 'noopener,noreferrer');
                    }
                  }}
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