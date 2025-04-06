'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Quote {
  quote: string;
  author: string;
  image?: string;
}

interface VisualGallerySectionProps {
  quotes: Quote[];
}

export default function VisualGallerySection({ quotes }: VisualGallerySectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [savedQuotes, setSavedQuotes] = useState<number[]>([]);
  
  const handleCopyQuote = (index: number, quote: string, author: string) => {
    const textToCopy = `"${quote}" — ${author}`;
    navigator.clipboard.writeText(textToCopy);
    
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  const toggleSaveQuote = (index: number) => {
    if (savedQuotes.includes(index)) {
      setSavedQuotes(savedQuotes.filter(i => i !== index));
    } else {
      setSavedQuotes([...savedQuotes, index]);
    }
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Visual Gallery</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl">
            Powerful quotes from Animal Farm reimagined as visual art
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group h-72 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 to-amber-900/90 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              {quote.image ? (
                <Image
                  src={quote.image}
                  alt={quote.quote}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900"></div>
              )}
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <svg className="w-10 h-10 text-amber-200 opacity-50 mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white text-lg md:text-xl font-serif mb-4 leading-relaxed">
                  {quote.quote}
                </p>
                <p className="text-amber-200 text-sm font-medium">
                  {quote.author}
                </p>
              </div>
              
              {/* Actions overlay that appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleCopyQuote(index, quote.quote, quote.author)}
                    className="flex items-center text-white text-xs hover:text-amber-200 transition-colors"
                  >
                    {copiedIndex === index ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                        Copy Quote
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={() => toggleSaveQuote(index)}
                    className="text-white hover:text-amber-200 transition-colors"
                  >
                    {savedQuotes.includes(index) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 