'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-amber-800 font-serif font-bold text-xl">
            Paper Oracle
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/books" 
              className={`${
                pathname === '/books' 
                  ? 'text-amber-800 font-medium' 
                  : 'text-gray-600 hover:text-amber-800'
              }`}
            >
              Books
            </Link>
            <Link 
              href="/about" 
              className={`${
                pathname === '/about' 
                  ? 'text-amber-800 font-medium' 
                  : 'text-gray-600 hover:text-amber-800'
              }`}
            >
              About
            </Link>
            <Link 
              href="#" 
              className="bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg text-sm transition duration-300"
            >
              Join Waitlist
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-amber-800 focus:outline-none"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/books" 
                className={`${
                  pathname === '/books' 
                    ? 'text-amber-800 font-medium' 
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Books
              </Link>
              <Link 
                href="/about" 
                className={`${
                  pathname === '/about' 
                    ? 'text-amber-800 font-medium' 
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#" 
                className="bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg text-sm inline-block w-fit transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 