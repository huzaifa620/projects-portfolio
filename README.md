# App Development Portfolio

A modern, aesthetic portfolio website showcasing our web and mobile app development projects built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, beautiful design with smooth animations
- 🎨 Gradient effects and glass morphism
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Framer Motion animations
- 🌈 Beautiful color scheme with purple/blue gradients

## Projects Showcased

Our portfolio includes various web and mobile applications:

### Featured Projects
- **Rehani Soko** - Prop-Tech platform
- **AnF Leathers** - Online clothing store
- **Agent Arc** - AI Trading Platform
- **MyAskAI** - AI Knowledge Solutions
- **Bark Media** - Music streaming app (Android)

### Other Projects
- Lovum Groups - Consultation Organization
- Diamond Home Protection - Home Protection services
- EduEssentials - Educational Platform
- FireBaggins - Event Management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── ProjectCard.tsx  # Project card component
│   ├── ProjectsShowcase.tsx  # Projects section
│   └── Footer.tsx       # Footer component
└── data/
    └── projects.ts      # Project data
```

## Adding Project Images

Each project can have **3-5 images** for the best visual impact.

### Step 1: Create Project Folders
Create folders in `public/images/projects/` named after each project ID:
```
public/images/projects/
├── rehani-soko/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── 3.jpg
├── bark-media/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── 3.jpg
└── ... (other projects)
```

### Step 2: Add Images
- **Recommended**: 3-5 images per project
- **Formats**: JPG, PNG, or WebP
- **Dimensions**: 1200x800px or higher (16:10 aspect ratio)
- **Naming**: Use sequential numbers (1.jpg, 2.jpg, 3.jpg, etc.)

### Step 3: Update Project Data
Edit `data/projects.ts` and add the `images` array to each project:

```typescript
{
  id: "rehani-soko",
  name: "Rehani Soko",
  // ... other fields
  images: [
    "/images/projects/rehani-soko/1.jpg",
    "/images/projects/rehani-soko/2.jpg",
    "/images/projects/rehani-soko/3.jpg",
  ],
}
```

### Image Features
- **Image Carousel**: Automatic carousel with navigation arrows and dots
- **Auto-advance**: Images automatically cycle every 5 seconds
- **Lightbox Modal**: Click any image to view in full-screen
- **Responsive**: Images are optimized and responsive on all devices
- **Smooth Animations**: Beautiful transitions between images

## Customization

You can easily customize the projects by editing `data/projects.ts`. Add or modify projects as needed.

## License

© DevStudio, 2025. All rights reserved.
