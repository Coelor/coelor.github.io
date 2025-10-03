import { Box, Typography, Stack, Chip, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { SkillsSectionProps } from '../types/portfolio';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 4px 20px ${theme.palette.primary.main}15`,
    transform: 'translateY(-4px)',
  },
}));

const SkillBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2.5),
}));

const ExperienceChip = styled(Chip)(({ theme }) => ({
  backgroundColor: `${theme.palette.success.main}15`,
  color: theme.palette.success.main,
  border: `1px solid ${theme.palette.success.main}30`,
  fontSize: '0.75rem',
  fontWeight: 500,
  height: '24px',
}));

const SkillsSection = ({ skillCategories }: SkillsSectionProps) => {
  return (
    <SectionContainer id="skills">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{
            background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Skills & Expertise
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
          Technologies and tools I work with to build exceptional digital experiences
        </Typography>
      </Box>
      
      <Stack spacing={4}>
        {skillCategories.map((category, index) => (
          <SkillCard key={index}>
            <Typography 
              variant="h4" 
              color="primary" 
              gutterBottom
              sx={{ mb: 3 }}
            >
              {category.title}
            </Typography>
            
            <Stack spacing={2}>
              {category.skills.map((skill, skillIndex) => (
                <Box key={skillIndex}>
                  <Stack 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="center" 
                    sx={{ mb: 1 }}
                  >
                    <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 500 }}>
                      {skill.name}
                    </Typography>
                    <ExperienceChip
                      label={skill.experience}
                      size="small"
                    />
                  </Stack>
                  
                  <SkillBar>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        flex: 1,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: (theme) => `${theme.palette.primary.main}15`,
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        },
                      }}
                    />
                    <Typography 
                      variant="body2" 
                      color="primary" 
                      sx={{ minWidth: 45, textAlign: 'right', fontWeight: 600 }}
                    >
                      {skill.level}%
                    </Typography>
                  </SkillBar>
                </Box>
              ))}
            </Stack>
          </SkillCard>
        ))}
      </Stack>
    </SectionContainer>
  );
};

export default SkillsSection;