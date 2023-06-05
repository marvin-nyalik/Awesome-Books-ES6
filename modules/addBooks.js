/* eslint-disable import/no-cycle */
import { bookTitle, bookAuthor } from '../index.js';

const addBooks = () => {
  const bookDetails = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };
  let books = [];

  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  books.push(bookDetails);
  localStorage.setItem('books', JSON.stringify(books));
};

export default addBooks;