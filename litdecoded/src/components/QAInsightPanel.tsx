'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaqInsight } from '../data/animalFarm';

interface QAInsightPanelProps {
  insights: FaqInsight[];
}

export default function QAInsightPanel({ insights }: QAInsightPanelProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-center mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-amber-700"
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6z" 
            clipRule="evenodd" 
          />
          <path 
            d="M8 7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" 
          />
        </svg>
      </div>
      
      {insights.map((insight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          className="bg-amber-50 border border-amber-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <button
            onClick={() => toggleExpand(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center"
            aria-expanded={expandedIndex === index}
          >
            <h3 className="font-serif text-lg md:text-xl text-gray-800">
              {insight.question}
            </h3>
            <motion.span
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-amber-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.span>
          </button>
          
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 border-t border-amber-200">
                  <blockquote className="pl-4 border-l-2 border-amber-400 italic mt-3 font-light text-gray-700">
                    <p className="font-sans text-base leading-relaxed">
                      {insight.answer}
                    </p>
                  </blockquote>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
} 