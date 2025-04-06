'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export type QuoteHighlightEntry = {
  quote: string;
  annotation: string;
};

export const QuoteHighlightGallery = ({ data, bookTitle }: { data: QuoteHighlightEntry[], bookTitle?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  if (!data || data.length === 0) {
    return null;
  }
  
  const nextQuote = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };
  
  const prevQuote = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <section ref={containerRef} className="py-16 bg-amber-50/80">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            Lines That Linger
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-amber-700 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="text-gray-600 max-w-xl mx-auto italic font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {bookTitle ? `Words from ${bookTitle} that echo long after the final page` : 'Words that echo long after the final page'}
          </motion.p>
        </div>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="bg-[url('/subtle-paper.png')] bg-amber-50 rounded-xl shadow-md p-6 md:p-10 relative min-h-[360px]">
            {/* Quote mark decoration */}
            <div className="absolute top-4 left-4 text-amber-300/30 text-6xl font-serif">"</div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="pt-6 pb-4 px-2"
              >
                <blockquote className="text-xl md:text-2xl text-gray-800 font-serif leading-relaxed mb-6">
                  "{data[activeIndex].quote}"
                </blockquote>
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-0.5 bg-amber-200"></div>
                </div>
                
                <p className="text-gray-600 italic font-light text-lg">
                  {data[activeIndex].annotation}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Quote mark decoration (end) */}
            <div className="absolute bottom-4 right-4 text-amber-300/30 text-6xl font-serif rotate-180">"</div>
            
            {/* Ink splash decoration */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 text-amber-900/10 transform rotate-12">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M81.5,37.7c-0.5-1.5-2.5-0.5-3,0.7c-0.2,0.5-1.5,4.4-2.7,6c-0.4-0.6-1-1.2-1.5-1.7c0.2-1.9,1.8-3.5,1.8-5.7
                c0-1.8-3.5-1.5-3.5,0.8c0,1,1.9,3.2,0.7,3.7c-2.6,1.2-4.6-4.9-7-4.9c-2.7,0-2.2,2-1.2,3c-0.8,0.2-3.6-0.5-4.4-0.5
                c-1.1,0-1.8,0.1-1.8,1.5c0,0.5,0.2,1.2,0.5,1.5c-1.2,0.3-2.2,0.7-3.2,1.5c-2.3-1-7,0.2-9.4-0.2c-1.7-0.3-2.4-3.4-4.6-3.4
                c-1.7,0-2.5,2.5-1.4,3.7c-1.3,0.5-2.5,1.4-2.8,2.8c-2.7-0.2-5.5-0.6-8.2-0.6c-1.4,0-1.5,2-0.3,2.4c-0.8,0.5-1.1,1.5-0.5,2.3
                c-2.5,1.1-7.7,2.5-8.1,5.4c-0.2,2.4,3.4,2.5,4.9,2.2c-0.5,2.9,1.1,4.4,3.9,4.8c0.9,3.1,5.5,4.4,8.1,2.6c2.9,2.1,6-0.9,9.4-0.5
                c1.5,0.1,7.3,5.5,9.5,3.4c1.5-1.4,0.3-2.7-0.9-3.4c0.8-0.7,1.3-1.6,1.3-2.9c3.4-0.4,6.7-0.2,10-0.9c1.5,1.7,5.8,0.9,6-1.5
                c3.1-0.9,4.8-2.9,6.4-5.4c0.5-0.8,5.3-2.5,5-5.9c-0.1-1.3-1.4-1.5-2.4-1.2c-0.2-0.6-0.2-1.1-0.8-1.5c1.2-1.2,2.1-3.1,2.1-4.7
                C81.9,38.3,81.7,38.1,81.5,37.7z"/>
              </svg>
            </div>
          </div>
          
          {/* Mobile Navigation Arrows */}
          <button 
            onClick={prevQuote}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full shadow-md p-2 text-amber-700 hover:text-amber-900"
            aria-label="Previous quote"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            onClick={nextQuote}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full shadow-md p-2 text-amber-700 hover:text-amber-900"
            aria-label="Next quote"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Mobile Pagination Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-amber-700' : 'bg-amber-200'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Stacked View */}
        <div className="hidden md:block">
          <div className="space-y-12">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[url('/subtle-paper.png')] bg-amber-50 rounded-xl shadow-md p-10 relative"
              >
                {/* Quote mark decoration */}
                <div className="absolute top-4 left-4 text-amber-300/30 text-6xl font-serif">"</div>
                
                <blockquote className="text-2xl md:text-3xl text-gray-800 font-serif leading-relaxed mb-6 relative z-10">
                  "{item.quote}"
                </blockquote>
                
                <div className="w-24 h-0.5 bg-amber-200 mb-6"></div>
                
                <p className="text-gray-600 italic font-light text-xl max-w-3xl">
                  {item.annotation}
                </p>
                
                {/* Quote mark decoration (end) */}
                <div className="absolute bottom-4 right-4 text-amber-300/30 text-6xl font-serif rotate-180">"</div>
                
                {/* Ink splash decoration */}
                <div className="absolute -bottom-5 -right-5 w-20 h-20 text-amber-900/10 transform rotate-12">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M81.5,37.7c-0.5-1.5-2.5-0.5-3,0.7c-0.2,0.5-1.5,4.4-2.7,6c-0.4-0.6-1-1.2-1.5-1.7c0.2-1.9,1.8-3.5,1.8-5.7
                    c0-1.8-3.5-1.5-3.5,0.8c0,1,1.9,3.2,0.7,3.7c-2.6,1.2-4.6-4.9-7-4.9c-2.7,0-2.2,2-1.2,3c-0.8,0.2-3.6-0.5-4.4-0.5
                    c-1.1,0-1.8,0.1-1.8,1.5c0,0.5,0.2,1.2,0.5,1.5c-1.2,0.3-2.2,0.7-3.2,1.5c-2.3-1-7,0.2-9.4-0.2c-1.7-0.3-2.4-3.4-4.6-3.4
                    c-1.7,0-2.5,2.5-1.4,3.7c-1.3,0.5-2.5,1.4-2.8,2.8c-2.7-0.2-5.5-0.6-8.2-0.6c-1.4,0-1.5,2-0.3,2.4c-0.8,0.5-1.1,1.5-0.5,2.3
                    c-2.5,1.1-7.7,2.5-8.1,5.4c-0.2,2.4,3.4,2.5,4.9,2.2c-0.5,2.9,1.1,4.4,3.9,4.8c0.9,3.1,5.5,4.4,8.1,2.6c2.9,2.1,6-0.9,9.4-0.5
                    c1.5,0.1,7.3,5.5,9.5,3.4c1.5-1.4,0.3-2.7-0.9-3.4c0.8-0.7,1.3-1.6,1.3-2.9c3.4-0.4,6.7-0.2,10-0.9c1.5,1.7,5.8,0.9,6-1.5
                    c3.1-0.9,4.8-2.9,6.4-5.4c0.5-0.8,5.3-2.5,5-5.9c-0.1-1.3-1.4-1.5-2.4-1.2c-0.2-0.6-0.2-1.1-0.8-1.5c1.2-1.2,2.1-3.1,2.1-4.7
                    C81.9,38.3,81.7,38.1,81.5,37.7z"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: data.length * 0.2 + 0.5 }}
        >
          <p className="text-gray-600 italic font-light mb-4">
            Did a line from this book haunt you?
          </p>
          <button className="px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors shadow-sm">
            Submit your quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 