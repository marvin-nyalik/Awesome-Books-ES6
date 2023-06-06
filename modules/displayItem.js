/* eslint-disable import/no-cycle */
import addBooks from './addBooks.js';
import displayBooks from './displayBooks.js';
import clearField from './clearField.js';

const displayItem = () => {
  addBooks();
  const updatedBooks = localStorage.getItem('books');
  const allBooks = JSON.parse(updatedBooks);
  displayBooks(allBooks);
  clearField();
};

export default displayItem;