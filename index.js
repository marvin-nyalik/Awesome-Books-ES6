/* eslint-disable import/no-cycle */
import displayItem from './modules/displayItem.js';
import displayBooks from './modules/displayBooks.js';

export const form = document.querySelector('form');
export const bookTitle = document.querySelector('.title');
export const bookAuthor = document.querySelector('.author');

displayItem();

(function onReload() {
  if (localStorage.getItem('books')) {
    const allBooks = JSON.parse(localStorage.getItem('books'));
    displayBooks(allBooks);
  }
}());

form.addEventListener('submit', (e) => {
  e.preventDefault();
  displayItem();
});

const pages = document.querySelectorAll('.nav-links');
const bookSection = document.querySelector('.book-section');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('.contact-section');

pages.forEach((page) => {
  page.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
      bookSection.classList.remove('non-active');
      bookSection.classList.add('active');
      formSection.classList.add('non-active');
      contactSection.classList.add('non-active');
    } else if (e.target.classList.contains('new')) {
      bookSection.classList.remove('active');
      bookSection.classList.add('non-active');
      formSection.classList.remove('non-active');
      formSection.classList.add('active');
      contactSection.classList.remove('active');
      contactSection.classList.add('non-active');
    } else if (e.target.classList.contains('contact')) {
      bookSection.classList.remove('active');
      bookSection.classList.add('non-active');
      formSection.classList.remove('active');
      formSection.classList.add('non-active');
      contactSection.classList.remove('non-active');
      contactSection.classList.add('active');
    }
  });
});
