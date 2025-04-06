'use client';

import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  author: string;
  year: string;
  genre: string;
  hook: string;
  coverImage: string;
}

export default function HeroSection({
  title,
  author,
  year,
  genre,
  hook,
  coverImage
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: 'url(/placeholder-pattern.jpg)' }}></div>
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-amber-800 font-medium tracking-wider uppercase text-sm">{genre}</p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">{title}</h1>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-500">
                <span>{author}</span>
                <span>•</span>
                <span>{year}</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 font-serif italic max-w-xl">
              "{hook}"
            </p>
            
            <div className="pt-4">
              <Link href="#" className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                Explore More Books
              </Link>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-96 md:w-80 md:h-[30rem] shadow-2xl rounded-lg overflow-hidden transform rotate-1 transition-transform duration-500 hover:rotate-0">
              {coverImage ? (
                <Image
                  src={coverImage}
                  alt={`${title} book cover`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{title}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 