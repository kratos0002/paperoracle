'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export type AltEndingEntry = {
  whatIf: string;
  summary: string;
};

export const AltEndingCarousel = ({ data, bookTitle }: { data: AltEndingEntry[], bookTitle?: string }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container mx-auto px-4 max-w-6xl" ref={containerRef}>
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            What Could've Been
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-amber-700 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto italic font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Scroll through endings {bookTitle ? `${bookTitle} ` : ''}Orwell didn't write — but you can feel.
          </motion.p>
        </div>
        
        {/* Desktop horizontal scroll */}
        <div className="hidden md:block overflow-x-auto pb-8 hide-scrollbar">
          <div className="flex space-x-6">
            {data.map((item, index) => (
              <motion.div
                key={`desktop-${index}`}
                className="min-w-[350px] flex-shrink-0 rounded-lg shadow-md overflow-hidden 
                       border border-amber-100 bg-gradient-to-b from-amber-50 to-stone-50 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                {/* Ribbon */}
                <div className="absolute top-4 right-0">
                  <div className="bg-amber-700 text-white text-xs font-medium py-1 px-3 rounded-l-md shadow-sm">
                    Alternate Timeline
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-serif italic text-gray-800 mb-4 pr-20">{item.whatIf}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{item.summary}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-10">
                    <svg className="w-full h-full text-amber-900" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile vertical stack */}
        <div className="md:hidden space-y-6">
          {data.map((item, index) => (
            <motion.div
              key={`mobile-${index}`}
              className="rounded-lg shadow-md overflow-hidden 
                     border border-amber-100 bg-gradient-to-b from-amber-50 to-stone-50 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Ribbon */}
              <div className="absolute top-4 right-0">
                <div className="bg-amber-700 text-white text-xs font-medium py-1 px-3 rounded-l-md shadow-sm">
                  Alternate Timeline
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-serif italic text-gray-800 mb-3 pr-20">{item.whatIf}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{item.summary}</p>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-10">
                  <svg className="w-full h-full text-amber-900" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll hint */}
        <div className="hidden md:block text-center mt-6">
          <p className="text-sm text-gray-500 italic">
            Scroll horizontally to explore more alternate timelines
          </p>
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
}; 