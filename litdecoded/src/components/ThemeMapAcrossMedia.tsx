'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Icons for different media types
const mediaIcons = {
  book: "📖",
  movie: "🎬",
  tv: "📺",
  song: "🎧"
};

type MediaItem = {
  type: "book" | "movie" | "tv" | "song";
  title: string;
  url: string;
  reason: string;
};

type ThemeMapItem = {
  theme: string;
  items: MediaItem[];
};

interface ThemeMapAcrossMediaProps {
  themeMap: ThemeMapItem[];
  bookTitle?: string;
}

export const ThemeMapAcrossMedia = ({ themeMap, bookTitle }: ThemeMapAcrossMediaProps) => {
  const [selectedTheme, setSelectedTheme] = useState<string>(themeMap[0]?.theme || '');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Set isMobile on client-side only
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get the items for the selected theme
  const selectedItems = themeMap.find(item => item.theme === selectedTheme)?.items || [];

  // Group items by type
  const groupedItems = selectedItems.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, MediaItem[]>);

  return (
    <div className="w-full" ref={containerRef}>
      <h2 className="text-3xl font-serif mb-2">Thematic Connections</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">
        See how themes from {bookTitle || "this book"} connect across different forms of media and culture.
      </p>

      {/* Theme Selection */}
      <div className="flex flex-wrap gap-2 mb-8">
        {themeMap.map((item) => (
          <motion.button
            key={item.theme}
            onClick={() => setSelectedTheme(item.theme)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border-2 ${
              selectedTheme === item.theme
                ? 'bg-amber-100 border-amber-400 text-amber-800'
                : 'bg-white border-gray-200 text-gray-800 hover:border-amber-200'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {item.theme}
          </motion.button>
        ))}
      </div>

      {/* Media Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTheme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Group headers and items */}
          {Object.entries(groupedItems).map(([type, items]) => (
            <div key={type} className="col-span-full mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{mediaIcons[type as keyof typeof mediaIcons]}</span>
                <h3 className="text-xl font-medium capitalize">{type}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${index}`}
                    className="relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredItem(`${item.title}-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ y: -5 }}
                  >
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-4 h-full"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl mt-1">{mediaIcons[item.type]}</div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          
                          {/* Show reason on hover or always on mobile */}
                          <AnimatePresence>
                            {(hoveredItem === `${item.title}-${index}` || isMobile) && (
                              <motion.p 
                                className="text-sm text-gray-600 mt-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.reason}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Empty state */}
          {selectedItems.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <p className="text-gray-500 italic">No connections found for this theme.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Mobile Theme Selector (shown only on small screens) */}
      <div className="md:hidden mt-6">
        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md bg-white"
        >
          {themeMap.map((item) => (
            <option key={item.theme} value={item.theme}>
              {item.theme}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}; 