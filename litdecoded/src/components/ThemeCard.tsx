'use client';

import { useState } from 'react';

interface ThemeCardProps {
  title: string;
  description: string;
  quote?: string;
  icon: string;
}

export default function ThemeCard({ title, description, quote, icon }: ThemeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };
  
  return (
    <div 
      className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl relative group overflow-hidden h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative background element that moves on hover */}
      <div 
        className={`absolute -right-16 -top-16 w-40 h-40 bg-amber-50 rounded-full transition-transform duration-500 ease-out ${
          isHovered ? 'transform scale-150' : 'transform scale-100'
        }`}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className={`text-4xl mb-4 transition-all duration-300 ${isHovered ? 'transform scale-110' : ''}`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 transition-transform duration-300 group-hover:translate-x-1">{title}</h3>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {quote && (
          <div className="mt-auto">
            <div className={`pt-4 border-t border-gray-100 text-gray-700 italic transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-70'
            }`}>
              "{quote}"
            </div>
          </div>
        )}
      </div>
      
      {/* Save button */}
      <button
        onClick={handleSave}
        className={`absolute top-3 right-3 p-1.5 rounded-full transition-all duration-300 ${
          isSaved 
            ? 'bg-amber-100 text-amber-600'
            : 'bg-white text-gray-400 opacity-0 group-hover:opacity-100 hover:text-amber-600 hover:bg-amber-50'
        }`}
      >
        {isSaved ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )}
      </button>
      
      {/* Subtle highlight effect on hover */}
      <div className={`absolute inset-0 border-2 border-amber-400 rounded-2xl transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
} 