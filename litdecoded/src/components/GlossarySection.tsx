'use client';

import { useState } from 'react';
import { GlossaryTerm } from '../data/animalFarm';
import glossaryData, { GlossaryItem } from '../data/glossary';

interface GlossarySectionProps {
  terms: GlossaryTerm[];
}

export default function GlossarySection({ terms }: GlossarySectionProps) {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);
  const [isSimplified, setIsSimplified] = useState<boolean>(false);
  
  const toggleTerm = (term: string) => {
    setActiveTerm(activeTerm === term ? null : term);
    // Reset to normal explanation when switching terms
    if (activeTerm !== term) {
      setIsSimplified(false);
    }
  };
  
  const toggleExplanationType = () => {
    setIsSimplified(!isSimplified);
  };
  
  const getFullGlossaryItem = (term: string): GlossaryItem | null => {
    return glossaryData[term] || null;
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Literary Glossary</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl">
            Key literary concepts to help understand Animal Farm's deeper meaning
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {terms.map((item, index) => {
            const fullItem = getFullGlossaryItem(item.term);
            return (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleTerm(item.term)}
                  className={`w-full px-4 py-3 rounded-xl text-center transition-all duration-300 ${
                    activeTerm === item.term
                      ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                      : 'bg-amber-50 text-amber-900 hover:bg-amber-100 shadow hover:shadow-md hover:-translate-y-1'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50`}
                >
                  {item.term}
                </button>
                
                {activeTerm === item.term && (
                  <div className="absolute z-10 top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl p-5 border border-gray-100 transform transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-gray-900">{item.term}</h3>
                      <button 
                        onClick={() => setActiveTerm(null)}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4">
                      {fullItem && isSimplified && fullItem.simplifiedExplanation 
                        ? fullItem.simplifiedExplanation 
                        : (fullItem ? fullItem.definition : item.definition)}
                    </p>
                    
                    {fullItem && fullItem.simplifiedExplanation && (
                      <button
                        onClick={toggleExplanationType}
                        className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-800 py-1 px-3 rounded-full transition-colors duration-200 inline-flex items-center"
                      >
                        {isSimplified ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                            Show standard definition
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            Explain like I'm 12
                          </>
                        )}
                      </button>
                    )}
                    
                    <div className="mt-3 text-xs text-gray-500 flex items-center">
                      <button 
                        onClick={() => navigator.clipboard.writeText(fullItem ? fullItem.definition : item.definition)}
                        className="flex items-center text-amber-700 hover:text-amber-900 mr-4"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                        Copy
                      </button>
                      <button className="flex items-center text-amber-700 hover:text-amber-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Spot literary devices as you read to deepen your understanding of the text.
          </p>
        </div>
      </div>
    </section>
  );
} 