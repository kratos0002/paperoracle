'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import QAInsightPanel from './QAInsightPanel';
import AskTheOracle from './AskTheOracle';
import { FaqInsight } from '../data/animalFarm';

interface OracleSectionProps {
  faqInsights: FaqInsight[];
}

export default function OracleSection({ faqInsights }: OracleSectionProps) {
  const [activeTab, setActiveTab] = useState<'faq' | 'ask'>('faq');

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ask the Oracle
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-amber-600 w-0"
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
          </motion.h2>
          
          <p className="text-gray-700 mt-4 max-w-2xl">
            Explore the deeper meanings and hidden insights within the text, or pose your own questions to our literary oracle.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-amber-100 p-1">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                activeTab === 'faq' 
                  ? 'bg-amber-600 text-white shadow-sm' 
                  : 'text-amber-800 hover:bg-amber-200'
              } transition-colors duration-200`}
            >
              Reader Insights
            </button>
            <button
              onClick={() => setActiveTab('ask')}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                activeTab === 'ask' 
                  ? 'bg-amber-600 text-white shadow-sm' 
                  : 'text-amber-800 hover:bg-amber-200'
              } transition-colors duration-200`}
            >
              Ask Your Question
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-amber-100">
          {activeTab === 'faq' ? (
            <div className="mb-4">
              <div className="text-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-amber-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="font-serif text-2xl text-gray-800">Collective Wisdom</h3>
                <p className="text-gray-600 text-sm mt-1">Common questions explored by readers and scholars</p>
              </div>
              <QAInsightPanel insights={faqInsights} />
            </div>
          ) : (
            <div>
              <div className="text-center mb-6">
                <motion.div 
                  className="relative mx-auto w-12 h-12 mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </motion.div>
                <h3 className="font-serif text-2xl text-gray-800">Consult the Oracle</h3>
                <p className="text-gray-600 text-sm mt-1">Ask your own questions about the text's deeper meanings</p>
              </div>
              <AskTheOracle />
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 