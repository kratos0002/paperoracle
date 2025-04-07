'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { toast } from 'react-hot-toast';

export type ReaderRealization = {
  text: string;
  user?: string;
  createdAt: string;
};

export const ReaderRealizationsWall = ({ 
  data = [], 
  bookTitle 
}: { 
  data?: ReaderRealization[], 
  bookTitle?: string 
}) => {
  const [realizations, setRealizations] = useState<ReaderRealization[]>(data);
  const [newRealization, setNewRealization] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newRealization.trim()) {
      toast.error('Please enter your realization');
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, this would post to Supabase
    // For now, we'll just add to local state
    const newEntry: ReaderRealization = {
      text: newRealization,
      createdAt: new Date().toISOString(),
    };
    
    // Simulate network delay
    setTimeout(() => {
      setRealizations([newEntry, ...realizations]);
      setNewRealization('');
      setIsSubmitting(false);
      toast.success('Your realization was added to the archive.');
    }, 500);
  };

  return (
    <div className="w-full" ref={containerRef}>
      <h2 className="text-3xl font-serif mb-2">Reader Realizations</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Personal insights and emotional takeaways from readers of {bookTitle}.
      </p>

      {/* Submission Form */}
      <motion.div 
        className="mb-12 bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-100"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-serif mb-4">Share Your Realization</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-4 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all min-h-[120px] font-serif"
            placeholder="What did this book make you realize?"
            value={newRealization}
            onChange={(e) => setNewRealization(e.target.value)}
            disabled={isSubmitting}
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Realization'}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Realizations Wall */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {realizations.length > 0 ? (
          realizations.map((realization, index) => (
            <motion.div
              key={index}
              className="bg-[url('/subtle-paper.png')] bg-amber-50 rounded-xl shadow-md p-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote mark decoration */}
              <div className="absolute top-4 left-4 text-amber-300/30 text-6xl font-serif">"</div>
              
              <blockquote className="text-lg md:text-xl text-gray-800 font-serif leading-relaxed mb-4 relative z-10 pl-6">
                {realization.text}
              </blockquote>
              
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-amber-200">
                {realization.user && (
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{realization.user}</span>
                  </div>
                )}
                <div className="text-xs text-gray-500">
                  {new Date(realization.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              {/* Quote mark decoration (end) */}
              <div className="absolute bottom-4 right-4 text-amber-300/30 text-6xl font-serif rotate-180">"</div>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center py-12 text-gray-500 italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>Be the first to share your realization about this book.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}; 