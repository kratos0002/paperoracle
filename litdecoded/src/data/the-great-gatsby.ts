import { BookData } from './animalFarm';

const greatGatsbyData: BookData = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: "1925",
  genre: "Modernist Fiction",
  hook: "A tragic exploration of the hollow American Dream in the decadent Jazz Age.",
  coverImage: "/placeholder-cover.jpg",
  
  summary: "Narrator Nick Carraway moves to Long Island and becomes neighbors with the mysterious millionaire Jay Gatsby, who hosts lavish parties while pining for Nick's cousin, Daisy Buchanan. As their lives intertwine, Nick discovers that Gatsby's wealth and persona were cultivated solely to win back Daisy, whom he loved before the war but lost due to his poverty. Their reunion leads to tragedy when Daisy's husband Tom discovers the affair, resulting in death, disillusionment, and the shattering of Gatsby's dream, revealing the emptiness behind the glittering façade of 1920s high society.",
  
  themes: [
    {
      title: "The American Dream",
      description: "The corruption and ultimate unattainability of the American ideal of success",
      quote: "Gatsby believed in the green light, the orgastic future that year by year recedes before us.",
      icon: "💰"
    },
    {
      title: "Social Class & Privilege",
      description: "The insurmountable divide between old money, new money, and no money",
      quote: "They were careless people, Tom and Daisy—they smashed up things and creatures and then retreated back into their money.",
      icon: "👑"
    },
    {
      title: "Love & Obsession",
      description: "The destructive power of idealized love and romantic obsession",
      quote: "He had waited five years and bought a mansion where he dispensed starlight to casual moths.",
      icon: "💔"
    },
    {
      title: "Illusion vs. Reality",
      description: "The contrast between appearances and the often corrupt reality beneath",
      quote: "The loneliest moment in someone's life is when they are watching their whole world fall apart, and all they can do is stare blankly.",
      icon: "🎭"
    }
  ],
  
  characters: [
    {
      name: "Jay Gatsby",
      role: "Protagonist",
      symbolism: "The corrupted American Dream",
      description: "A self-made millionaire whose entire life is constructed around winning back his lost love, Daisy Buchanan.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Nick Carraway",
      role: "Narrator",
      symbolism: "Moral conscience",
      description: "The story's narrator who moves next door to Gatsby and becomes the only character who truly cares for him.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Daisy Buchanan",
      role: "Gatsby's Love Interest",
      symbolism: "Wealth and carelessness",
      description: "Beautiful but shallow, Daisy represents the old-money elite that Gatsby aspires to join.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Tom Buchanan",
      role: "Antagonist",
      symbolism: "Old money entitlement",
      description: "Daisy's brutish, wealthy husband who represents the arrogance and cruelty of established privilege.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Jordan Baker",
      role: "Supporting Character",
      symbolism: "Modern woman/dishonesty",
      description: "A professional golfer and friend of Daisy who briefly becomes romantically involved with Nick.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Myrtle Wilson",
      role: "Supporting Character",
      symbolism: "Lower class aspirations",
      description: "Tom's mistress who desperately wants to climb the social ladder and escape her marriage.",
      image: "/placeholder-character.jpg"
    }
  ],
  
  timeline: [
    {
      title: "Nick Moves to West Egg",
      description: "Nick Carraway rents a small house next to Gatsby's mansion in the summer of 1922.",
      marker: "Beginning"
    },
    {
      title: "Gatsby's Parties",
      description: "Nick attends one of Gatsby's lavish parties and finally meets his mysterious neighbor.",
      marker: "Early"
    },
    {
      title: "Reunion with Daisy",
      description: "Nick arranges a tea at his house where Gatsby and Daisy reunite after five years.",
      marker: "Rising Action"
    },
    {
      title: "The Affair",
      description: "Gatsby and Daisy begin an affair while Tom pursues his own relationship with Myrtle Wilson.",
      marker: "Middle"
    },
    {
      title: "Confrontation at the Plaza",
      description: "Tom confronts Gatsby about the affair with Daisy in a hotel room, revealing Gatsby's criminal connections.",
      marker: "Climax"
    },
    {
      title: "Myrtle's Death",
      description: "Driving Gatsby's car, Daisy accidentally hits and kills Tom's mistress, Myrtle Wilson.",
      marker: "Falling Action"
    },
    {
      title: "Gatsby's Murder",
      description: "Believing Gatsby was driving the car, George Wilson shoots Gatsby and then himself.",
      marker: "Resolution"
    }
  ],
  
  glossaryTerms: [
    {
      term: "Modernism",
      definition: "A literary movement characterized by a break with traditional forms and a strong focus on subjective experience, as exemplified by Fitzgerald's innovative narration and symbolism."
    },
    {
      term: "Jazz Age",
      definition: "The 1920s era characterized by prosperity, new cultural expression, and social change—the vibrant but ultimately hollow setting of the novel."
    },
    {
      term: "Unreliable Narrator",
      definition: "A narrator whose credibility is compromised, as Nick's perspective is colored by his admiration for Gatsby despite acknowledging his flaws."
    },
    {
      term: "Symbolism",
      definition: "The use of symbols to represent ideas, such as the green light representing Gatsby's hopes and dreams."
    },
    {
      term: "Bildungsroman",
      definition: "A novel dealing with a person's formative years, as Nick undergoes a profound transformation in understanding and maturity."
    }
  ],
  
  visualQuotes: [
    {
      quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
      author: "F. Scott Fitzgerald, The Great Gatsby",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "I hope she'll be a fool—that's the best thing a girl can be in this world, a beautiful little fool.",
      author: "F. Scott Fitzgerald, The Great Gatsby",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "Can't repeat the past? Why of course you can!",
      author: "F. Scott Fitzgerald, The Great Gatsby",
      image: "/placeholder-quote.jpg"
    }
  ],
  
  relatedWorks: [
    {
      title: "Tender Is the Night",
      author: "F. Scott Fitzgerald",
      year: "1934",
      description: "Another Fitzgerald novel examining wealth, deterioration and the American expatriate experience in Europe.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "This Side of Paradise",
      author: "F. Scott Fitzgerald",
      year: "1920",
      description: "Fitzgerald's debut novel that established his voice in chronicling the post-WWI generation.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "The Sun Also Rises",
      author: "Ernest Hemingway",
      year: "1926",
      description: "A contemporary of Gatsby that similarly portrays the disillusionment of the 'Lost Generation' after World War I.",
      image: "/placeholder-related.jpg"
    }
  ],
  
  quizQuestions: [
    {
      question: "What does the green light at the end of Daisy's dock symbolize?",
      options: ["Wealth", "Gatsby's dreams and hopes", "Jealousy", "The American Dream"],
      correctAnswer: 1
    },
    {
      question: "Who is the narrator of The Great Gatsby?",
      options: ["Jay Gatsby", "Tom Buchanan", "Nick Carraway", "Daisy Buchanan"],
      correctAnswer: 2
    },
    {
      question: "How did Gatsby acquire his wealth?",
      options: ["Inheritance", "Stock market", "Bootlegging and organized crime", "Real estate"],
      correctAnswer: 2
    },
    {
      question: "What happens to Gatsby at the end of the novel?",
      options: ["He marries Daisy", "He moves to Europe", "He is murdered by George Wilson", "He loses his fortune"],
      correctAnswer: 2
    }
  ],
  
  inTheWorld: [
    {
      type: "news",
      title: "Economic Parallels: Today's Wealth Gap and Fitzgerald's 1920s America",
      platform: "The Atlantic",
      url: "https://example.com/atlantic-gatsby-economy",
      description: "Economists and literary scholars examine how The Great Gatsby's portrayal of wealth inequality remains relevant in today's discussions about the modern American Dream.",
      date: "2023-06-18"
    },
    {
      type: "video",
      title: "Fashion Revolution: How Gatsby Influenced Modern Style",
      platform: "YouTube",
      url: "https://example.com/youtube-gatsby-fashion",
      description: "Fashion historians trace the ongoing influence of 1920s aesthetics portrayed in The Great Gatsby on contemporary runway collections and everyday style.",
      date: "2023-09-05"
    },
    {
      type: "podcast",
      title: "Green Light: Environmental Readings of The Great Gatsby",
      platform: "Spotify",
      url: "https://example.com/spotify-gatsby-environmental",
      description: "A discussion with environmental humanities scholars about how Fitzgerald's descriptions of industrial landscapes predicted modern environmental concerns.",
      date: "2023-04-22"
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

export default greatGatsbyData; 