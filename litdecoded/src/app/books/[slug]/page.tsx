import { notFound } from 'next/navigation';

import HeroSection from '../../../components/HeroSection';
import SummarySection from '../../../components/SummarySection';
import ThemesSection from '../../../components/ThemesSection';
import CharactersSection from '../../../components/CharactersSection';
import TimelineSection from '../../../components/TimelineSection';
import GlossarySection from '../../../components/GlossarySection';
import VisualGallerySection from '../../../components/VisualGallerySection';
import RelatedWorksSection from '../../../components/RelatedWorksSection';
import QuizSection from '../../../components/QuizSection';
import FooterCTA from '../../../components/FooterCTA';
import WorldReferencesSection from '../../../components/WorldReferencesSection';
import OracleSection from '../../../components/OracleSection';
import LitDNASection from '../../../components/LitDNASection';
import ModernMirrorCards from '../../../components/ModernMirrorCards';
import { AltEndingCarousel } from '../../../components/AltEndingCarousel';
import { QuoteHighlightGallery } from '../../../components/QuoteHighlightGallery';

// Import book list and related data
import bookList, { Book } from '../../../data/bookList';
import animalFarmData, { BookData } from '../../../data/animalFarm';
import nineteenEightyFourData from '../../../data/nineteenEightyFour';
import hamletData from '../../../data/hamlet';
import greatGatsbyData from '../../../data/the-great-gatsby';
import frankensteinData from '../../../data/frankenstein';
import janeEyreData from '../../../data/jane-eyre';
import heartOfDarknessData from '../../../data/heart-of-darkness';
import { getBookBySlug } from '../../../lib/bookUtils';

// Create a books registry that maps slugs to data with proper typing
const booksRegistry: Record<string, BookData> = {
  'animal-farm': animalFarmData,
  '1984': nineteenEightyFourData,
  'hamlet': hamletData,
  'the-great-gatsby': greatGatsbyData,
  'frankenstein': frankensteinData,
  'jane-eyre': janeEyreData,
  'heart-of-darkness': heartOfDarknessData,
  // We'll add more books here as they become enriched
};

export function generateStaticParams() {
  return bookList.map(book => ({ slug: book.slug }));
}

interface BookPageProps {
  params: {
    slug: string;
  }
}

export default function BookPage({ params }: BookPageProps) {
  const { slug } = params;
  const book = getBookBySlug(slug, bookList);
  
  if (!book) {
    notFound();
  }
  
  // If book is pending, show a coming soon page
  if (book.status === 'pending') {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{book.title}</h1>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 mb-8">
            {book.author}, {book.year}
          </p>
          <div className="bg-white rounded-2xl shadow-md p-10 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-700 mb-6">
              We're currently working on an in-depth analysis of this literary classic. 
              Please check back later for a detailed breakdown of themes, characters, and insights.
            </p>
            <div className="inline-block bg-amber-100 text-amber-800 rounded-full px-4 py-2 font-medium">
              Analysis in Progress
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  // If book is enriched, check if we have the data
  const bookData = booksRegistry[slug];
  
  if (!bookData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <HeroSection
        title={bookData.title}
        author={bookData.author}
        year={bookData.year}
        genre={bookData.genre}
        hook={bookData.hook}
        coverImage={bookData.coverImage}
      />
      
      {bookData.summary && <SummarySection summary={bookData.summary} />}
      
      {bookData.themes && bookData.themes.length > 0 && <ThemesSection themes={bookData.themes} />}
      
      {bookData.characters && bookData.characters.length > 0 && <CharactersSection characters={bookData.characters} />}
      
      {bookData.timeline && bookData.timeline.length > 0 && <TimelineSection events={bookData.timeline} bookTitle={bookData.title} />}
      
      {bookData.glossaryTerms && bookData.glossaryTerms.length > 0 && <GlossarySection terms={bookData.glossaryTerms} />}
      
      {bookData.visualQuotes && bookData.visualQuotes.length > 0 && <VisualGallerySection quotes={bookData.visualQuotes} />}
      
      {bookData.modernMirror && bookData.modernMirror.length > 0 && 
        <ModernMirrorCards modernMirror={bookData.modernMirror} bookTitle={bookData.title} />
      }
      
      {bookData.quoteHighlights && bookData.quoteHighlights.length > 0 && 
        <QuoteHighlightGallery data={bookData.quoteHighlights} bookTitle={bookData.title} />
      }
      
      {bookData.altEndings && bookData.altEndings.length > 0 && 
        <AltEndingCarousel data={bookData.altEndings} bookTitle={bookData.title} />
      }
      
      {bookData.faqInsights && bookData.faqInsights.length > 0 && <OracleSection faqInsights={bookData.faqInsights} />}
      
      {bookData.litDNA && bookData.litDNA.length > 0 && <LitDNASection bookTitle={bookData.title} litDNA={bookData.litDNA} />}
      
      {bookData.relatedWorks && bookData.relatedWorks.length > 0 && <RelatedWorksSection works={bookData.relatedWorks} />}
      
      {bookData.inTheWorld && bookData.inTheWorld.length > 0 && 
        <WorldReferencesSection references={bookData.inTheWorld} bookTitle={bookData.title} />
      }
      
      {bookData.quizQuestions && bookData.quizQuestions.length > 0 && <QuizSection questions={bookData.quizQuestions} />}
      
      <FooterCTA />
    </main>
  );
} 