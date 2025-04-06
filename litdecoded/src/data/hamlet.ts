import { BookData } from './animalFarm';

const hamletData: BookData = {
  title: "Hamlet",
  author: "William Shakespeare",
  year: "1603",
  genre: "Tragedy",
  hook: "A prince's descent into madness while seeking revenge for his father's murder.",
  coverImage: "/placeholder-cover.jpg",
  
  summary: "Hamlet, the Prince of Denmark, is visited by the ghost of his father, who reveals he was murdered by his brother Claudius, now king and married to Hamlet's mother. The ghost demands revenge, setting Hamlet on a path of feigned madness and moral uncertainty. After much contemplation, indirect actions, and tragic deaths, Hamlet finally confronts Claudius in a fatal duel that leaves most main characters dead, including Hamlet himself.",
  
  themes: [
    {
      title: "Revenge",
      description: "The destructive nature of vengeance and its psychological toll",
      quote: "The time is out of joint. O cursèd spite, That ever I was born to set it right!",
      icon: "⚔️"
    },
    {
      title: "Madness vs. Sanity",
      description: "The blurred line between genuine and feigned madness",
      quote: "Though this be madness, yet there is method in't.",
      icon: "🎭"
    },
    {
      title: "Moral Corruption",
      description: "How corruption in the court poisons all aspects of society",
      quote: "Something is rotten in the state of Denmark.",
      icon: "⚱️"
    },
    {
      title: "Mortality",
      description: "Hamlet's contemplation of life, death, and the afterlife",
      quote: "To be, or not to be, that is the question.",
      icon: "💀"
    }
  ],
  
  characters: [
    {
      name: "Hamlet",
      role: "Prince of Denmark",
      symbolism: "Thoughtful inaction",
      description: "A philosophical prince tormented by grief, indecision, and the moral burden of revenge.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Claudius",
      role: "King of Denmark",
      symbolism: "Ambitious corruption",
      description: "Hamlet's uncle who murdered the previous king to claim the throne and the queen.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Gertrude",
      role: "Queen of Denmark",
      symbolism: "Moral flexibility",
      description: "Hamlet's mother who quickly remarried after her husband's death, causing Hamlet great distress.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Ophelia",
      role: "Hamlet's Love Interest",
      symbolism: "Innocence destroyed",
      description: "A young noblewoman whose love for Hamlet ends in madness and tragedy after her father's death.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Polonius",
      role: "Royal Advisor",
      symbolism: "Meddling foolishness",
      description: "Father to Ophelia and Laertes, known for his long-winded advice and spying on Hamlet.",
      image: "/placeholder-character.jpg"
    },
    {
      name: "Horatio",
      role: "Hamlet's Friend",
      symbolism: "Loyal rationality",
      description: "Hamlet's trusted friend who remains level-headed throughout the tragedy.",
      image: "/placeholder-character.jpg"
    }
  ],
  
  timeline: [
    {
      title: "Ghost's Appearance",
      description: "The ghost of Hamlet's father appears, revealing his murder and demanding revenge.",
      marker: "Beginning"
    },
    {
      title: "Hamlet's 'Madness'",
      description: "Hamlet adopts an 'antic disposition' to investigate his father's claims.",
      marker: "Rising Action"
    },
    {
      title: "The Play-within-a-Play",
      description: "Hamlet stages a play to observe Claudius's reaction to a scene mirroring his crime.",
      marker: "Middle"
    },
    {
      title: "Polonius's Death",
      description: "Hamlet mistakenly kills Polonius, thinking he is Claudius hiding behind a curtain.",
      marker: "Turning Point"
    },
    {
      title: "Ophelia's Madness and Death",
      description: "Grief-stricken by her father's death, Ophelia goes mad and drowns.",
      marker: "Escalation"
    },
    {
      title: "The Duel",
      description: "Hamlet duels with Laertes as part of Claudius's plot to kill him.",
      marker: "Climax"
    },
    {
      title: "Final Deaths",
      description: "Hamlet, Laertes, Claudius, and Gertrude all die, leaving Fortinbras to rule Denmark.",
      marker: "Resolution"
    }
  ],
  
  glossaryTerms: [
    {
      term: "Soliloquy",
      definition: "A speech in which a character reveals their thoughts to the audience, exemplified by Hamlet's famous 'To be or not to be' speech."
    },
    {
      term: "Tragic Hero",
      definition: "A protagonist whose fatal flaw leads to their downfall, as seen in Hamlet's inability to act decisively."
    },
    {
      term: "Foil",
      definition: "A character who contrasts with another to highlight particular qualities, as Laertes serves as a foil to Hamlet."
    },
    {
      term: "Dramatic Irony",
      definition: "When the audience knows something the characters do not, such as Hamlet's awareness of Claudius's guilt."
    },
    {
      term: "Elizabethan Revenge Tragedy",
      definition: "A genre popular in Shakespeare's time featuring a protagonist seeking vengeance for a crime."
    }
  ],
  
  visualQuotes: [
    {
      quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing end them.",
      author: "William Shakespeare, Hamlet",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "This above all: to thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.",
      author: "William Shakespeare, Hamlet",
      image: "/placeholder-quote.jpg"
    },
    {
      quote: "There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.",
      author: "William Shakespeare, Hamlet",
      image: "/placeholder-quote.jpg"
    }
  ],
  
  relatedWorks: [
    {
      title: "Macbeth",
      author: "William Shakespeare",
      year: "1606",
      description: "Another Shakespearean tragedy exploring ambition, murder, and psychological torment.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "Rosencrantz and Guildenstern Are Dead",
      author: "Tom Stoppard",
      year: "1966",
      description: "A tragicomedy that reimagines Hamlet from the perspective of two minor characters.",
      image: "/placeholder-related.jpg"
    },
    {
      title: "The Lion King",
      author: "Walt Disney Pictures",
      year: "1994",
      description: "An animated film widely recognized as being influenced by Hamlet's revenge plot.",
      image: "/placeholder-related.jpg"
    }
  ],
  
  quizQuestions: [
    {
      question: "What does Hamlet's famous 'To be or not to be' soliloquy primarily contemplate?",
      options: ["Suicide", "Revenge", "Love", "Kingship"],
      correctAnswer: 0
    },
    {
      question: "How does Ophelia die?",
      options: ["Poisoned", "Stabbed", "Drowning", "Natural causes"],
      correctAnswer: 2
    },
    {
      question: "Who kills Hamlet?",
      options: ["Claudius", "Laertes with a poisoned sword", "Gertrude", "He kills himself"],
      correctAnswer: 1
    },
    {
      question: "What method does Hamlet use to confirm Claudius's guilt?",
      options: ["Torture", "A staged play", "A confession", "A trial"],
      correctAnswer: 1
    }
  ],
  
  inTheWorld: [
    {
      type: "video",
      title: "Shakespeare's Psychology: The Modern Mind of Hamlet",
      platform: "TED Talks",
      url: "https://example.com/ted-hamlet-psychology",
      description: "Neuroscientist explores how Shakespeare's portrayal of Hamlet's psychological struggles aligns with our modern understanding of trauma, grief, and decision paralysis.",
      date: "2023-05-12"
    },
    {
      type: "news",
      title: "Hamlet's 'To Be Or Not To Be' Found in Corporate Leadership Training",
      platform: "Harvard Business Review",
      url: "https://example.com/hbr-hamlet-leadership",
      description: "How Shakespeare's exploration of indecision and action has become a powerful framework for teaching decision-making and ethical leadership in business schools.",
      date: "2023-07-23"
    },
    {
      type: "social",
      title: "Ophelia Renaissance: Women Reclaiming Shakespeare's Tragic Heroine",
      platform: "Instagram",
      url: "https://example.com/instagram-ophelia-renaissance",
      description: "A viral art movement reinterpreting Ophelia as a symbol of mental health awareness and the consequences of patriarchal power structures.",
      date: "2023-11-15"
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

export default hamletData; 