'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Code2, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { Project } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const projectImages = project.images && project.images.length > 0 
    ? project.images 
    : project.image 
    ? [project.image] 
    : [];

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') {
          setIsLightboxOpen(false);
        } else if (e.key === 'ArrowLeft') {
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          goToNext();
        }
      } else {
        if (e.key === 'ArrowLeft' && projectImages.length > 1) {
          goToPrevious();
        } else if (e.key === 'ArrowRight' && projectImages.length > 1) {
          goToNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, projectImages.length]);

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="sticky top-0 z-40 glass-effect border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Project Info */}
            <div className="lg:col-span-2">
              {/* Category and Featured Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-purple-300 bg-purple-500/20 rounded-full border border-purple-500/30">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-yellow-300 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                    ⭐ Featured Project
                  </span>
                )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                <ExternalLink className="w-4 h-4" />
                {project.category === "Mobile App" ? "Get App" : "Visit Website"}
              </a>
            )}
              </div>

              {/* Project Name */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">{project.name}</span>
              </h1>

              {/* Short Description */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Right Column - Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="glass-effect rounded-3xl p-6 border border-white/10 sticky top-40">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Code2 className="w-5 h-5 text-blue-400" />
                  </div>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Images and Description */}
          <div className="lg:col-span-2 space-y-12">
            {/* Enhanced Image Gallery */}
            {projectImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Main Image with Navigation */}
                <div className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black border border-white/10 group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImageIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={projectImages[selectedImageIndex]}
                        alt={`${project.name} - Image ${selectedImageIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => setIsLightboxOpen(true)}
                          className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Maximize2 className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {projectImages.length > 1 && (
                    <>
                      <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all duration-300 z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all duration-300 z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {selectedImageIndex + 1} / {projectImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Enhanced Thumbnail Grid */}
                {projectImages.length > 1 && (
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                    {projectImages.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                          selectedImageIndex === index
                            ? 'border-purple-500 ring-4 ring-purple-500/30 shadow-lg shadow-purple-500/50'
                            : 'border-white/10 hover:border-purple-500/50'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${project.name} - Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        {selectedImageIndex === index && (
                          <div className="absolute inset-0 bg-purple-500/20" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Detailed Description */}
            {project.detailedDescription && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-effect rounded-3xl p-8 md:p-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                  About This Project
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              </motion.div>
            )}
          </div>

          {/* Sidebar - Features and Technologies */}
          <div className="lg:col-span-1 space-y-8">
            {/* Important Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-effect rounded-3xl p-6 md:p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  </div>
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && projectImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative w-full max-w-7xl max-h-[90vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={projectImages[selectedImageIndex]}
                    alt={`${project.name} - Image ${selectedImageIndex + 1}`}
                    width={1400}
                    height={900}
                    className="object-contain w-full h-full rounded-lg"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {projectImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevious();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                    {selectedImageIndex + 1} / {projectImages.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
