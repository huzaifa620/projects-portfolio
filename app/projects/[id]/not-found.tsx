import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-white">Project Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
