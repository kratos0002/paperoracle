'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface LitDNAEntry {
  source: string;
  influence: string;
  notes: string;
}

interface LitDNAChartProps {
  entries: LitDNAEntry[];
}

export default function LitDNAChart({ entries }: LitDNAChartProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <div 
      ref={containerRef} 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
    >
      {entries.map((entry, index) => (
        <motion.div
          key={entry.source}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="bg-amber-50 border border-amber-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-32 h-32 bg-amber-900 rounded-full absolute -top-12 -right-12" />
            <div className="w-24 h-24 bg-red-900 rounded-full absolute -bottom-8 -left-8" />
          </div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <h3 className="font-serif font-bold text-xl text-gray-800">{entry.source}</h3>
            <div className="flex-shrink-0 w-12 h-12 bg-red-800 text-amber-50 rounded-full flex items-center justify-center font-serif font-medium shadow-sm">
              {entry.influence}
            </div>
          </div>
          
          <p className="font-serif text-gray-700 italic leading-relaxed relative z-10">
            {entry.notes}
          </p>
          
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mt-5 opacity-30" />
        </motion.div>
      ))}
    </div>
  );
} 