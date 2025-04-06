'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define the WorldReference type based on the data structure
export interface WorldReference {
  type: 'news' | 'podcast' | 'video' | 'social';
  title: string;
  platform: string;
  url: string;
  description: string;
  date: string;
}

interface WorldReferencesSectionProps {
  references: WorldReference[];
  bookTitle?: string;
}

export default function WorldReferencesSection({ references, bookTitle = "this book" }: WorldReferencesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredReferences = activeFilter 
    ? references.filter(ref => ref.type === activeFilter)
    : references;

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'news':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'podcast':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        );
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'social':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{bookTitle} in the World</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl">
            How {bookTitle} continues to influence and inspire culture, art, science, and society today
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center gap-2 mb-8">
          <button 
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === null 
                ? 'bg-amber-600 text-white' 
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            }`}
          >
            All
          </button>
          {['news', 'podcast', 'video', 'social'].map(type => (
            <button 
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === type 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        
        {/* References grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReferences.map((reference, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                    {getTypeIcon(reference.type)}
                    <span className="ml-1">{reference.platform}</span>
                  </span>
                  <span className="text-gray-500 text-sm">{reference.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">{reference.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{reference.description}</p>
                <Link 
                  href={reference.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium"
                >
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredReferences.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No {activeFilter} references available.</p>
          </div>
        )}
      </div>
    </section>
  );
} 