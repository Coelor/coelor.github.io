import { useState } from 'react';
import type { Project } from '../types/portfolio';

// Shared state/behavior for the "click a project card, see a modal with an
// image carousel" pattern used by both ProjectsSection and
// WorkExperienceSection — previously duplicated in full in each file.
export const useProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return {
    selectedProject,
    currentImageIndex,
    openModal,
    closeModal,
    nextImage,
    prevImage,
    selectImage,
  };
};
