'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CharacterCardProps {
  name: string;
  role: string;
  symbolism: string;
  description: string;
  image?: string;
}

export default function CharacterCard({
  name,
  role,
  symbolism,
  description,
  image
}: CharacterCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleFlip = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
      // Reset animation state after transition completes
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };
  
  return (
    <div className="h-72 w-full">
      <div 
        onClick={handleFlip}
        className={`cursor-pointer relative w-full h-full transition-all duration-500 rounded-xl ${isFlipped ? 'shadow-lg' : 'shadow-md'}`}
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : '' }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0" 
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-full w-full rounded-xl overflow-hidden border border-gray-100 bg-white group flex flex-col">
            <div className="relative h-40 w-full overflow-hidden bg-amber-100">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
                  <span className="text-4xl">{name.charAt(0)}</span>
                </div>
              )}
              
              {/* Save button */}
              <button
                onClick={handleSave}
                className={`absolute top-2 right-2 p-1.5 rounded-full z-10 transition-all duration-300 ${
                  isSaved 
                    ? 'bg-amber-100 text-amber-600'
                    : 'bg-white/80 text-gray-500 opacity-0 group-hover:opacity-100 hover:text-amber-600 hover:bg-white'
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
              
              {/* "Flip to learn more" tooltip */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tap to learn more
              </div>
            </div>
            
            <div className="p-4 flex flex-col">
              <h3 className="font-bold text-lg text-gray-900">{name}</h3>
              <p className="text-amber-700 text-sm">{role}</p>
              <p className="text-gray-500 text-sm mt-1">Symbolizes: {symbolism}</p>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className="absolute inset-0" 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full w-full rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white p-5 flex flex-col justify-center">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-amber-700">{role}</span>
                <span className="text-gray-500">Symbolizes: {symbolism}</span>
              </div>
            </div>
            
            <button 
              onClick={handleFlip}
              className="absolute bottom-3 right-3 p-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 