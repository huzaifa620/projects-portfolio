// Example of how to update projects with images
// Copy this structure to data/projects.ts and update the paths

export const projectsWithImages = [
  {
    id: "rehani-soko",
    name: "Rehani Soko",
    description: "A Prop-Tech platform revolutionizing real estate operations with comprehensive data pipelines and intelligent solutions.",
    category: "Prop-Tech",
    url: "https://rehanisoko.com",
    technologies: ["Data Pipeline", "AI/ML", "React", "Python"],
    featured: true,
    // Add 3-5 images per project
    images: [
      "/images/projects/rehani-soko/1.jpg",
      "/images/projects/rehani-soko/2.jpg",
      "/images/projects/rehani-soko/3.jpg",
    ],
  },
  {
    id: "bark-media",
    name: "Bark Media",
    description: "Music streaming app for Android - Discover, stream, and share music effortlessly.",
    category: "Mobile App",
    url: "https://play.google.com/store/apps/details?id=com.barkmedia.musicapp",
    technologies: ["React Native", "Android", "Music Streaming", "MP3/MP4", "Playlists"],
    featured: true,
    // Example with more images
    images: [
      "/images/projects/bark-media/1.jpg",
      "/images/projects/bark-media/2.jpg",
      "/images/projects/bark-media/3.jpg",
      "/images/projects/bark-media/4.jpg",
      "/images/projects/bark-media/5.jpg",
    ],
  },
  // ... other projects
];

/*
IMAGE ORGANIZATION GUIDELINES:

1. Recommended: 3-5 images per project
   - First image: Main hero/screenshot
   - Middle images: Feature showcases, different screens/views
   - Last image: Additional details or use cases

2. Image naming:
   - Use sequential numbers: 1.jpg, 2.jpg, 3.jpg, etc.
   - Keep filenames simple and consistent

3. Image optimization:
   - Compress images before uploading
   - Recommended resolution: 1200x800px or higher
   - Format: JPG (for photos) or PNG (for screenshots with text)
   - WebP format is also supported and recommended for better compression

4. Folder structure:
   - Create a folder named after the project ID
   - Example: public/images/projects/rehani-soko/

5. Update data/projects.ts:
   - Add the images array to each project object
   - Use paths relative to the public folder
   - Path format: "/images/projects/[project-id]/[number].[ext]"
*/
