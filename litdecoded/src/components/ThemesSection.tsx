'use client';

import ThemeCard from './ThemeCard';
import { Theme } from '../data/animalFarm';

interface ThemesSectionProps {
  themes: Theme[];
}

export default function ThemesSection({ themes }: ThemesSectionProps) {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Key Themes</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl">
            Explore the central ideas and messages behind Animal Farm's powerful allegory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <ThemeCard 
              key={index}
              title={theme.title}
              description={theme.description}
              quote={theme.quote}
              icon={theme.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 