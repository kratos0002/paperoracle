'use client';

import CharacterCard from './CharacterCard';
import { Character } from '../data/animalFarm';

interface CharactersSectionProps {
  characters: Character[];
}

export default function CharactersSection({ characters }: CharactersSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Character Map</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl">
            Meet the animals of the farm and discover who they represent in this political allegory
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character, index) => (
            <CharacterCard
              key={index}
              name={character.name}
              role={character.role}
              symbolism={character.symbolism}
              description={character.description}
              image={character.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 