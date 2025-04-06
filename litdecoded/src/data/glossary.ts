export interface GlossaryItem {
  term: string;
  definition: string;
  simplifiedExplanation?: string;
}

const glossaryData: Record<string, GlossaryItem> = {
  "Allegory": {
    term: "Allegory",
    definition: "A story, poem, or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one.",
    simplifiedExplanation: "It's like telling a story about animals or made-up characters, but they actually represent real people or ideas. Animal Farm uses animals to talk about real historical events."
  },
  "Satire": {
    term: "Satire",
    definition: "The use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity or vices, particularly in the context of contemporary politics and other topical issues.",
    simplifiedExplanation: "When you make fun of something serious to show what's wrong with it. Like drawing a cartoon of a politician with a super long nose when they lie a lot."
  },
  "Dystopia": {
    term: "Dystopia",
    definition: "An imagined state or society in which there is great suffering or injustice, typically one that is totalitarian or post-apocalyptic.",
    simplifiedExplanation: "A made-up world where things have gone really wrong and life is terrible for most people. Think of movies like The Hunger Games."
  },
  "Propaganda": {
    term: "Propaganda",
    definition: "Information, especially of a biased or misleading nature, used to promote or publicize a particular political cause or point of view.",
    simplifiedExplanation: "When someone tells you only certain information to make you believe what they want you to believe. Like Squealer in Animal Farm always changing the rules."
  },
  "Totalitarianism": {
    term: "Totalitarianism",
    definition: "A system of government that is centralized and dictatorial and requires complete subservience to the state.",
    simplifiedExplanation: "When the government controls absolutely everything and you're not allowed to disagree with them. Like how Napoleon runs Animal Farm after a while."
  },
  "Symbolism": {
    term: "Symbolism",
    definition: "The use of symbols to represent ideas or qualities.",
    simplifiedExplanation: "When one thing stands for something else. Like how the windmill in Animal Farm represents industrial progress."
  },
  "Irony": {
    term: "Irony",
    definition: "The expression of one's meaning by using language that normally signifies the opposite, typically for humorous or emphatic effect.",
    simplifiedExplanation: "When what happens is the opposite of what you'd expect. Like when the animals fight for freedom but end up even less free than before."
  },
  "Fable": {
    term: "Fable",
    definition: "A short story, typically with animals as characters, conveying a moral.",
    simplifiedExplanation: "A story with talking animals that teaches you a lesson, like Aesop's fables. Animal Farm is a political fable for adults."
  },
  "Rhetoric": {
    term: "Rhetoric",
    definition: "The art of effective or persuasive speaking or writing, especially the use of figures of speech and other compositional techniques.",
    simplifiedExplanation: "Special ways of talking that make people want to agree with you. Squealer uses a lot of rhetoric to convince the animals."
  },
  "Doublethink": {
    term: "Doublethink",
    definition: "The acceptance of or mental capacity to accept contrary opinions or beliefs at the same time, especially as a result of political indoctrination.",
    simplifiedExplanation: "Being able to believe two opposite things at the same time. Like when the animals believe 'All animals are equal' but also that pigs deserve special treatment."
  },
  "Thoughtcrime": {
    term: "Thoughtcrime",
    definition: "An instance of unorthodox or controversial thinking, considered as a criminal offense or as socially unacceptable.",
    simplifiedExplanation: "When just thinking something against the rules is considered wrong or illegal. From Orwell's 1984."
  },
  "Newspeak": {
    term: "Newspeak",
    definition: "A controlled language created by the totalitarian state as a tool to limit freedom of thought, and concepts that pose a threat to the regime.",
    simplifiedExplanation: "A made-up simplified language designed to limit what people can think about. From Orwell's 1984."
  }
};

export default glossaryData; 