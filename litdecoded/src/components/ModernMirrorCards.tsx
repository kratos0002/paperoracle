'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ModernMirrorEntry {
  theme: string;
  modernExample: string;
  insight: string;
}

interface ModernMirrorCardsProps {
  modernMirror: ModernMirrorEntry[];
  bookTitle?: string;
}

export default function ModernMirrorCards({ modernMirror, bookTitle }: ModernMirrorCardsProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!modernMirror || modernMirror.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif uppercase tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            What This Book Sees in Today
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-amber-700 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto font-serif"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {bookTitle ? `How ${bookTitle}'s themes echo in our contemporary world` : 
             'Literary whispers across time, speaking to our modern realities'}
          </motion.p>
        </div>
        
        {/* Desktop layout (horizontal scroll) */}
        <div className="hidden md:block relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar space-x-6"
          >
            {modernMirror.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-amber-50 to-gray-50 rounded-xl 
                  border border-amber-100/60 shadow-md overflow-hidden hover:shadow-lg hover:scale-105 
                  transform transition-all duration-300"
                style={{ minHeight: '24rem' }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                  <div className="w-40 h-40 bg-amber-700 rounded-full absolute -top-20 -right-20" />
                  <div className="w-32 h-32 bg-gray-900/20 rounded-full absolute -bottom-10 -left-10" />
                </div>
                
                <div className="p-7 flex flex-col h-full relative z-10">
                  {/* Card theme title */}
                  <h3 className="font-serif font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4 border-b border-amber-200 pb-3">{entry.theme}</h3>
                  
                  {/* Modern example */}
                  <div className="mb-6">
                    <span className="text-amber-700 text-sm uppercase tracking-widest font-medium">Modern Mirror</span>
                    <p className="font-medium text-gray-800 mt-1">{entry.modernExample}</p>
                  </div>
                  
                  {/* Insight */}
                  <div className="mt-auto">
                    <div className="border-t border-amber-200 pt-4 mt-4">
                      <p className="font-serif text-gray-700 italic leading-relaxed text-sm">{entry.insight}</p>
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-300/50"></div>
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-300/50"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-300/50"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-300/50"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile layout (vertical stack) */}
        <div className="md:hidden space-y-6">
          {modernMirror.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-gray-50 rounded-xl 
                border border-amber-100/60 shadow-md overflow-hidden"
              style={{ minHeight: '16rem' }}
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="w-40 h-40 bg-amber-700 rounded-full absolute -top-20 -right-20" />
                <div className="w-32 h-32 bg-gray-900/20 rounded-full absolute -bottom-10 -left-10" />
              </div>
              
              <div className="p-5 flex flex-col h-full relative z-10">
                {/* Card theme title */}
                <h3 className="font-serif font-bold text-xl text-gray-900 uppercase tracking-wide mb-3 border-b border-amber-200 pb-2">{entry.theme}</h3>
                
                {/* Modern example */}
                <div className="mb-4">
                  <span className="text-amber-700 text-xs uppercase tracking-widest font-medium">Modern Mirror</span>
                  <p className="font-medium text-gray-800 text-sm mt-1">{entry.modernExample}</p>
                </div>
                
                {/* Insight */}
                <div className="mt-auto">
                  <div className="border-t border-amber-200 pt-3 mt-3">
                    <p className="font-serif text-gray-700 italic leading-relaxed text-xs">{entry.insight}</p>
                  </div>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-300/50"></div>
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-300/50"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-300/50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-300/50"></div>
              </div>
            </motion.div>
          ))}
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