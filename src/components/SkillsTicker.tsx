import { Box, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import type { SkillsTickerProps } from '../types/portfolio';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TickerContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2, 0),
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100px',
    zIndex: 2,
    pointerEvents: 'none',
  },
  '&::before': {
    left: 0,
    background: `linear-gradient(to right, ${theme.palette.background.paper}, transparent)`,
  },
  '&::after': {
    right: 0,
    background: `linear-gradient(to left, ${theme.palette.background.paper}, transparent)`,
  },
}));

const TickerTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  animation: `${scroll} 30s linear infinite`,
  // Hover pauses for mouse users; :focus-visible gives keyboard users the
  // same control now that the track itself is a tab stop (tabIndex below).
  '&:hover, &:focus-visible': {
    animationPlayState: 'paused',
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '4px',
  },
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: '0.9rem',
  padding: theme.spacing(1, 2),
  height: 'auto',
  borderRadius: '20px',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

const SkillsTicker = ({ skills }: SkillsTickerProps) => {
  return (
    <TickerContainer>
      <TickerTrack tabIndex={0} aria-label="Technical skills">
        {skills.map((skill) => (
          <SkillChip key={skill.name} label={skill.name} />
        ))}
        {/* A second, visual-only copy makes the scroll loop seamless.
            display: contents keeps it out of the layout box (so it still
            lays out as if its children were direct flex items) while
            aria-hidden keeps assistive tech from announcing the same
            skill list twice. */}
        <Box aria-hidden="true" sx={{ display: 'contents' }}>
          {skills.map((skill) => (
            <SkillChip key={`${skill.name}-duplicate`} label={skill.name} />
          ))}
        </Box>
      </TickerTrack>
    </TickerContainer>
  );
};

export default SkillsTicker;