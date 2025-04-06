export interface Book {
  slug: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  status: 'pending' | 'enriched';
}

const bookList: Book[] = [
  {
    slug: "animal-farm",
    title: "Animal Farm",
    author: "George Orwell",
    year: 1945,
    genre: "Political Satire",
    status: "enriched"
  },
  {
    slug: "1984",
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian Fiction",
    status: "enriched"
  },
  {
    slug: "hamlet",
    title: "Hamlet",
    author: "William Shakespeare",
    year: 1603,
    genre: "Tragedy",
    status: "enriched"
  },
  {
    slug: "the-great-gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Modernist Fiction",
    status: "enriched"
  },
  {
    slug: "frankenstein",
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    genre: "Gothic Science Fiction",
    status: "enriched"
  },
  {
    slug: "jane-eyre",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Bildungsroman",
    status: "enriched"
  },
  {
    slug: "heart-of-darkness",
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    year: 1899,
    genre: "Colonial Critique",
    status: "enriched"
  },
  {
    slug: "beloved",
    title: "Beloved",
    author: "Toni Morrison",
    year: 1987,
    genre: "Historical Fiction",
    status: "pending"
  },
  {
    slug: "the-handmaids-tale",
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    year: 1985,
    genre: "Dystopian Fiction",
    status: "pending"
  },
  {
    slug: "never-let-me-go",
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    year: 2005,
    genre: "Speculative Fiction",
    status: "pending"
  },
  {
    slug: "the-road",
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Post-Apocalyptic Fiction",
    status: "pending"
  },
  {
    slug: "a-visit-from-the-goon-squad",
    title: "A Visit from the Goon Squad",
    author: "Jennifer Egan",
    year: 2010,
    genre: "Postmodern Fiction",
    status: "pending"
  },
  {
    slug: "severance",
    title: "Severance",
    author: "Ling Ma",
    year: 2018,
    genre: "Satirical Sci-Fi",
    status: "pending"
  },
  {
    slug: "the-white-tiger",
    title: "The White Tiger",
    author: "Aravind Adiga",
    year: 2008,
    genre: "Social Realism",
    status: "pending"
  },
  {
    slug: "dune",
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genre: "Science Fiction",
    status: "pending"
  },
  {
    slug: "the-left-hand-of-darkness",
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    year: 1969,
    genre: "Speculative Feminism",
    status: "pending"
  },
  {
    slug: "fahrenheit-451",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    year: 1953,
    genre: "Dystopian Fiction",
    status: "pending"
  },
  {
    slug: "the-lottery",
    title: "The Lottery",
    author: "Shirley Jackson",
    year: 1948,
    genre: "Horror Short Fiction",
    status: "pending"
  },
  {
    slug: "things-fall-apart",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    genre: "Postcolonial Fiction",
    status: "pending"
  },
  {
    slug: "one-hundred-years-of-solitude",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
    genre: "Magical Realism",
    status: "pending"
  }
];

export default bookList; 