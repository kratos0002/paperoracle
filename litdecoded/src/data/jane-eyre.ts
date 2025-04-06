import { BookData } from './animalFarm';

const janeEyreData: BookData = {
  title: "Jane Eyre",
  author: "Charlotte Brontë",
  year: "1847",
  genre: "Bildungsroman",
  hook: "The journey of a fiercely independent orphan who refuses to compromise her principles for love or security.",
  coverImage: "/placeholder-cover.jpg",
  
  summary: "Jane Eyre follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester. After a difficult childhood as an orphan living with her cruel aunt and at a harsh charity school, Jane becomes governess at Thornfield Hall, where she falls in love with her enigmatic employer, Edward Rochester. When she discovers his existing marriage to the insane Bertha Mason, Jane flees, finding shelter and family with the Rivers family. After refusing a loveless marriage proposal from her cousin St. John Rivers, Jane returns to Rochester, now blind and maimed from a fire set by his wife, who has since died. With social and financial independence secured by an inheritance, Jane accepts Rochester's marriage proposal, entering a union of equals.",
  
  themes: [
    {
      title: "Independence & Self-Respect",
      description: "Jane's unwavering commitment to personal dignity despite social constraints",
      quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
      icon: "🕊️"
    },
    {
      title: "Social Class",
      description: "The rigid Victorian class system and Jane's navigation between worlds",
      quote: "I would always rather be happy than dignified.",
      icon: "⚖️"
    },
    {
      title: "Gender Inequality",
      description: "The limitations placed on women and Jane's rejection of these confines",
      quote: "Women are supposed to be very calm generally: but women feel just as men feel.",
      icon: "♀️"
    },
    {
      title: "Religion & Morality",
      description: "The contrast between rigid religious doctrine and personal spirituality",
      quote: "Laws and principles are not for the times when there is no temptation.",
      icon: "✝️"
    }
  ],
  
  characters: [
    {
      name: "Jane Eyre",
      role: "Protagonist",
      symbolism: "Moral integrity and independence",
      description: "An orphaned girl who grows into a strong, principled woman despite social disadvantages.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Edward Rochester",
      role: "Love Interest",
      symbolism: "Byronic hero with a hidden past",
      description: "The brooding master of Thornfield Hall who is drawn to Jane's plainness and moral strength.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Bertha Mason",
      role: "Antagonist",
      symbolism: "The 'madwoman in the attic'/colonial other",
      description: "Rochester's first wife from Jamaica who is kept locked in the attic due to her alleged insanity.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "St. John Rivers",
      role: "Supporting Character",
      symbolism: "Religious duty over personal happiness",
      description: "A clergyman who offers Jane a marriage of purpose rather than passion, representing duty over emotion.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Mrs. Reed",
      role: "Early Antagonist",
      symbolism: "Social cruelty",
      description: "Jane's aunt who mistreats her as a child and represents the injustices Jane faces throughout life.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Helen Burns",
      role: "Childhood Friend",
      symbolism: "Christian forbearance",
      description: "Jane's friend at Lowood School who models Christian acceptance of suffering and forgiveness.",
      image: "/placeholder-character.jpg"
    }
  ],
  
  timeline: [
    {
      title: "Childhood at Gateshead",
      description: "Orphaned Jane endures mistreatment from her aunt, Mrs. Reed, and cousins.",
      marker: "Beginning"
    },
    {
      title: "Lowood Institution",
      description: "Jane spends eight years at a charity school, first as student, then as teacher.",
      marker: "Early Years"
    },
    {
      title: "Arrival at Thornfield",
      description: "Jane becomes governess at Thornfield Hall and meets the enigmatic Mr. Rochester.",
      marker: "Rising Action"
    },
    {
      title: "Developing Relationship",
      description: "Jane and Rochester grow closer despite his erratic behavior and the mysterious events in the house.",
      marker: "Development"
    },
    {
      title: "First Marriage Attempt",
      description: "The wedding is halted when Rochester's existing marriage to Bertha Mason is revealed.",
      marker: "Climax"
    },
    {
      title: "Flight from Thornfield",
      description: "Jane flees, nearly dies, and is taken in by the Rivers family, discovering they are her cousins.",
      marker: "Turning Point"
    },
    {
      title: "Inheritance & Proposal",
      description: "Jane inherits a fortune and refuses St. John Rivers' proposal of a missionary marriage.",
      marker: "Development"
    },
    {
      title: "Return to Rochester",
      description: "Jane returns to find Thornfield burned, Bertha dead, and Rochester maimed but free to marry.",
      marker: "Resolution"
    }
  ],
  
  glossaryTerms: [
    {
      term: "Bildungsroman",
      definition: "A novel focusing on the psychological and moral growth of the protagonist from youth to adulthood, which Jane Eyre exemplifies."
    },
    {
      term: "Gothic Fiction",
      definition: "A genre featuring mysterious settings, supernatural elements, and emotional intensity, seen in Thornfield Hall's secrets and atmosphere."
    },
    {
      term: "Byronic Hero",
      definition: "A charismatic, passionate, but flawed male character exemplified by Rochester with his dark past and intensity."
    },
    {
      term: "Victorian Novel",
      definition: "Literature produced during the reign of Queen Victoria (1837-1901), marked by realism and social commentary on class and gender issues."
    },
    {
      term: "First-Person Narrative",
      definition: "A perspective where the protagonist tells their own story, creating intimacy as readers directly access Jane's thoughts and feelings."
    }
  ],
  
  visualQuotes: [
    {
      quote: "Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong! — I have as much soul as you — and full as much heart!",
      author: "Charlotte Brontë, Jane Eyre",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.",
      author: "Charlotte Brontë, Jane Eyre",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "Reader, I married him.",
      author: "Charlotte Brontë, Jane Eyre",
      image: "/placeholder-quote.jpg"
    }
  ],
  
  relatedWorks: [
    {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      year: "1847",
      description: "Charlotte's sister's novel, similarly exploring passionate relationships and the Gothic tradition.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "Villette",
      author: "Charlotte Brontë",
      year: "1853",
      description: "Brontë's later novel drawing on her experiences as a teacher in Brussels.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "Wide Sargasso Sea",
      author: "Jean Rhys",
      year: "1966",
      description: "A postcolonial prequel to Jane Eyre that tells Bertha Mason's story from her perspective.",
      image: "/placeholder-related.jpg"
    }
  ],
  
  quizQuestions: [
    {
      question: "What job does Jane take at Thornfield Hall?",
      options: ["Housekeeper", "Nurse", "Governess", "Maid"],
      correctAnswer: 2
    },
    {
      question: "What prevents Jane's first marriage to Rochester?",
      options: ["She changes her mind", "The discovery of his existing wife", "St. John Rivers' intervention", "Her lack of social status"],
      correctAnswer: 1
    },
    {
      question: "How does Rochester become blind and maimed?",
      options: ["A hunting accident", "A fire set by Bertha", "A carriage accident", "A duel with a rival"],
      correctAnswer: 1
    },
    {
      question: "How does Jane eventually gain financial independence?",
      options: ["Marriage to Rochester", "An inheritance from her uncle", "Her salary as a teacher", "Investments in property"],
      correctAnswer: 1
    }
  ],
  
  inTheWorld: [
    {
      type: "social",
      title: "Bertha Mason: TikTok Creators Reimagine Jane Eyre's 'Madwoman'",
      platform: "TikTok",
      url: "https://example.com/tiktok-bertha-mason-challenge",
      description: "Young creators are bringing renewed focus to the 'madwoman in the attic' through viral videos exploring Bertha's perspective and colonial themes through contemporary lens.",
      date: "2023-11-05"
    },
    {
      type: "news",
      title: "From Jane Eyre to CEO: Victorian Literature Shapes Modern Leadership Training",
      platform: "Bloomberg",
      url: "https://example.com/bloomberg-victorian-leadership",
      description: "Business schools are using Jane's moral integrity and independence as case studies for ethical leadership and navigating power dynamics in corporate environments.",
      date: "2023-09-28"
    },
    {
      type: "podcast",
      title: "Beyond the Marriage Plot: Jane Eyre and Modern Feminism",
      platform: "NPR",
      url: "https://example.com/npr-jane-eyre-feminism",
      description: "Modern feminist scholars and activists discuss how Jane Eyre's quest for equality and autonomy continues to resonate in contemporary gender equality movements.",
      date: "2023-03-08"
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

export default janeEyreData; 