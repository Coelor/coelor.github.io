import { useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types/portfolio';

/**
 * Custom hook for accessing and manipulating portfolio data
 */
export const usePortfolioData = () => {
  const data = useMemo(() => portfolioData, []);

  // Helper functions for data manipulation
  const getProjectById = (id: string): Project | undefined => {
    return data.projects.find(project => project.id === id);
  };

  const getFeaturedProjects = (): Project[] => {
    return data.projects.filter(project => project.highlights && project.highlights.length > 0).slice(0, 3);
  };

  const getSkillByCategory = (category: string) => {
    return data.skillTags.filter(skill => skill.category === category);
  };

  const getTotalYearsExperience = (): number => {
    // Calculate from the earliest work experience
    if (data.workExperience.length === 0) return 0;
    
    const years = data.workExperience
      .map(exp => {
        // Split duration by '–' and extract year from the first part
        const startPart = exp.duration.split('–')[0].trim();
        const yearMatch = startPart.match(/\b\d{4}\b/);
        return yearMatch ? parseInt(yearMatch[0]) : undefined;
      })
      .filter((year): year is number => year !== undefined);

    if (years.length === 0) return 0;

    const startYear = Math.min(...years);
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  return {
    // Raw data
    ...data,
    
    // Helper functions
    getProjectById,
    getFeaturedProjects,
    getSkillByCategory,
    getTotalYearsExperience,
    
    // Computed values
    totalProjects: data.projects.length,
    totalWorkExperience: data.workExperience.length,
    totalSkills: data.skillTags.length,
    totalEducation: data.education.length,
    totalCertifications: data.certifications.length,
  };
};