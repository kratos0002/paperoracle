import { notFound } from 'next/navigation';
import { getBookBySlug } from '@/lib/bookUtils';
import bookList from '@/data/bookList';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import LitDNASection from '@/components/LitDNASection';
import CharactersSection from '@/components/CharactersSection';
import TimelineSection from '@/components/TimelineSection';
import OracleSection from '@/components/OracleSection';
import ModernMirrorSection from '@/components/ModernMirrorSection';
import { AltEndingCarousel } from '@/components/AltEndingCarousel';
import { QuoteHighlightGallery } from '@/components/QuoteHighlightGallery';
import WorldReferencesSection from '@/components/WorldReferencesSection';
import InTheWorldFeed from '@/components/InTheWorldFeed';
import { motion } from 'framer-motion';
import OracleChatButton from '@/components/OracleChatButton';
import { ReaderRealizationsWall } from '@/components/ReaderRealizationsWall';
import { ThemeMapAcrossMedia } from '@/components/ThemeMapAcrossMedia';
import { LiteraryThreadsFromOracle } from '@/components/LiteraryThreadsFromOracle';

// Create a books registry that maps slugs to data
const booksRegistry: Record<string, any> = {
  'animal-farm': require('@/data/animalFarm').default,
  '1984': require('@/data/nineteenEightyFour').default,
  'hamlet': require('@/data/hamlet').default,
  'the-great-gatsby': require('@/data/the-great-gatsby').default,
  'frankenstein': require('@/data/frankenstein').default,
  'jane-eyre': require('@/data/jane-eyre').default,
  'heart-of-darkness': require('@/data/heart-of-darkness').default,
};

function getBookData(slug: string) {
  return booksRegistry[slug];
}

interface BookPageProps {
  params: {
    slug: string;
  };
}

export default async function BookPage({ params }: BookPageProps) {
  // Properly handle async params
  const slug = await Promise.resolve(params.slug);
  const book = getBookBySlug(slug, bookList);
  
  if (!book) {
    notFound();
  }

  const bookData = getBookData(book.slug);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section id="hero" className="relative scroll-mt-20">
        <HeroSection
          title={bookData.title}
          author={bookData.author}
          year={bookData.year}
          genre={bookData.genre}
          hook={bookData.hook}
          coverImage={bookData.coverImage}
        />
      </section>

      {/* 2. In The World Section */}
      {bookData.inTheWorld && bookData.inTheWorld.length > 0 && (
        <section id="in-the-world" className="py-16 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <InTheWorldFeed entries={bookData.inTheWorld} bookTitle={book.title} />
          </div>
        </section>
      )}

      {/* 3. Reader Realizations Wall */}
      <section id="reader-realizations" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <ReaderRealizationsWall 
            data={bookData.readerRealizations || []} 
            bookTitle={book.title} 
          />
        </div>
      </section>

      {/* 4. Literary Threads from Oracle */}
      <section id="literary-threads" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <LiteraryThreadsFromOracle bookTitle={book.title} bookSlug={book.slug} />
        </div>
      </section>

      {/* 5. Theme Map Across Media Section */}
      {bookData.themeMap && bookData.themeMap.length > 0 && (
        <section id="theme-map" className="py-16 bg-amber-50 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <ThemeMapAcrossMedia themeMap={bookData.themeMap} bookTitle={book.title} />
          </div>
        </section>
      )}

      {/* 6. Summary (TLDR) & Quote Highlights Section */}
      <section id="summary" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <SummarySection summary={bookData.summary} />
        </div>
      </section>

      {bookData.quoteHighlights && bookData.quoteHighlights.length > 0 && (
        <section id="quotes" className="py-16 bg-amber-50 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <QuoteHighlightGallery data={bookData.quoteHighlights} bookTitle={book.title} />
          </div>
        </section>
      )}

      {/* 7. LitDNA Section */}
      {bookData.litDNA && (
        <section id="litdna" className="py-16 bg-gray-50 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <LitDNASection litDNA={bookData.litDNA} bookTitle={book.title} />
          </div>
        </section>
      )}

      {/* 8. Modern Mirror Section */}
      {bookData.modernMirror && (
        <section id="modern-mirror" className="py-16 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <ModernMirrorSection bookTitle={book.title} modernMirror={bookData.modernMirror} />
          </div>
        </section>
      )}

      {/* 9. Characters Section */}
      {bookData.characters && (
        <section id="characters" className="py-16 bg-gray-50 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <CharactersSection characters={bookData.characters} />
          </div>
        </section>
      )}

      {/* 10. Timeline Section */}
      {bookData.timeline && (
        <section id="timeline" className="py-16 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <TimelineSection events={bookData.timeline} bookTitle={book.title} />
          </div>
        </section>
      )}

      {/* 11. Oracle FAQ Insights Section */}
      <section id="oracle" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <OracleSection faqInsights={bookData.faqInsights || []} />
        </div>
      </section>

      {/* 12. Alt Endings Section */}
      {bookData.altEndings && bookData.altEndings.length > 0 && (
        <section id="alt-endings" className="py-16 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4">
            <AltEndingCarousel data={bookData.altEndings} bookTitle={book.title} />
          </div>
        </section>
      )}

      {/* 13. StillHurts & VisualMetaphor would go here */}
      {/* Add these components when they're created */}

      {/* Floating Chat Button */}
      <OracleChatButton bookSlug={book.slug} />
    </main>
  );
} 