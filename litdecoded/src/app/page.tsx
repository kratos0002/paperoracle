'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bookList, { Book } from '../data/bookList';

export default function Home() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const enrichedBooks = bookList.filter(book => book.status === 'enriched');
  
  // Rotate featured book every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % enrichedBooks.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [enrichedBooks.length]);
  
  const featuredBook = enrichedBooks[featuredIndex];
  
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-indigo-100 to-emerald-100 animate-gradient-slow">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <div className="absolute w-full h-full bg-[url('/paper-texture.jpg')] opacity-20"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Where stories whisper their truths.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Welcome to Paper Oracle — a living archive of literary insight.
          </p>
          <a 
            href="#library" 
            className="inline-block bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-amber-900 hover:shadow-lg"
          >
            Enter the Library
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <svg className="w-12 h-12 text-amber-800 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Scrollable Book Stack */}
      <section id="library" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Insight Library</h2>
          <p className="text-xl text-gray-600">Scroll through our collection of literary insights and analyses.</p>
        </div>
        
        <div className="relative pb-4">
          <div className="flex overflow-x-auto space-x-6 py-8 px-4 snap-x">
            {bookList.map((book) => (
              <Link 
                key={book.slug}
                href={`/books/${book.slug}`}
                className="snap-start flex-shrink-0 w-64 md:w-80 group"
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full border border-gray-100">
                  <div className="relative h-48 w-full bg-gradient-to-br from-amber-600 to-amber-800 group-hover:from-amber-500 group-hover:to-amber-700 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-4xl font-serif font-bold">{book.title.charAt(0)}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        book.status === 'enriched' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {book.status === 'enriched' ? 'Enriched' : 'Coming Soon'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-sm text-amber-700 mb-4">{book.author}, {book.year}</p>
                    
                    <div className="mt-6 opacity-70 text-sm text-gray-600 border-t border-gray-100 pt-4 group-hover:opacity-100 transition-opacity">
                      {book.status === 'enriched' ? (
                        <p>
                          "Every story has deeper meanings waiting to be discovered."
                        </p>
                      ) : (
                        <p>
                          "Our oracles are working to decode this literary masterpiece."
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Insight of the Week */}
      {featuredBook && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-amber-700 font-medium mb-2">This week's whisper from the archive</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Insight of the Week</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 text-amber-800 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{featuredBook.title}</h3>
                    <p className="text-sm text-amber-700">{featuredBook.author}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-800 text-lg leading-relaxed mb-4">
                    "Every character is a mirror reflecting some aspect of human nature. In {featuredBook.title}, 
                    {featuredBook.author} crafts a narrative that continues to speak to readers across generations, 
                    reminding us that great literature is always contemporary."
                  </p>
                  <p className="text-gray-600 text-base">
                    The modern reader finds unexpected parallels between {featuredBook.title}'s themes and 
                    our current social climate, proving once again the enduring relevance of classic literature.
                  </p>
                </div>
                
                <div className="text-right">
                  <Link href={`/books/${featuredBook.slug}`} className="text-amber-800 font-medium hover:text-amber-900 inline-flex items-center">
                    Explore full analysis
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* What's Inside Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">What's Inside</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deeper into literature with our innovative analysis modules, 
            revealing the hidden patterns and resonances of classic works.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Module 1: LitDNA */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
            <div className="p-6">
              <div className="bg-indigo-100 text-indigo-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">LitDNA</h3>
              <p className="text-gray-600 mb-4">
                Visualize the core elements that make each book unique, from thematic weight to character dynamics.
              </p>
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                <div className="w-40 h-40 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-indigo-100"></div>
                  <div className="absolute inset-2 rounded-full border-4 border-amber-100"></div>
                  <div className="absolute inset-4 rounded-full border-4 border-emerald-100"></div>
                  <div className="absolute inset-6 rounded-full border-4 border-gray-100"></div>
                  <div className="absolute inset-8 rounded-full border-4 border-indigo-50"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">
                From "Hamlet" by William Shakespeare
              </p>
            </div>
          </div>
          
          {/* Module 2: ModernMirror */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
            <div className="p-6">
              <div className="bg-emerald-100 text-emerald-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ModernMirror</h3>
              <p className="text-gray-600 mb-4">
                See how classic literature reflects and predicts modern social phenomena and cultural patterns.
              </p>
              <div className="space-y-3 mb-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-800 font-medium">Corporate Power Dynamics</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-800 font-medium">Class Inequality</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-800 font-medium">Environmental Consequences</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">
                From "The Great Gatsby" by F. Scott Fitzgerald
              </p>
            </div>
          </div>
          
          {/* Module 3: RealWorldStarterPack */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
            <div className="p-6">
              <div className="bg-rose-100 text-rose-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">RealWorldStarterPack</h3>
              <p className="text-gray-600 mb-4">
                Discover the essential concepts, artifacts, and perspectives needed to understand a book's world.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
                <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧪</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">
                From "Frankenstein" by Mary Shelley
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Begin Your Literary Journey</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore the depths of literature with Paper Oracle's unique insights and discover the whispers between the lines.
          </p>
          <a 
            href="#library" 
            className="inline-block bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-amber-900 hover:shadow-lg"
          >
            Explore the Library
          </a>
        </div>
      </section>
      
      {/* Add custom styles in head */}
      <style jsx global>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 15s ease infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
          100% { transform: translateY(0) translateX(-50%); }
        }
        
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        
        .font-serif {
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
        }
      `}</style>
    </main>
  );
}
