import { BookData } from './animalFarm';

const nineteenEightyFourData: BookData = {
  title: "1984",
  author: "George Orwell",
  year: "1949",
  genre: "Dystopian Fiction",
  hook: "Big Brother is watching you in this haunting vision of a totalitarian future.",
  coverImage: "/placeholder-1984.jpg",
  
  summary: "1984 is a dystopian novel that depicts a totalitarian society ruled by the Party and its leader, Big Brother. The story follows Winston Smith, a government employee whose job is to rewrite historical documents to match the Party's ever-changing version of history. Winston secretly hates the Party and dreams of rebellion. He begins a forbidden relationship with Julia, a fellow worker, and they seek out the Brotherhood, a supposed resistance group. However, they are betrayed, captured, and subjected to torture and brainwashing until they betray each other and embrace Big Brother.",
  
  themes: [
    {
      title: "Totalitarianism",
      description: "The novel explores how a totalitarian regime maintains power through surveillance, propaganda, and control of information",
      quote: "War is peace. Freedom is slavery. Ignorance is strength.",
      icon: "👁️"
    },
    {
      title: "Psychological Manipulation",
      description: "How the Party controls not just actions but thoughts through doublethink and thought crime",
      quote: "The Party told you to reject the evidence of your eyes and ears. It was their final, most essential command.",
      icon: "🧠"
    },
    {
      title: "Loss of Individuality",
      description: "The erasure of personal identity in service to the collective state",
      quote: "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.",
      icon: "🔗"
    },
    {
      title: "Technological Control",
      description: "How technology is weaponized for surveillance and propaganda",
      quote: "Big Brother is watching you.",
      icon: "📺"
    }
  ],
  
  characters: [
    {
      name: "Winston Smith",
      role: "Protagonist",
      symbolism: "The Individual vs. The State",
      description: "A middle-aged man who works at the Ministry of Truth, rewriting history for the Party, but secretly hates Big Brother and dreams of rebellion.",
      image: "/placeholder-winston.jpg"
    },
    {
      name: "Julia",
      role: "Love Interest",
      symbolism: "Natural Human Desires",
      description: "A young woman who works in the Fiction Department and engages in a forbidden relationship with Winston as an act of rebellion against the Party.",
      image: "/placeholder-julia.jpg"
    },
    {
      name: "O'Brien",
      role: "Inner Party Member",
      symbolism: "The Face of Authority",
      description: "An influential Inner Party member who Winston believes is part of the resistance, but is actually an agent of the Thought Police.",
      image: "/placeholder-obrien.jpg"
    },
    {
      name: "Big Brother",
      role: "Supreme Leader",
      symbolism: "Totalitarian Authority",
      description: "The figurehead of the Party who may or may not actually exist, but whose face appears on posters everywhere with the caption 'Big Brother Is Watching You'.",
      image: "/placeholder-bigbrother.jpg"
    },
    {
      name: "Emmanuel Goldstein",
      role: "Enemy of the Party",
      symbolism: "Opposition and Scapegoating",
      description: "The principal enemy of the state according to the Party, possibly a fabrication used to identify and eliminate dissenters.",
      image: "/placeholder-goldstein.jpg"
    }
  ],
  
  timeline: [
    {
      title: "Winston Begins His Diary",
      description: "Winston Smith commits his first act of rebellion by starting a diary, a thoughtcrime punishable by death.",
      marker: "Beginning"
    },
    {
      title: "Meeting Julia",
      description: "Winston meets Julia, and they begin a secret love affair, another act of rebellion against the Party.",
      marker: "Love Affair"
    },
    {
      title: "O'Brien Contact",
      description: "Winston and Julia meet with O'Brien, whom they believe is part of the resistance.",
      marker: "False Hope"
    },
    {
      title: "Reading Goldstein's Book",
      description: "Winston reads 'The Theory and Practice of Oligarchical Collectivism' by Goldstein, explaining how society works.",
      marker: "Revelation"
    },
    {
      title: "Capture",
      description: "Winston and Julia are captured by the Thought Police in their secret hideaway.",
      marker: "Betrayal"
    },
    {
      title: "Room 101",
      description: "Winston is taken to Room 101 for the final stage of his re-education, facing his worst fear.",
      marker: "Breaking Point"
    },
    {
      title: "Acceptance of Big Brother",
      description: "Winston is broken and genuinely comes to love Big Brother, completing his reintegration into society.",
      marker: "Defeat"
    }
  ],
  
  glossaryTerms: [
    {
      term: "Doublethink",
      definition: "The ability to hold two contradictory beliefs simultaneously and accept both of them as true."
    },
    {
      term: "Thoughtcrime",
      definition: "An illegal thought that questions or criticizes the ruling Party."
    },
    {
      term: "Newspeak",
      definition: "A controlled language created by the Party to limit freedom of thought."
    },
    {
      term: "Telescreen",
      definition: "Two-way television screens used for propaganda and surveillance."
    },
    {
      term: "Ministry of Truth",
      definition: "Government department responsible for falsifying historical events to support Party narrative."
    },
    {
      term: "Thought Police",
      definition: "Law enforcement that discovers and punishes thoughtcrime and thought-criminals."
    }
  ],
  
  visualQuotes: [
    {
      quote: "Big Brother is watching you.",
      author: "George Orwell, 1984",
      image: "/placeholder-quote1984-1.jpg"
    },
    {
      quote: "War is peace. Freedom is slavery. Ignorance is strength.",
      author: "George Orwell, 1984",
      image: "/placeholder-quote1984-2.jpg"
    },
    {
      quote: "If you want a picture of the future, imagine a boot stamping on a human face—forever.",
      author: "George Orwell, 1984",
      image: "/placeholder-quote1984-3.jpg"
    }
  ],
  
  relatedWorks: [
    {
      title: "Animal Farm",
      author: "George Orwell",
      year: "1945",
      description: "Orwell's allegorical novella about the Soviet Revolution and its aftermath.",
      image: "/placeholder-cover.jpg"
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      year: "1932",
      description: "A dystopia where people are placated with pleasure rather than controlled by fear.",
      image: "/placeholder-bnw.jpg"
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      year: "1953",
      description: "A society where books are outlawed and 'firemen' burn any that are found.",
      image: "/placeholder-fahrenheit.jpg"
    },
    {
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      year: "1985",
      description: "A dystopian future where fertile women are forced into reproductive servitude.",
      image: "/placeholder-handmaid.jpg"
    }
  ],
  
  quizQuestions: [
    {
      question: "What is Winston Smith's job at the Ministry of Truth?",
      options: ["Spy for the Thought Police", "Rewriting historical records", "Designing propaganda posters", "Interrogating thought criminals"],
      correctAnswer: 1
    },
    {
      question: "What is Room 101?",
      options: ["The room where Winston and Julia meet secretly", "The place containing the worst thing in the world for each individual", "O'Brien's office", "The cafeteria at the Ministry of Truth"],
      correctAnswer: 1
    },
    {
      question: "What does the slogan 'Freedom is Slavery' mean in Newspeak?",
      options: ["Freedom from the Party is impossible", "Those who are free are actually enslaved to their desires", "Freedom only exists in slavery", "The Party provides freedom through controlled slavery"],
      correctAnswer: 1
    }
  ],
  
  inTheWorld: [
    {
      type: "news",
      title: "Surveillance State: How 1984 Predicted Our Digital Privacy Crisis",
      platform: "The Guardian",
      url: "https://example.com/surveillance-state-1984",
      description: "An examination of how government surveillance programs and big tech data collection have created a reality eerily similar to Orwell's predictions.",
      date: "2023-10-24"
    },
    {
      type: "podcast",
      title: "1984 & AI: Navigating Machine Learning Ethics",
      platform: "Tech Ethics Now",
      url: "https://example.com/1984-ai-ethics-podcast",
      description: "Tech ethicists discuss the parallels between AI-powered facial recognition, predictive algorithms, and Orwell's prophetic telescreen technology.",
      date: "2023-08-17"
    },
    {
      type: "social",
      title: "Orwell's 1984 Sales Spike After Privacy Law Rollbacks",
      platform: "Twitter",
      url: "https://example.com/twitter-1984-sales",
      description: "Viral thread documenting the correlation between political events and surges in sales of dystopian literature, particularly 1984.",
      date: "2023-12-01"
    }
  ],
  
  faqInsights: [
    {
      question: "Is Winston's rebellion against the Party a genuine act of freedom?",
      answer: "Winston's rebellion is more complex than a simple act of freedom. While he believes he's making autonomous choices, the Party anticipates and manipulates even acts of rebellion. His affair with Julia and connection to the Brotherhood are ultimately traps. Orwell suggests true freedom is nearly impossible in a system designed to anticipate and control all forms of resistance—a system that understands its subjects better than they understand themselves."
    },
    {
      question: "Why does Winston love Big Brother at the end?",
      answer: "Winston's final love for Big Brother isn't merely brainwashing but a complete psychological reconstruction. Through Room 101, O'Brien doesn't just force compliance but rewires Winston's emotional responses at their foundation. His love for Big Brother represents the Party's ultimate victory: control not just over actions or thoughts, but over the essence of human emotion. The tragedy is that Winston genuinely feels this love—it's not a conscious surrender but a complete rewriting of his inner self."
    },
    {
      question: "What is the significance of Winston's obsession with the past?",
      answer: "Winston's fixation on the past represents humanity's need for historical continuity and truth. By altering records at the Ministry of Truth, the Party severs connection to objective reality, creating psychological dependence on Party narratives. Winston's paperweight and his memories of his mother symbolize his desperate grasp for something authentic and unchangeable. Orwell suggests that without a reliable past, individuals cannot form independent identities or measure the truth of their present circumstances."
    },
    {
      question: "How does Orwell's concept of doublethink relate to modern society?",
      answer: "Doublethink—simultaneously holding contradictory beliefs—extends beyond totalitarianism into modern psychology and politics. We see it today when people compartmentalize incompatible information, supporting policies that contradict their stated values, or participating in systems they claim to oppose. Orwell didn't just describe a fictional tool of control but identified a fundamental human cognitive vulnerability that allows us to avoid the psychological discomfort of confronting contradictions in our beliefs and actions."
    },
    {
      question: "Is Julia a genuine revolutionary or simply a hedonist?",
      answer: "Julia embodies a different form of rebellion than Winston's intellectual resistance. Her hedonism is political precisely because it rejects the Party's attempt to control human desire and redirect passion toward political fanaticism. While not a philosophical revolutionary, her instinctive rejection of Party control over the body represents a more primal resistance. Her statement that 'they can make you say anything, but they can't make you believe it' reveals her understanding that inner experience remains private—an illusion the Party ultimately shatters for both characters."
    }
  ],
  
  // New fields for future enrichment
  litDNA: [
    {
      source: "The Spanish Civil War",
      influence: "25%",
      notes: "Orwell's experience fighting fascism in Spain deeply shaped his understanding of how propaganda and betrayal fracture revolutions. This firsthand disillusionment laid the emotional groundwork for Winston's failed rebellion."
    },
    {
      source: "Soviet Totalitarianism",
      influence: "30%",
      notes: "The regime under Stalin — with its purges, forced confessions, and rewriting of history — directly inspired Big Brother, the Ministry of Truth, and the concept of doublethink."
    },
    {
      source: "British Imperialism",
      influence: "10%",
      notes: "Orwell's time as a colonial officer in Burma influenced his critique of power structures and surveillance — even in so-called 'civilized' democracies."
    },
    {
      source: "Yevgeny Zamyatin's *We*",
      influence: "15%",
      notes: "This earlier dystopian novel inspired Orwell's concept of a fully controlled state where individuality is criminalized — a clear literary ancestor to *1984*."
    },
    {
      source: "World War II Propaganda",
      influence: "10%",
      notes: "The weaponization of language and truth during wartime — through posters, slogans, and censorship — helped Orwell understand how reality itself could be engineered."
    },
    {
      source: "Orwell's Journalism & Essays",
      influence: "10%",
      notes: "Works like 'Politics and the English Language' and 'The Prevention of Literature' refined Orwell's obsession with how language can be used to deceive, manipulate, and erase."
    }
  ],
  modernMirror: [
    {
      theme: "Surveillance & Privacy",
      modernExample: "AI-powered facial recognition in public spaces and smart devices that listen constantly in our homes",
      insight: "The telescreens of today fit in our pockets, are invited into our bedrooms, and we pay for the privilege. While Orwell imagined surveillance as imposed, we have chosen a world where being watched is both ubiquitous and unremarkable—the horror lies not in its presence but in our comfort with it."
    },
    {
      theme: "Newspeak & Language Control",
      modernExample: "Content moderation algorithms and automated 'harmful language' detection tools across social media platforms",
      insight: "Today's barriers to expression don't shrink dictionaries but invisibly shape what can be amplified. The Ministry of Truth didn't anticipate that censorship would become automated, with AI judging permissible thought—a system where words vanish not by prohibition but by algorithmic burial."
    },
    {
      theme: "Memory Holes & Historical Revisionism",
      modernExample: "Digital content that can be silently updated, removed, or memory-holed without physical evidence of the change",
      insight: "Winston's job at the Ministry of Truth required human hands to destroy paper records. Now, our collective memory resides in servers controlled by a few corporations and governments, where history can be edited with a keystroke, leaving no paper trail, no ashes, nothing but doubt in the minds of those who remember differently."
    },
    {
      theme: "Perpetual Warfare",
      modernExample: "Information warfare, cyberattacks, and the deliberate creation of online division as tools of geopolitical control",
      insight: "Oceania's perpetual enemies were distant nations; today's enemies are created within our own borders through weaponized algorithms. The war isn't for territory but for attention and belief, with each person's mind becoming a contested front line that never knows peace."
    },
    {
      theme: "Doublethink",
      modernExample: "The rise of 'alternative facts,' where incompatible versions of reality are simultaneously held by different groups consuming different media",
      insight: "Orwell understood doublethink as a psychological burden forced upon individuals. In our fractured information landscape, we've evolved to something more insidious: communities that each embrace their own reality, allowing people to exist in parallel universes without the cognitive strain of holding contradictions—the ultimate triumph of doublethink."
    },
    {
      theme: "The Resistance of the Proles",
      modernExample: "Digital privacy tools, encryption, and whistleblowing in the age of technological control",
      insight: "Winston placed hope in the proles—the masses untouched by Party ideology. Perhaps today's digital resisters—encryption developers, privacy advocates, small communities building local networks—are our proles, seemingly insignificant against massive systems but carrying within them seeds of human connection the algorithms cannot quantify or control."
    }
  ],
  altEndings: [
    {
      whatIf: "Winston fakes his loyalty and begins building a secret resistance from within the Ministry of Truth.",
      summary: "Instead of complete submission, the ending becomes a quiet beginning — a seed of hope hidden inside the machine."
    },
    {
      whatIf: "Julia betrays Winston first, and he never finds out.",
      summary: "The novel ends not in political horror, but in emotional disillusionment — the state wins not through fear, but through loneliness."
    },
    {
      whatIf: "Big Brother is revealed to be a fiction — a symbol used by competing factions within the Party.",
      summary: "This ending turns *1984* into a recursive lie: the tyrant never existed, but the fear still controls everyone."
    },
    {
      whatIf: "Winston escapes — not physically, but mentally — by going mad and believing his own version of reality.",
      summary: "It's freedom, but only in hallucination — truth becomes whatever you need to survive."
    }
  ],
  quoteHighlights: [
    {
      quote: "War is peace. Freedom is slavery. Ignorance is strength.",
      annotation: "This isn't contradiction — it's conditioning. The slogan doesn't mask the truth, it replaces it."
    },
    {
      quote: "Big Brother is watching you.",
      annotation: "The terror isn't that you're being watched — it's that you start to watch yourself."
    },
    {
      quote: "If you want a picture of the future, imagine a boot stamping on a human face—forever.",
      annotation: "Not a prophecy. A warning that apathy makes this image possible, even familiar."
    },
    {
      quote: "The best books... are those that tell you what you know already.",
      annotation: "1984 doesn't teach you — it names your discomfort, and dares you to stop ignoring it."
    },
    {
      quote: "Reality exists in the human mind, and nowhere else.",
      annotation: "Orwell understood: if you can rewrite memory, you can erase resistance."
    },
    {
      quote: "Perhaps one did not want to be loved so much as to be understood.",
      annotation: "In the cold mechanics of power, connection is the first casualty."
    }
  ],
  readerRealizations: [],
  stillHurts: "",
  visualMetaphor: ""
};

export default nineteenEightyFourData; 