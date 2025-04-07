'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OracleChatButtonProps {
  bookSlug: string;
}

export default function OracleChatButton({ bookSlug }: OracleChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const examplePrompts = [
    "What does Room 101 mean?",
    "Why did Winston betray Julia?",
    "How does the ending reflect the book's themes?",
    "What is the significance of the glass paperweight?"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsLoading(true);
    // Simulate API call - replace with actual API call
    setTimeout(() => {
      setResponse("This is a placeholder response. In a real implementation, this would be a response from an AI model based on the book's content.");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-amber-700 text-white p-4 rounded-full shadow-lg hover:bg-amber-800 transition"
          aria-label="Ask the Oracle"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 20l9-5-9-5-9 5 9 5z" />
            <path d="M12 12l9-5-9-5-9 5 9 5z" />
          </svg>
        </motion.button>
      </div>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-white rounded-t-2xl w-full max-w-md p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-serif text-amber-900">Ask the Oracle</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Ask a question about the book:</p>
                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Your question..."
                    className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !question.trim()}
                    className="bg-amber-700 text-white px-4 py-2 rounded-r-lg hover:bg-amber-800 transition disabled:opacity-50"
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "Ask"
                    )}
                  </button>
                </form>
              </div>

              {response && (
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-800">{response}</p>
                </div>
              )}

              <div>
                <p className="text-sm text-gray-600 mb-2">Example questions:</p>
                <div className="flex flex-wrap gap-2">
                  {examplePrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setQuestion(prompt)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 