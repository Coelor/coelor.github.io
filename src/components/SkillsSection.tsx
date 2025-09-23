import React from 'react';
import { Box, Typography, Stack, Chip, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SkillsSectionProps } from '../types/portfolio';

const SkillCard = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(57, 255, 20, 0.1) 100%)`,
  border: `1px solid ${theme.palette.success.main}40`,
  borderRadius: '12px',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    border: `2px solid ${theme.palette.success.main}`,
    boxShadow: `0 0 20px ${theme.palette.success.main}30`,
    transform: 'translateY(-4px)',
  },
}));

const SkillLevel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  return (
    <Box id="skills" sx={{ py: 8 }}>
      <Typography variant="h2" color="success.main" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Skill Tree
      </Typography>
      
      <Stack spacing={4}>
        {skillCategories.map((category, index) => (
          <SkillCard key={index}>
            <Typography variant="h4" color="success.main" gutterBottom>
              {category.title}
            </Typography>
            
            <Stack spacing={2}>
              {category.skills.map((skill, skillIndex) => (
                <Box key={skillIndex}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="h6">{skill.name}</Typography>
                    <Chip
                      label={skill.experience}
                      size="small"
                      color="success"
                      variant="outlined"
                      sx={{ fontSize: '0.75rem' }}
                    />
                  </Stack>
                  
                  <SkillLevel>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        flex: 1,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(57, 255, 20, 0.2)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 5,
                          background: `linear-gradient(90deg, ${(theme) => theme.palette.success.main}, ${(theme) => theme.palette.primary.main})`,
                          boxShadow: `0 0 8px ${(theme) => theme.palette.success.main}60`,
                        },
                      }}
                    />
                    <Typography variant="body2" color="success.main" sx={{ minWidth: 40, textAlign: 'right', fontWeight: 'bold' }}>
                      Lv.{skill.level}
                    </Typography>
                  </SkillLevel>
                </Box>
              ))}
            </Stack>
          </SkillCard>
        ))}
      </Stack>
    </Box>
  );
};

export default SkillsSection;