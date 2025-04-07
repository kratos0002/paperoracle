import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AskTheOracleButtonProps {
  bookTitle: string;
  sampleQuestions?: string[];
}

export default function AskTheOracleButton({ 
  bookTitle, 
  sampleQuestions = [
    "What's the main theme?",
    "Who is the protagonist?",
    "What's the significance of the ending?",
    "How does this relate to today?"
  ] 
}: AskTheOracleButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-4 z-50 bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDrawer}
        aria-label="Ask the Oracle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
            />
            
            {/* Drawer Content */}
            <motion.div
              className="fixed bottom-0 right-0 w-full md:w-96 h-[80vh] bg-white rounded-t-xl md:rounded-l-xl z-50 overflow-hidden flex flex-col"
              initial={{ y: "100%", x: "100%" }}
              animate={{ y: 0, x: 0 }}
              exit={{ y: "100%", x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="bg-amber-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-lg font-medium">Ask the Oracle about {bookTitle}</h3>
                <button onClick={toggleDrawer} className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Sample Questions */}
              <div className="p-4 border-b">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Sample Questions</h4>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="bg-amber-50 text-amber-800 text-sm px-3 py-1 rounded-full hover:bg-amber-100 transition-colors"
                      onClick={() => {
                        // Here you would implement the actual chat functionality
                        console.log(`Asking: ${question}`);
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Chat Interface */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    Ask me anything about {bookTitle}. I can help you understand themes, characters, historical context, and more.
                  </p>
                </div>
                
                {/* Chat messages would appear here */}
              </div>
              
              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-r-lg hover:bg-amber-700 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 