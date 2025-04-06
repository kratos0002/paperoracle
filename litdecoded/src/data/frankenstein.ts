import { BookData } from './animalFarm';

const frankensteinData: BookData = {
  title: "Frankenstein",
  author: "Mary Shelley",
  year: "1818",
  genre: "Gothic Science Fiction",
  hook: "A brilliant scientist creates life, only to be haunted by his monstrous creation.",
  coverImage: "/placeholder-cover.jpg",
  
  summary: "Victor Frankenstein, a brilliant scientist, discovers the secret to creating life and assembles a creature from dead body parts. However, he is horrified by his creation's appearance and abandons it. The intelligent but isolated creature, rejected by society, seeks revenge on his creator. The creature kills Victor's younger brother, best friend, and bride, driving Victor to pursue his creation to the Arctic. The novel ends with Victor's death and the creature's declared intention to end its own life, devastated by the destruction it has caused.",
  
  themes: [
    {
      title: "Dangerous Knowledge",
      description: "The perils of pursuing knowledge without ethical constraints",
      quote: "Learn from me... how dangerous is the acquirement of knowledge.",
      icon: "⚗️"
    },
    {
      title: "Creation & Responsibility",
      description: "The moral responsibility creators have toward their creations",
      quote: "I ought to be thy Adam, but I am rather the fallen angel.",
      icon: "👁️"
    },
    {
      title: "Isolation & Alienation",
      description: "The profound loneliness experienced by both creator and creation",
      quote: "I am alone and miserable; man will not associate with me.",
      icon: "🏔️"
    },
    {
      title: "Nature vs. Nurture",
      description: "How environment and treatment shape character development",
      quote: "Was man, indeed, at once so powerful, so virtuous, and magnificent, yet so vicious and base?",
      icon: "🌱"
    }
  ],
  
  characters: [
    {
      name: "Victor Frankenstein",
      role: "Protagonist",
      symbolism: "Flawed creator/modern Prometheus",
      description: "An ambitious scientist whose obsession with conquering death leads to tragedy.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "The Creature",
      role: "Antagonist/Victim",
      symbolism: "The consequences of rejection",
      description: "A sentient being abandoned by his creator who turns to violence after experiencing universal rejection.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Elizabeth Lavenza",
      role: "Victor's Fiancée",
      symbolism: "Domesticity and innocence",
      description: "Victor's adopted sister and eventual fiancée who becomes a victim of the creature's revenge.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Henry Clerval",
      role: "Victor's Friend",
      symbolism: "Balance and humanity",
      description: "Victor's childhood friend who represents the human connections Victor neglects in his pursuit of knowledge.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Robert Walton",
      role: "Frame Narrator",
      symbolism: "Victor's parallel",
      description: "An Arctic explorer who rescues Victor and records his story, sharing Victor's ambition but learning from his mistakes.",
      image: "/placeholder-character.jpg"
    }
  ],
  
  timeline: [
    {
      title: "Walton's Arctic Expedition",
      description: "Captain Walton embarks on a journey to the North Pole and rescues Victor Frankenstein from the ice.",
      marker: "Frame Story"
    },
    {
      title: "Victor's Early Life",
      description: "Victor grows up in Geneva with his adopted sister Elizabeth and develops an interest in natural philosophy.",
      marker: "Background"
    },
    {
      title: "University Studies",
      description: "At Ingolstadt, Victor becomes obsessed with discovering the secret of life and creating a living being.",
      marker: "Rising Action"
    },
    {
      title: "Creation of the Monster",
      description: "Victor successfully animates his creature but is horrified by its appearance and abandons it.",
      marker: "Inciting Incident"
    },
    {
      title: "The Creature's Education",
      description: "Living near a cottage, the creature learns language and human emotions by observing a family.",
      marker: "Development"
    },
    {
      title: "William's Murder",
      description: "The rejected creature kills Victor's young brother and frames the family servant, Justine.",
      marker: "Conflict"
    },
    {
      title: "Creature's Demand",
      description: "The creature confronts Victor and demands he create a female companion for him.",
      marker: "Climax"
    },
    {
      title: "Destruction of Female Creature",
      description: "Victor begins work on a female creature but destroys it, fearing a race of monsters.",
      marker: "Turning Point"
    },
    {
      title: "Final Revenge",
      description: "The creature murders Elizabeth on her wedding night and leads Victor on a chase to the Arctic.",
      marker: "Resolution"
    }
  ],
  
  glossaryTerms: [
    {
      term: "Gothic Fiction",
      definition: "A genre emphasizing horror, death, and the supernatural, which Frankenstein helped establish."
    },
    {
      term: "Romanticism",
      definition: "A literary movement emphasizing emotion, individualism, and the sublimity of nature, reflected in the novel's intense emotional experiences."
    },
    {
      term: "Promethean Myth",
      definition: "The novel's subtitle 'The Modern Prometheus' references the Greek myth of Prometheus, who stole fire from the gods and was punished for his transgression."
    },
    {
      term: "Galvanism",
      definition: "The scientific theory popular during Shelley's time that electricity could reanimate dead tissue, which inspired Frankenstein's method of creation."
    },
    {
      term: "Frame Narrative",
      definition: "A story within a story; Frankenstein uses multiple narrators (Walton, Victor, and the creature) to tell its tale."
    }
  ],
  
  visualQuotes: [
    {
      quote: "I have love in me the likes of which you can scarcely imagine and rage the likes of which you would not believe. If I cannot satisfy the one, I will indulge the other.",
      author: "Mary Shelley, Frankenstein",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "Beware; for I am fearless, and therefore powerful.",
      author: "Mary Shelley, Frankenstein",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "Nothing is so painful to the human mind as a great and sudden change.",
      author: "Mary Shelley, Frankenstein",
      image: "/placeholder-quote.jpg"
    }
  ],
  
  relatedWorks: [
    {
      title: "Dracula",
      author: "Bram Stoker",
      year: "1897",
      description: "Another foundational Gothic novel featuring a monstrous yet complex antagonist.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
      author: "Robert Louis Stevenson",
      year: "1886",
      description: "Explores similar themes of scientific ambition and the duality of human nature.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "Blade Runner",
      author: "Based on 'Do Androids Dream of Electric Sheep?' by Philip K. Dick",
      year: "1982",
      description: "A modern science fiction story examining the relationship between creator and created beings.",
      image: "/placeholder-related.jpg"
    }
  ],
  
  quizQuestions: [
    {
      question: "How does Victor Frankenstein bring his creature to life?",
      options: ["Magic", "Chemical solution", "Electricity", "It's never explicitly described"],
      correctAnswer: 3
    },
    {
      question: "Where does the creature go after being abandoned by Victor?",
      options: ["The Arctic", "The forest", "Paris", "Africa"],
      correctAnswer: 1
    },
    {
      question: "Which of these is NOT a victim of the creature?",
      options: ["William Frankenstein", "Henry Clerval", "Elizabeth Lavenza", "Robert Walton"],
      correctAnswer: 3
    },
    {
      question: "Mary Shelley began writing Frankenstein as part of what famous literary challenge?",
      options: ["A university assignment", "A ghost story contest at the Villa Diodati", "A newspaper competition", "A bet with her husband Percy"],
      correctAnswer: 1
    }
  ],
  
  inTheWorld: [
    {
      type: "podcast",
      title: "The Ethics of Creation: AI and Frankenstein's Legacy",
      platform: "NPR",
      url: "https://example.com/npr-frankenstein-ai-ethics",
      description: "AI researchers and ethicists discuss how Mary Shelley's warnings about scientific responsibility without ethical boundaries apply to modern artificial intelligence development.",
      date: "2023-08-30"
    },
    {
      type: "news",
      title: "Frankenstein at 205: Medical Students Reflect on Scientific Ethics",
      platform: "Science Magazine",
      url: "https://example.com/science-mag-frankenstein-medical-ethics",
      description: "How medical schools are using Frankenstein to teach future doctors about bioethics, patient care, and the responsibilities of medical innovation.",
      date: "2023-01-18"
    },
    {
      type: "video",
      title: "Climate Change and the Year Without a Summer",
      platform: "PBS",
      url: "https://example.com/pbs-frankenstein-climate",
      description: "Environmental scientists explore how the volcanic winter of 1816 that inspired the writing of Frankenstein relates to current climate change discussions.",
      date: "2023-06-12"
    }
  ],
  
  // New fields for future enrichment
  litDNA: [],
  modernMirror: [],
  altEndings: [],
  quoteHighlights: [],
  faqInsights: [],
  readerRealizations: [],
  stillHurts: "",
  visualMetaphor: ""
};

export default frankensteinData; 