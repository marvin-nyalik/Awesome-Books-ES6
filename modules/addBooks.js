import { bookTitle } from "../index.js";
import { bookAuthor } from "../index.js";

export const addBooks = () => {
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