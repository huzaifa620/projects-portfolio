export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string; // Detailed description for project detail page
  category: string;
  url?: string;
  image?: string; // Main/thumbnail image (backward compatibility)
  images?: string[]; // Array of project images (recommended: 3-5 images)
  technologies: string[];
  features?: string[]; // Important features list
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "rehani-soko",
    name: "PropFlow CRM",
    description: "A powerful private dashboard CRM platform designed for real estate professionals to manage clients, properties, and transactions efficiently.",
    detailedDescription: "PropFlow CRM is an exclusive, private Customer Relationship Management system specifically built for the real estate industry. This secure, private dashboard platform streamlines property management, client interactions, and transaction tracking, enabling real estate professionals to boost productivity and improve customer relationships. The system features intuitive dashboards, automated workflows, and comprehensive reporting tools that help businesses make data-driven decisions and grow their operations. As a private dashboard, PropFlow CRM ensures complete data security and exclusive access for authorized users only.",
    category: "CRM",
    // Private dashboard - no public URL
    images: [
      "/images/projects/rehani-soko/1.png",
      "/images/projects/rehani-soko/2.png",
      "/images/projects/rehani-soko/3.png",
      "/images/projects/rehani-soko/4.png",
      "/images/projects/rehani-soko/5.png",
      "/images/projects/rehani-soko/6.png",
      "/images/projects/rehani-soko/7.png",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful API"],
    featured: true,
    features: [
      "Private, secure dashboard access",
      "Client and lead management system",
      "Property listing and inventory tracking",
      "Transaction and deal pipeline management",
      "Automated email and notification system",
      "Advanced analytics and reporting dashboard",
      "Document management and file storage",
      "Calendar and task scheduling",
      "Team collaboration and role-based access",
      "Mobile-responsive design",
      "Real-time updates and synchronization"
    ],
  },
  {
    id: "agent-arc",
    name: "Agent Arc",
    description: "Cutting-edge AI Trading Platform that empowers traders with intelligent market insights and automated trading solutions.",
    detailedDescription: "Agent Arc is an advanced AI-powered trading platform that combines machine learning algorithms with real-time market data to provide traders with intelligent insights and automated trading capabilities. The platform analyzes market trends, patterns, and indicators to help users make informed trading decisions and automate their trading strategies.",
    category: "AI Trading",
    url: "https://www.agentarc.ai",
    images: [
      "/images/projects/agent-arc/1.png",
      "/images/projects/agent-arc/2.png",
      "/images/projects/agent-arc/3.png",
      "/images/projects/agent-arc/4.png",
    ],
    technologies: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "WebSocket", "AI/ML"],
    featured: true,
    features: [
      "AI-powered market analysis and predictions",
      "Automated trading strategy execution",
      "Real-time market data and alerts",
      "Advanced charting and technical indicators",
      "Portfolio management and tracking",
      "Risk management tools",
      "Backtesting capabilities",
      "Multi-exchange support",
      "Secure API integrations",
      "Comprehensive trading dashboard"
    ],
  },
  {
    id: "myaskai",
    name: "MyAskAI",
    description: "Customizable AI Knowledge Solutions Provider enabling businesses to create intelligent Q&A systems from their data.",
    detailedDescription: "MyAskAI is a powerful AI knowledge management platform that allows businesses to create intelligent question-answering systems from their own data. Using advanced natural language processing and vector databases, the platform enables organizations to build custom AI assistants that can answer questions based on their internal documents, knowledge bases, and data repositories.",
    category: "AI Solutions",
    url: "https://myaskai.com",
    images: [
      "/images/projects/myaskai/1.png",
      "/images/projects/myaskai/2.png",
      "/images/projects/myaskai/3.png",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "OpenAI", "Pinecone", "MongoDB"],
    featured: true,
    features: [
      "Custom AI chatbot creation",
      "Document upload and processing",
      "Vector database integration",
      "Natural language understanding",
      "Multi-source knowledge base",
      "API and SDK access",
      "Customizable UI components",
      "Analytics and usage tracking",
      "Enterprise-grade security",
      "White-label solutions"
    ],
  },
  {
    id: "diamond-home-protection",
    name: "Diamond Home Protection",
    description: "Comprehensive home protection services platform with modern technology solutions for homeowners and service providers.",
    detailedDescription: "Diamond Home Protection is a complete platform connecting homeowners with home protection services. The system enables customers to manage service requests, track maintenance schedules, and communicate with service providers seamlessly. Service providers can manage their work orders, schedule appointments, and maintain customer relationships all in one place.",
    category: "Home Services",
    url: "https://diamondhomeprotection.com",
    images: [
      "/images/projects/diamond-home-protection/1.png",
      "/images/projects/diamond-home-protection/2.png",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Firebase", "React Native"],
    featured: true,
    features: [
      "Service request management",
      "Scheduling and appointment booking",
      "Service provider directory",
      "Real-time communication system",
      "Payment processing and invoicing",
      "Service history tracking",
      "Mobile app for iOS and Android",
      "Notification and reminder system",
      "Review and rating system",
      "Admin dashboard and analytics"
    ],
  },
  {
    id: "lovum-groups",
    name: "Lovum Groups",
    description: "Consultation organization platform providing expert services and business solutions.",
    detailedDescription: "Lovum Groups is a consultation platform that connects businesses with expert consultants across various industries. The platform facilitates consultation services, project management, and knowledge sharing between clients and consultants.",
    category: "Consultation",
    url: "https://lovumgroup.com",
    images: [
      "/images/projects/lovum-groups/1.png",
      "/images/projects/lovum-groups/2.png",
      "/images/projects/lovum-groups/3.png",
      "/images/projects/lovum-groups/4.png",
      "/images/projects/lovum-groups/5.png",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    featured: false,
    features: [
      "Consultant directory and profiles",
      "Consultation booking system",
      "Video conferencing integration",
      "Project collaboration tools",
      "Document sharing and management",
      "Payment and billing system"
    ],
  },
  {
    id: "eduessentials",
    name: "EduEssentials",
    description: "Educational platform designed to enhance learning experiences with interactive tools and resources.",
    detailedDescription: "EduEssentials is a comprehensive educational platform that provides students and educators with interactive learning tools, course management, and assessment capabilities. The platform supports both online and hybrid learning models.",
    category: "Education",
    url: "https://edu-essentials.vercel.app",
    images: [
      "/images/projects/eduessentials/1.png",
      "/images/projects/eduessentials/2.png",
      "/images/projects/eduessentials/3.png",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    featured: false,
    features: [
      "Course creation and management",
      "Interactive video lessons",
      "Assignment and quiz system",
      "Student progress tracking",
      "Discussion forums",
      "Gradebook and reporting"
    ],
  },
  {
    id: "firebaggins",
    name: "FireBaggins",
    description: "Event management platform streamlining event planning, coordination, and execution processes.",
    detailedDescription: "FireBaggins is a complete event management solution that helps event organizers plan, manage, and execute events of all sizes. The platform offers tools for ticketing, attendee management, venue coordination, and post-event analytics.",
    category: "Event Management",
    url: "https://baggin-erenyea.vercel.app",
    images: [
      "/images/projects/firebaggins/1.png",
      "/images/projects/firebaggins/2.png",
      "/images/projects/firebaggins/3.png",
      "/images/projects/firebaggins/4.png",
      "/images/projects/firebaggins/5.png",
      "/images/projects/firebaggins/6.png",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    featured: false,
    features: [
      "Event creation and management",
      "Online ticket sales",
      "Attendee registration system",
      "QR code check-in",
      "Event marketing tools",
      "Analytics and reporting"
    ],
  },
  {
    id: "bark-media",
    name: "Bark Media",
    description: "Music streaming app for Android - Discover, stream, and share music effortlessly. Upload your own tracks and connect with artists worldwide.",
    detailedDescription: "Bark Media is a modern music streaming application for Android that offers users access to thousands of tracks across various genres. The platform allows users to discover new music, create playlists, follow artists, and even upload their own tracks. With a clean, intuitive interface, Bark Media makes music streaming accessible and enjoyable for everyone.",
    category: "Mobile App",
    url: "https://play.google.com/store/apps/details?id=com.barkmedia.musicapp",
    images: [
      "/images/projects/bark-media/1.jpg",
      "/images/projects/bark-media/2.jpg",
      "/images/projects/bark-media/3.jpg",
      "/images/projects/bark-media/4.jpg",
      "/images/projects/bark-media/5.jpg",
    ],
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Firebase", "Android"],
    featured: true,
    features: [
      "Stream thousands of songs for free",
      "Create and manage custom playlists",
      "Artist profile and following system",
      "Upload your own MP3/MP4 tracks",
      "Album art and video support",
      "Search and discovery features",
      "Offline listening capability",
      "Social sharing and recommendations",
      "Clean, minimal user interface",
      "Cross-platform compatibility"
    ],
  },
];
