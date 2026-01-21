import Hero from '@/components/Hero';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsShowcase />
      <Footer />
    </main>
  );
}
