import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import { portfolioData } from '../data/portfolioData';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// The fallback below replaces the whole app, including the nav's contact
// links, so it needs its own working contact link rather than referring to
// links that are no longer on the page.
const emailContact = portfolioData.contactMethods.find((method) => method.label === 'Email');

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 2,
            p: 4,
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Something went wrong
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '480px' }}>
            Please refresh the page.
            {emailContact && (
              <>
                {' '}
                If the problem persists, reach out at{' '}
                <Link href={emailContact.url} color="inherit">
                  {emailContact.value}
                </Link>
                .
              </>
            )}
          </Typography>
          <Button variant="contained" onClick={() => window.location.reload()}>
            Refresh
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
