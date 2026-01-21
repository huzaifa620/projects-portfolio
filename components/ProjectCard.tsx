'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Play, ArrowRight } from 'lucide-react';
import { Project } from '@/data/projects';
import ImageCarousel from './ImageCarousel';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter();
  
  // Get images: use images array if available, otherwise fallback to single image or placeholder
  const projectImages = project.images && project.images.length > 0 
    ? project.images 
    : project.image 
    ? [project.image] 
    : [];

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div 
        onClick={handleCardClick}
        className="glass-effect rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 cursor-pointer"
      >
        {/* Project images carousel */}
        <div className="relative">
          {projectImages.length > 0 ? (
            <ImageCarousel 
              images={projectImages} 
              projectName={project.name}
              projectId={project.id}
              disableLightbox={true}
            />
          ) : (
            // Fallback placeholder if no images
            <div className="relative mb-6 h-64 rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-white/20">
                  {project.name.charAt(0)}
                </div>
              </div>
              {project.category === "Mobile App" && (
                <div className="absolute top-4 right-4">
                  <Play className="w-12 h-12 text-white/80" />
                </div>
              )}
            </div>
          )}
          
          {/* External link overlay (only shown on hover if URL exists and no images) */}
          {project.url && projectImages.length === 0 && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors pointer-events-auto"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            </div>
          )}
          
          {/* External link button (for projects with images) */}
          {project.url && projectImages.length > 0 && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>

        {/* Category badge */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-500/20 rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-block ml-2 px-3 py-1 text-xs font-semibold text-yellow-300 bg-yellow-500/20 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Project name */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.name}
          </h3>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs text-gray-300 bg-white/5 rounded-lg border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-lg">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
