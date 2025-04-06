'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-amber-700 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/books" 
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300"
        >
          Explore Books
        </Link>
      </div>
    </div>
  );
} 