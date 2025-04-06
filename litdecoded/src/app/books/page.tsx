'use client';

import Image from 'next/image';
import Link from 'next/link';

import bookList, { Book } from '../../data/bookList';

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">LitDecoded</h1>
          <div className="w-20 h-1 bg-amber-600 mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl">
            Explore classic literature through interactive, visual breakdowns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookList.map((book: Book) => (
            <Link 
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="relative h-64 w-full bg-amber-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{book.title.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-amber-700 mb-1">{book.author}, {book.year}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h2>
                  <p className="text-sm text-gray-700 mb-4">{book.genre}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-amber-700">
                      <span className="font-medium">Explore breakdown</span>
                      <svg 
                        className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      book.status === 'enriched' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {book.status === 'enriched' ? 'Available' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 