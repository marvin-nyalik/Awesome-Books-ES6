import { bookTitle } from "../index.js";
import { bookAuthor } from "../index.js";

export const clearField = () => {
  bookTitle.value = '';
  bookAuthor.value = '';
};