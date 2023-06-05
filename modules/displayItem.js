import { addBooks } from "../modules/addBooks.js";
import { displayBooks } from "../modules/displayBooks.js";
import { clearField } from "../modules/clearField.js";

export const displayItem = () => {
  addBooks();
  const updatedBooks = localStorage.getItem('books');
  const allBooks = JSON.parse(updatedBooks);
  displayBooks(allBooks);
  clearField();
};

