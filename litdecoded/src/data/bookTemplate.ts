import { BookData } from './animalFarm';

// Template for creating new book data - replace placeholders with actual content
const bookTemplateData: BookData = {
  title: "BOOK_TITLE",
  author: "BOOK_AUTHOR",
  year: "BOOK_YEAR",
  genre: "BOOK_GENRE",
  hook: "A compelling one-line hook about this book.",
  coverImage: "/placeholder-cover.jpg",
  
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare, nisi nec ultricies blandit, tellus purus congue justo, non finibus metus dui a nisl. Vivamus vestibulum sollicitudin nulla, non rutrum enim tristique eu.",
  
  themes: [
    {
      title: "Theme 1",
      description: "Description of the first major theme in the book",
      quote: "A quote that illustrates this theme.",
      icon: "🔍"
    },
    {
      title: "Theme 2",
      description: "Description of the second major theme in the book",
      quote: "A quote that illustrates this theme.",
      icon: "💡"
    },
    {
      title: "Theme 3",
      description: "Description of the third major theme in the book",
      quote: "A quote that illustrates this theme.",
      icon: "🌍"
    },
    {
      title: "Theme 4",
      description: "Description of the fourth major theme in the book",
      quote: "A quote that illustrates this theme.",
      icon: "⏳"
    }
  ],
  
  characters: [
    {
      name: "Character 1",
      role: "Protagonist",
      symbolism: "What this character symbolizes",
      description: "Description of this character and their arc through the story.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Character 2",
      role: "Antagonist",
      symbolism: "What this character symbolizes",
      description: "Description of this character and their arc through the story.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Character 3",
      role: "Supporting Character",
      symbolism: "What this character symbolizes",
      description: "Description of this character and their arc through the story.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Character 4",
      role: "Supporting Character",
      symbolism: "What this character symbolizes",
      description: "Description of this character and their arc through the story.",
      image: "/placeholder-character.jpg"
    }
  ],
  
  timeline: [
    {
      title: "Beginning Event",
      description: "Description of an important event at the start of the story.",
      marker: "Beginning"
    },
    {
      title: "Rising Action",
      description: "Description of an important event as tension builds.",
      marker: "Middle"
    },
    {
      title: "Climax",
      description: "Description of the climactic moment in the story.",
      marker: "Climax"
    },
    {
      title: "Resolution",
      description: "Description of how the story resolves.",
      marker: "End"
    }
  ],
  
  glossaryTerms: [
    {
      term: "Literary Term 1",
      definition: "Definition of a literary term relevant to this book."
    },
    {
      term: "Literary Term 2",
      definition: "Definition of a literary term relevant to this book."
    },
    {
      term: "Literary Term 3",
      definition: "Definition of a literary term relevant to this book."
    },
    {
      term: "Literary Term 4",
      definition: "Definition of a literary term relevant to this book."
    }
  ],
  
  visualQuotes: [
    {
      quote: "A memorable quote from the book that illustrates a key theme.",
      author: "BOOK_AUTHOR, BOOK_TITLE",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "Another memorable quote from the book that illustrates a key theme.",
      author: "BOOK_AUTHOR, BOOK_TITLE",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "A third memorable quote from the book that illustrates a key theme.",
      author: "BOOK_AUTHOR, BOOK_TITLE",
      image: "/placeholder-quote.jpg"
    }
  ],
  
  relatedWorks: [
    {
      title: "Related Book 1",
      author: "Author 1",
      year: "Year",
      description: "Brief description of how this work relates to the main book.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "Related Book 2",
      author: "Author 2",
      year: "Year",
      description: "Brief description of how this work relates to the main book.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "Related Book 3",
      author: "Author 3",
      year: "Year",
      description: "Brief description of how this work relates to the main book.",
      image: "/placeholder-related.jpg"
    }
  ],
  
  quizQuestions: [
    {
      question: "Question about a plot point or theme in the book?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0
    },
    {
      question: "Question about a character or motif in the book?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 1
    },
    {
      question: "Question about the historical context or author's intent?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 2
    },
    {
      question: "Question about the book's literary significance?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 3
    }
  ],
  
  // Fields for future enrichment
  inTheWorld: [],
  faqInsights: [],
  litDNA: [],
  modernMirror: [],
  altEndings: [],
  quoteHighlights: [],
  readerRealizations: [],
  stillHurts: "",
  visualMetaphor: ""
};

export default bookTemplateData; 