'use client';

import { motion } from 'framer-motion';
import LitDNAChart from './LitDNAChart';

interface LitDNAEntry {
  source: string;
  influence: string;
  notes: string;
}

interface LitDNASectionProps {
  bookTitle: string;
  litDNA: LitDNAEntry[];
}

export default function LitDNASection({ bookTitle, litDNA }: LitDNASectionProps) {
  if (!litDNA || litDNA.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Literary DNA
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-red-800 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto font-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            What influenced {bookTitle}? Explore the literary and historical influences 
            that shaped this work and continue to echo through its pages.
          </motion.p>
        </div>
        
        <LitDNAChart entries={litDNA} />
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 italic font-serif">
            Influence percentages represent estimated weight of each source on the final work.
          </p>
        </div>
      </div>
    </section>
  );
} 