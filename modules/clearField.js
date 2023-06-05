/* eslint-disable import/no-cycle */
import { bookTitle, bookAuthor } from '../index.js';

const clearField = () => {
  bookTitle.value = '';
  bookAuthor.value = '';
};

export default clearField;