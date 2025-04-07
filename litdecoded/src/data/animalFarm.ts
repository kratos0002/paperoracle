    export interface Theme {
    title: string;
    description: string;
    quote?: string;
    icon: string;
    }

    export interface Character {
    name: string;
    role: string;
    symbolism: string;
    description: string;
    image?: string;
    }

    export interface TimelineEvent {
    title: string;
    description: string;
    marker: string;
    }

    export interface GlossaryTerm {
    term: string;
    definition: string;
    }

    export interface RelatedWork {
    title: string;
    author: string;
    year: string;
    description: string;
    image?: string;
    }

    export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    }

    export interface WorldReference {
    type: "news" | "social" | "podcast" | "video";
    title: string;
    platform: string;
    url: string;
    description: string;
    date: string;
    }

    export interface FaqInsight {
    question: string;
    answer: string;
    }

    export interface ThemeMapItem {
    theme: string;
    items: {
        type: "book" | "movie" | "tv" | "song";
        title: string;
        url: string;
        reason: string;
    }[];
    }

    export interface BookData {
    title: string;
    author: string;
    year: string;
    genre: string;
    hook: string;
    coverImage: string;
    summary: string;
    themes: Theme[];
    characters: Character[];
    timeline: TimelineEvent[];
    glossaryTerms: GlossaryTerm[];
    visualQuotes: {
        quote: string;
        author: string;
        image?: string;
    }[];
    relatedWorks: RelatedWork[];
    quizQuestions: QuizQuestion[];
    inTheWorld?: WorldReference[];
    faqInsights?: FaqInsight[];
    litDNA?: any[];
    modernMirror?: any[];
    altEndings?: any[];
    quoteHighlights?: any[];
    readerRealizations?: any[];
    themeMap?: ThemeMapItem[];
    stillHurts?: string;
    visualMetaphor?: string;
    }

    const animalFarmData: BookData = {
    title: "Animal Farm",
    author: "George Orwell",
    year: "1945",
    genre: "Political Satire, Allegory",
    hook: "A pig-led revolution that mirrors every failed utopia.",
    coverImage: "/placeholder-cover.jpg",
    
    summary: "Animal Farm is a satirical allegory of Soviet totalitarianism. Farm animals overthrow their human farmer, hoping to create a society where all animals are equal and free. However, gradually the pigs, led by Napoleon, become corrupted by power and establish a brutal tyranny. By the story's end, the pigs have become indistinguishable from the humans they once rebelled against, betraying the revolution's original ideals.",
    
    themes: [
        {
        title: "Power & Corruption",
        description: "How power inevitably corrupts, with leaders becoming what they once opposed",
        quote: "All animals are equal, but some animals are more equal than others.",
        icon: "⚖️"
        },
        {
        title: "Propaganda & Manipulation",
        description: "How language can be weaponized to control and manipulate the masses",
        quote: "Four legs good, two legs bad!",
        icon: "📣"
        },
        {
        title: "Revolutionary Idealism",
        description: "The contrast between revolutionary ideals and their practical implementation",
        quote: "Man is the only creature that consumes without producing.",
        icon: "✊"
        },
        {
        title: "Class & Inequality",
        description: "The persistence of social hierarchies even after revolution",
        quote: "All animals are equal.",
        icon: "🏛️"
        }
    ],
    
    characters: [
        {
        name: "Napoleon",
        role: "Pig Leader",
        symbolism: "Joseph Stalin",
        description: "A power-hungry pig who uses force and manipulation to take control of Animal Farm.",
        image: "/placeholder-napoleon.jpg"
        },
        {
        name: "Snowball",
        role: "Rival Leader",
        symbolism: "Leon Trotsky",
        description: "An intelligent pig who genuinely believes in Animalism until exiled by Napoleon.",
        image: "/placeholder-snowball.jpg"
        },
        {
        name: "Boxer",
        role: "Workhorse",
        symbolism: "Loyal Working Class",
        description: "A hardworking, loyal horse who believes everything will improve with harder work.",
        image: "/placeholder-boxer.jpg"
        },
        {
        name: "Squealer",
        role: "Propagandist",
        symbolism: "State Propaganda",
        description: "A persuasive pig who justifies the leaders' actions through manipulation of language.",
        image: "/placeholder-squealer.jpg"
        },
        {
        name: "Old Major",
        role: "Visionary",
        symbolism: "Marx/Lenin",
        description: "An old prize boar who inspires the revolution with his dream of freedom.",
        image: "/placeholder-oldmajor.jpg"
        },
        {
        name: "Benjamin",
        role: "Skeptic",
        symbolism: "Cynical Intellectuals",
        description: "A donkey who recognizes the corruption but does nothing to stop it.",
        image: "/placeholder-benjamin.jpg"
        }
    ],
    
    timeline: [
        {
        title: "Old Major's Speech",
        description: "The old boar shares his revolutionary vision before dying.",
        marker: "Before Revolution"
        },
        {
        title: "The Rebellion",
        description: "Animals drive out Mr. Jones and take control of the farm.",
        marker: "Revolution"
        },
        {
        title: "Seven Commandments",
        description: "Principles of Animalism written to ensure equality.",
        marker: "Post-Revolution"
        },
        {
        title: "Battle of the Cowshed",
        description: "Animals successfully defend the farm against human attackers.",
        marker: "Year 1"
        },
        {
        title: "Snowball's Expulsion",
        description: "Napoleon uses dogs to chase Snowball from the farm and seize power.",
        marker: "Year 2"
        },
        {
        title: "Windmill Destruction",
        description: "The windmill is destroyed and blamed on Snowball's sabotage.",
        marker: "Year 3"
        },
        {
        title: "Pigs Walk Upright",
        description: "Pigs begin walking on two legs and carrying whips.",
        marker: "Final Stage"
        }
    ],
    
    glossaryTerms: [
        {
        term: "Allegory",
        definition: "A story with symbolic meaning; Animal Farm represents Soviet history."
        },
        {
        term: "Satire",
        definition: "Using humor, irony, or exaggeration to criticize and expose human vices or folly."
        },
        {
        term: "Dystopia",
        definition: "A society characterized by oppression, suffering, and injustice."
        },
        {
        term: "Propaganda",
        definition: "Information, often misleading, used to promote a political cause or viewpoint."
        },
        {
        term: "Totalitarianism",
        definition: "A system of government requiring complete subservience to the state."
        }
    ],
    
    visualQuotes: [
        {
        quote: "All animals are equal, but some animals are more equal than others.",
        author: "George Orwell, Animal Farm",
        image: "/placeholder-quote1.jpg"
        },
        {
        quote: "Four legs good, two legs better!",
        author: "George Orwell, Animal Farm",
        image: "/placeholder-quote2.jpg"
        },
        {
        quote: "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
        author: "George Orwell, Animal Farm",
        image: "/placeholder-quote3.jpg"
        }
    ],
    
    relatedWorks: [
        {
        title: "1984",
        author: "George Orwell",
        year: "1949",
        description: "Orwell's dystopian masterpiece about totalitarian surveillance.",
        image: "/placeholder-1984.jpg"
        },
        {
        title: "Lord of the Flies",
        author: "William Golding",
        year: "1954",
        description: "An allegory about the inherent evil in human nature.",
        image: "/placeholder-lotf.jpg"
        },
        {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: "1932",
        description: "A dystopia where people are engineered to love their servitude.",
        image: "/placeholder-bnw.jpg"
        },
        {
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        year: "1985",
        description: "A dystopian world where women are subjugated in a theocratic society.",
        image: "/placeholder-handmaid.jpg"
        }
    ],
    
    quizQuestions: [
        {
        question: "Which animal represents Leon Trotsky in the allegory?",
        options: ["Boxer", "Snowball", "Napoleon", "Squealer"],
        correctAnswer: 1
        },
        {
        question: "What is the original name of Animal Farm before the revolution?",
        options: ["Jones Farm", "Manor Farm", "Freedom Farm", "England Farm"],
        correctAnswer: 1
        },
        {
        question: "Which commandment is ultimately changed to 'All animals are equal, but some are more equal than others'?",
        options: ["No animal shall sleep in a bed", "No animal shall kill another animal", "All animals are equal", "No animal shall drink alcohol"],
        correctAnswer: 2
        }
    ],

    inTheWorld: [
        {
        type: "news",
        title: "Animal Farm Parallels in Modern Politics",
        platform: "The New Yorker",
        url: "https://example.com/animal-farm-politics",
        description: "How Orwell's allegory continues to provide a framework for understanding political manipulation and power consolidation in today's democracies.",
        date: "2023-09-15"
        },
        {
        type: "podcast",
        title: "The Enduring Legacy of Animal Farm",
        platform: "Literary Discourse",
        url: "https://example.com/literary-discourse-animal-farm",
        description: "Scholars discuss how Animal Farm remains relevant in understanding power dynamics in corporate structures and social media platforms.",
        date: "2023-11-22"
        },
        {
        type: "video",
        title: "Animal Farm and Modern Propaganda",
        platform: "YouTube",
        url: "https://example.com/animal-farm-propaganda-video",
        description: "Visual essay exploring parallels between Squealer's manipulation techniques and modern media strategies in political campaigns.",
        date: "2023-07-04"
        }
    ],
    
    faqInsights: [
        {
        question: "Is Snowball a hero or just a better manipulator?",
        answer: "Orwell never lets us fully trust Snowball. His intelligence is clear — but so is his lust for power. He's a foil for Napoleon, but not an innocent. Snowball genuinely believes in the revolution's ideals, yet his methods of persuasion and willingness to consolidate power suggest he might have eventually followed Napoleon's path had he remained on the farm."
        },
        {
        question: "Why do the animals fail to recognize their worsening conditions?",
        answer: "The animals' inability to recognize their deteriorating situation stems from a combination of factors: Squealer's masterful propaganda gradually rewrites history, their limited literacy prevents them from verifying the commandments, and the slow, incremental nature of the changes makes each new restriction seem reasonable. Most importantly, the psychological burden of admitting they've been deceived would force them to confront that their suffering and sacrifices were ultimately meaningless."
        },
        {
        question: "What does Benjamin the donkey symbolize in the story?",
        answer: "Benjamin represents the cynical intellectuals who recognize the corruption but remain passive. His famous line, 'Life will go on as it has always gone on—that is, badly,' reveals his deep pessimism about social change. Unlike the other animals, Benjamin can read well and understands what's happening, yet he chooses inaction, representing those who see through political manipulation but feel powerless or unwilling to challenge it. His grief only surfaces when his friend Boxer is betrayed."
        },
        {
        question: "Is Animal Farm a critique of all revolutions or specifically the Russian Revolution?",
        answer: "While Animal Farm is a specific allegory for the Russian Revolution and Stalinist era, Orwell's message extends beyond this historical moment. The narrative explores how revolutionary ideals of equality and justice can be corrupted by those who gain power, revealing a pattern that has occurred in revolutions throughout history. Orwell wasn't suggesting that revolution itself is futile, but rather warning how easily revolutionary idealism can transform into the very systems of oppression they sought to overthrow."
        },
        {
        question: "What is the significance of the final scene where the animals cannot distinguish between pigs and humans?",
        answer: "The final scene represents the ultimate betrayal of the revolution. When the animals observe the meeting between the pigs and humans, noting that they cannot tell which is which, Orwell is illustrating how those who seize power eventually come to resemble those they replaced. This powerful image suggests that systems of oppression may change faces but often maintain similar power structures. The circular nature of this ending implies a pessimistic view that revolutions may change the players but not necessarily the game itself."
        }
    ],
    
    // New fields for future enrichment
    litDNA: [],
    modernMirror: [],
    altEndings: [],
    quoteHighlights: [],
    readerRealizations: [],
    stillHurts: "",
    visualMetaphor: "",
    themeMap: []
    };

    export default animalFarmData; 