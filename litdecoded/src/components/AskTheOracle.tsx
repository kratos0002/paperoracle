'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AskTheOracle() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [savedAnswers, setSavedAnswers] = useState<{question: string; answer: string}[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    setIsLoading(true);
    
    // In a real implementation, this would call an API with the question
    // For now, we'll simulate a response
    setTimeout(() => {
      // Mock AI response
      const responses = [
        "The text suggests this reflects the author's critique of how power corrupts idealism. Through this character's journey, we see how revolutionary passion can be perverted when unchecked by moral principles.",
        "This symbolism points to the inevitable cycle of history—how systems overthrown often morph into mirrors of what they replaced. The author invites us to question whether true change is possible without changing human nature itself.",
        "The narrative leaves this deliberately ambiguous, suggesting the character's motivations exist in a moral gray area. This ambiguity challenges readers to recognize that literature, like life, rarely offers simple moral judgments.",
        "This recurring motif represents the fragility of memory and truth in a world where narrative control equals power. The author seems to suggest that preserving genuine human connection requires resisting the urge to reshape history.",
        "What appears as contradiction actually illuminates the character's complex psychology. Their inconsistent behavior reveals the human capacity to compartmentalize conflicting beliefs—a theme that resonates with our own experiences of cognitive dissonance."
      ];
      
      // Select a random response
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setAnswer(randomResponse);
      setIsLoading(false);
      setIsAnswerVisible(true);
    }, 2000);
  };

  const resetForm = () => {
    setQuestion('');
    setAnswer('');
    setIsAnswerVisible(false);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const saveAnswer = () => {
    setSavedAnswers([...savedAnswers, {question, answer}]);
  };

  // Adjust textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [question]);

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {!isAnswerVisible ? (
          <motion.form 
            key="question-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="What truth is hidden in this story?"
                className="w-full p-4 pr-12 bg-amber-50 border border-amber-200 rounded-lg shadow-inner min-h-[100px] font-serif text-lg resize-none focus:ring-2 focus:ring-amber-300 focus:outline-none"
                rows={3}
              />
              <div className="absolute right-3 bottom-3">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="w-6 h-6 text-amber-700 opacity-50"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </motion.svg>
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="px-6 py-3 bg-amber-600 text-white rounded-full font-medium shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!question.trim() || isLoading}
              >
                Ask the Oracle
              </motion.button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="answer-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8"
          >
            <div className="mb-4 px-4 py-2 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg">
              <p className="font-serif text-md text-gray-700">{question}</p>
            </div>
            
            <motion.div 
              className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg shadow-lg border border-amber-200 relative overflow-hidden"
              initial={{ background: 'linear-gradient(to right, #fff7ed, #fef3c7)' }}
              animate={{ 
                background: [
                  'linear-gradient(to right, #fff7ed, #fef3c7)',
                  'linear-gradient(to right, #fef3c7, #fff7ed)',
                  'linear-gradient(to right, #fff7ed, #fef3c7)'
                ] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-amber-900 absolute -top-10 -left-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-amber-900 absolute bottom-0 right-0 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </div>
              
              <p className="font-serif text-xl leading-relaxed text-gray-800 relative z-10">
                {answer}
              </p>
              
              <div className="mt-4 text-right text-amber-800 text-sm flex items-center justify-end space-x-1 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span>Powered by Paper Oracle</span>
              </div>
            </motion.div>
            
            <div className="mt-6 flex justify-between">
              <motion.button
                onClick={resetForm}
                className="px-4 py-2 border border-amber-300 text-amber-700 rounded-full shadow-sm hover:bg-amber-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                  Ask Another
                </span>
              </motion.button>
              
              <motion.button
                onClick={saveAnswer}
                className="px-4 py-2 border border-amber-300 text-amber-700 rounded-full shadow-sm hover:bg-amber-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Save Insight
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {isLoading && (
        <motion.div 
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <motion.div 
              className="flex flex-col items-center"
              animate={{ 
                y: [0, -10, 0], 
                rotateZ: [0, 5, -5, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-10 h-10 text-amber-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 3C13.0899 3 16 5.91015 16 9.5C16 11.1116 15.4125 12.5901 14.4296 13.7319L14.7071 14.0094L15.5 14.0094L20.5 19.0094L19 20.5094L14 15.5094L14 14.7165L13.7225 14.439C12.5806 15.4219 11.1021 16.0094 9.5 16.0094C5.91015 16.0094 3 13.0993 3 9.50943C3 5.91958 5.91015 3 9.5 3ZM9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14C11.9853 14 14 11.9853 14 9.5C14 7.01472 11.9853 5 9.5 5Z" fill="currentColor"/>
              </svg>
              <div className="mt-4 text-gray-700 text-sm font-medium">The Oracle is pondering...</div>
            </motion.div>
          </div>
        </motion.div>
      )}
      
      {/* Saved Answers display could be added here */}
    </div>
  );
} 