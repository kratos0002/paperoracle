'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { RelatedWork } from '../data/animalFarm';

interface RelatedWorksSectionProps {
  works: RelatedWork[];
}

export default function RelatedWorksSection({ works }: RelatedWorksSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
      
      setScrollPosition(scrollTo);
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">If you liked this, explore...</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl">
            Other classic works that explore similar themes and ideas
          </p>
        </div>
        
        <div className="relative">
          {/* Left scroll button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 text-amber-800 hover:text-amber-600 transition-colors"
            disabled={scrollPosition <= 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Carousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 hide-scrollbar space-x-6"
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
          >
            {works.map((work, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 w-full bg-amber-100">
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-200">
                      <span className="text-amber-800 text-2xl font-bold">{work.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{work.title}</h3>
                  <p className="text-amber-700 text-sm">
                    {work.author}, {work.year}
                  </p>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right scroll button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 text-amber-800 hover:text-amber-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 