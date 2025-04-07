'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface InTheWorldEntry {
  type: 'social' | 'news' | 'podcast';
  title: string;
  platform: string;
  url: string;
  description: string;
  date: string;
}

interface InTheWorldFeedProps {
  entries: InTheWorldEntry[];
  bookTitle: string;
}

export default function InTheWorldFeed({ entries, bookTitle }: InTheWorldFeedProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!entries || entries.length === 0) {
    return null;
  }

  // Function to extract video ID from various platform URLs
  const extractVideoId = (url: string, platform: string): string => {
    try {
      const urlObj = new URL(url);
      
      if (platform === 'TikTok') {
        // TikTok URLs typically have the video ID in the path
        const pathParts = urlObj.pathname.split('/');
        return pathParts[pathParts.length - 1];
      } else if (platform === 'YouTube') {
        // YouTube URLs can have the video ID as a query parameter or in the path
        if (urlObj.searchParams.has('v')) {
          return urlObj.searchParams.get('v') || '';
        } else {
          const pathParts = urlObj.pathname.split('/');
          return pathParts[pathParts.length - 1];
        }
      } else if (platform === 'Instagram') {
        // Instagram URLs typically have the post ID in the path
        const pathParts = urlObj.pathname.split('/');
        return pathParts[pathParts.length - 1];
      }
      
      return '';
    } catch (error) {
      console.error('Error extracting video ID:', error);
      return '';
    }
  };

  // Function to format date
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    } catch (error) {
      return dateString;
    }
  };

  // Function to render platform-specific embed
  const renderEmbed = (entry: InTheWorldEntry) => {
    const videoId = extractVideoId(entry.url, entry.platform);
    
    if (entry.platform === 'TikTok' && videoId) {
      return (
        <iframe
          src={`https://www.tiktok.com/embed/${videoId}`}
          className="w-full h-[500px] rounded-xl"
          allowFullScreen
        />
      );
    } else if (entry.platform === 'YouTube' && videoId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className="w-full h-[315px] rounded-xl"
          allowFullScreen
        />
      );
    } else if (entry.platform === 'Instagram' && videoId) {
      return (
        <iframe
          src={`https://www.instagram.com/p/${videoId}/embed`}
          className="w-full h-[450px] rounded-xl"
          allowFullScreen
        />
      );
    } else {
      // Fallback for unsupported platforms or invalid URLs
      return (
        <Link 
          href={entry.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative w-full h-[200px] bg-gray-100 rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white font-medium truncate">{entry.title}</h3>
          </div>
        </Link>
      );
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-serif mb-2">{bookTitle} in the World</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">
        See how this book is being discussed and referenced in today's conversations, from social media to news outlets.
      </p>

      {/* Mobile View - Vertical Stack */}
      <div className="md:hidden space-y-6">
        {entries.map((entry, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-800">
                  {entry.platform}
                </span>
                <span className="text-xs text-gray-500">
                  {formatDate(entry.date)}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2">{entry.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{entry.description}</p>
              
              {renderEmbed(entry)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View - Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {entries.map((entry, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all hover:scale-[1.01]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-800">
                  {entry.platform}
                </span>
                <span className="text-xs text-gray-500">
                  {formatDate(entry.date)}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2">{entry.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{entry.description}</p>
              
              {renderEmbed(entry)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 