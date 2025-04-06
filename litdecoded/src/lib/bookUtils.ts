import { Book } from '../data/bookList';

export const getBookBySlug = (slug: string, list: Book[]) =>
  list.find((book) => book.slug === slug); 