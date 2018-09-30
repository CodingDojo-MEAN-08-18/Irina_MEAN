import { Book } from '../models/book';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'stranger',
    author: 'robert',
    publisher: 'G. P. Punam',
    year: 1961,
    pages: 408

  },
  {


  id:randomId(),
  title: 'where the red fern',
  author: 'wilson',
  publisher: 'doubleday',
  year: 1961,
  pages: 408
  },

];

function randomId() : number{
	return Math.floor(Math.random() * 1000);

}