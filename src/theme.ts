import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D9FF',
      light: '#4DFFFF',
      dark: '#00A8CC',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FF6B35',
      light: '#FF9968',
      dark: '#CC4A1A',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF4444',
      light: '#FF7777',
      dark: '#CC2222',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#00D9A3',
      light: '#4DFFCC',
      dark: '#00A87A',
      contrastText: '#000000',
    },
    background: {
      default: '#0F0F0F',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0A0',
    },
    divider: '#2A2A2A',
    grey: {
      50: '#F5F5F5',
      100: '#E0E0E0',
      200: '#CCCCCC',
      300: '#A0A0A0',
      400: '#808080',
      500: '#666666',
      600: '#4D4D4D',
      700: '#2A2A2A',
      800: '#1A1A1A',
      900: '#0F0F0F',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0em',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#00D9FF #1A1A1A',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1A1A1A',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#00D9FF',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#4DFFFF',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          fontSize: '0.95rem',
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 217, 255, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;