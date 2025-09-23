import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00F5FF',
      light: '#4DFFFF',
      dark: '#00B8CC',
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
      main: '#39FF14',
      light: '#6AFF4D',
      dark: '#2BCC0A',
      contrastText: '#000000',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    divider: '#333333',
    grey: {
      50: '#F5F5F5',
      100: '#E0E0E0',
      200: '#CCCCCC',
      300: '#B0B0B0',
      400: '#999999',
      500: '#666666',
      600: '#4D4D4D',
      700: '#333333',
      800: '#1A1A1A',
      900: '#0A0A0A',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '0.1em',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '0.08em',
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
      fontSize: '2rem',
      letterSpacing: '0.06em',
    },
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: '0.04em',
    },
    h5: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 400,
      fontSize: '1.25rem',
      letterSpacing: '0.02em',
    },
    h6: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: '0.02em',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#00F5FF #1A1A1A',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1A1A1A',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#00F5FF',
            borderRadius: '4px',
          },
        },
      },
    },
  },
});

export default theme;