import React from 'react';
import { Box, Typography, Stack, Card, CardContent, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const JournalEntry = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(57, 255, 20, 0.05) 100%)`,
  border: `1px solid ${theme.palette.success.main}40`,
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    border: `2px solid ${theme.palette.success.main}`,
    boxShadow: `0 0 20px ${theme.palette.success.main}20`,
    transform: 'translateY(-4px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '8px',
    height: '8px',
    backgroundColor: theme.palette.success.main,
    borderRadius: '50%',
    boxShadow: `0 0 10px ${theme.palette.success.main}`,
    animation: 'blink 2s infinite',
  },
  '@keyframes blink': {
    '0%, 50%': { opacity: 1 },
    '51%, 100%': { opacity: 0.3 },
  },
}));

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'Mission Log: Building Scalable React Applications',
      date: '2024-01-15',
      category: 'Frontend',
      excerpt: 'Discovered advanced patterns for building scalable React applications. Explored component composition, custom hooks, and state management strategies that have proven effective in large-scale projects.',
      readTime: '8 min read',
      tags: ['React', 'Architecture', 'Best Practices'],
    },
    {
      title: 'Quest Report: Mastering TypeScript in 2024',
      date: '2024-01-08',
      category: 'Development',
      excerpt: 'Deep dive into advanced TypeScript features and how they can improve code quality and developer experience. Covered utility types, conditional types, and template literal types.',
      readTime: '12 min read',
      tags: ['TypeScript', 'JavaScript', 'Types'],
    },
    {
      title: 'Field Notes: Modern CSS Techniques',
      date: '2024-01-01',
      category: 'Design',
      excerpt: 'Explored the latest CSS features including container queries, cascade layers, and modern layout techniques. How these tools are changing the way we approach responsive design.',
      readTime: '6 min read',
      tags: ['CSS', 'Design', 'Responsive'],
    },
    {
      title: 'Adventure Log: My Journey with Next.js 14',
      date: '2023-12-20',
      category: 'Framework',
      excerpt: 'Comprehensive guide to Next.js 14 features including the new App Router, Server Components, and improved performance optimizations. Real-world examples and migration tips.',
      readTime: '15 min read',
      tags: ['Next.js', 'React', 'Performance'],
    },
  ];

  return (
    <Box id="blog" sx={{ py: 8 }}>
      <Typography variant="h2" color="success.main" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Journal Entries
      </Typography>
      
      <Stack spacing={3}>
        {blogPosts.map((post, index) => (
          <JournalEntry key={index}>
            <CardContent sx={{ p: 4 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" color="success.main" gutterBottom>
                    {post.title}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </Typography>
                    <Chip
                      label={post.category}
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                {post.excerpt}
              </Typography>
              
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {post.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      variant="outlined"
                      color="primary"
                      sx={{ fontSize: '0.75rem' }}
                    />
                  ))}
                </Stack>
                <Button variant="outlined" color="success" size="small">
                  Read Entry
                </Button>
              </Stack>
            </CardContent>
          </JournalEntry>
        ))}
      </Stack>
      
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button variant="contained" color="success" size="large">
          View All Entries
        </Button>
      </Box>
    </Box>
  );
};

export default BlogSection;