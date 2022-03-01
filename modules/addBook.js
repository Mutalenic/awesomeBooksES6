import render from './render.js';
import Book from './book.js';

const addBook = (book) => {
  Book.push(book);
  localStorage.setItem('bookInfo', JSON.stringify(book));
  render();
};

export default addBook;
