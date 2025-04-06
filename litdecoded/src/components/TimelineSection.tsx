'use client';

import { TimelineEvent } from '../data/animalFarm';

interface TimelineSectionProps {
  events: TimelineEvent[];
  bookTitle?: string;
}

export default function TimelineSection({ events, bookTitle = "the book" }: TimelineSectionProps) {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Timeline</h2>
          <div className="w-16 h-1 bg-amber-600 mb-6"></div>
          <p className="text-gray-700 max-w-2xl">
            The key moments in {bookTitle}'s story and their significance
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`relative z-10 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-amber-400 z-10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-amber-600"></div>
                </div>
                
                {/* Time marker */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                  <span className="inline-block py-1 px-4 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    {event.marker}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 