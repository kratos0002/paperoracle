'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface ModernMirrorEntry {
  theme: string;
  modernExample: string;
  insight: string;
}

interface ModernMirrorSectionProps {
  bookTitle: string;
  modernMirror: ModernMirrorEntry[];
}

export default function ModernMirrorSection({ bookTitle, modernMirror }: ModernMirrorSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  if (!modernMirror || modernMirror.length === 0) {
    return null;
  }

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            What {bookTitle} Sees in Today
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-indigo-700 mx-auto mb-6"
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
            Contemporary reflections of {bookTitle}'s warnings and wisdom in our modern world.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {modernMirror.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg border shadow-md 
                ${activeIndex === index ? 'border-indigo-600 bg-white' : 'border-gray-200 bg-white/80 hover:bg-white'} 
                transition-all duration-300 cursor-pointer`}
              onClick={() => handleCardClick(index)}
              style={{ 
                minHeight: activeIndex === index ? 'auto' : '12rem',
                transformStyle: 'preserve-3d',
                transform: activeIndex === index ? 'rotateY(0deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Card Front - Theme and Modern Example */}
              <div className="p-6 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif font-bold text-xl text-gray-800">{entry.theme}</h3>
                  <span className={`ml-2 flex-shrink-0 px-2.5 py-0.5 rounded-full ${activeIndex === index ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-600'} text-xs font-medium`}>
                    {activeIndex === index ? 'Expanded' : 'Click to explore'}
                  </span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wide">Modern Parallel</p>
                  <p className="font-serif text-gray-700">{entry.modernExample}</p>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 border-t border-gray-100 pt-4"
                    >
                      <p className="text-gray-600 font-medium text-sm uppercase tracking-wide mb-2">Insight</p>
                      <p className="font-serif text-gray-800 italic leading-relaxed">{entry.insight}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="absolute bottom-3 right-3">
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${activeIndex === index ? 'text-indigo-600' : 'text-gray-400'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="w-32 h-32 bg-indigo-700 rounded-full absolute -top-12 -right-12" />
                <div className="w-24 h-24 bg-indigo-900 rounded-full absolute -bottom-8 -left-8" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 italic font-serif">
            Click on any card to explore the full insight.
          </p>
        </div>
      </div>
    </section>
  );
} 