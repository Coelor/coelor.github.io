import { useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { PortfolioData, Project, BlogPost } from '../types/portfolio';

/**
 * Custom hook for accessing and manipulating portfolio data
 */
export const usePortfolioData = () => {
  const data = useMemo(() => portfolioData, []);

  // Helper functions for data manipulation
  const getProjectById = (id: string): Project | undefined => {
    return data.projects.find(project => project.id === id);
  };

  const getBlogPostById = (id: string): BlogPost | undefined => {
    return data.blogPosts.find(post => post.id === id);
  };

  const getFeaturedProjects = (): Project[] => {
    return data.projects.filter(project => project.status === 'Completed').slice(0, 3);
  };

  const getFeaturedBlogPosts = (): BlogPost[] => {
    return data.blogPosts.filter(post => post.featured).slice(0, 2);
  };

  const getProjectsByStatus = (status: Project['status']): Project[] => {
    return data.projects.filter(project => project.status === status);
  };

  const getBlogPostsByCategory = (category: string): BlogPost[] => {
    return data.blogPosts.filter(post => post.category === category);
  };

  const getSkillByName = (name: string) => {
    for (const category of data.skillCategories) {
      const skill = category.skills.find(s => s.name === name);
      if (skill) return skill;
    }
    return undefined;
  };

  const getTotalYearsExperience = (): number => {
    const startYear = parseInt(data.timeline[0]?.year || '2018');
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  const getHighestSkillLevel = (): number => {
    let maxLevel = 0;
    data.skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        if (skill.level > maxLevel) {
          maxLevel = skill.level;
        }
      });
    });
    return maxLevel;
  };

  return {
    // Raw data
    ...data,
    
    // Helper functions
    getProjectById,
    getBlogPostById,
    getFeaturedProjects,
    getFeaturedBlogPosts,
    getProjectsByStatus,
    getBlogPostsByCategory,
    getSkillByName,
    getTotalYearsExperience,
    getHighestSkillLevel,
    
    // Computed values
    totalProjects: data.projects.length,
    completedProjects: data.projects.filter(p => p.status === 'Completed').length,
    totalBlogPosts: data.blogPosts.length,
    totalSkills: data.skillCategories.reduce((total, category) => total + category.skills.length, 0),
  };
};