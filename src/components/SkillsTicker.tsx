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

const TickerTrack = styled(Box)({
  display: 'flex',
  gap: '16px',
  animation: `${scroll} 30s linear infinite`,
  '&:hover': {
    animationPlayState: 'paused',
  },
});

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
  // Duplicate skills array to create seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <TickerContainer>
      <TickerTrack>
        {duplicatedSkills.map((skill, index) => (
          <SkillChip
            key={`${skill.name}-${index}`}
            label={skill.name}
          />
        ))}
      </TickerTrack>
    </TickerContainer>
  );
};

export default SkillsTicker;