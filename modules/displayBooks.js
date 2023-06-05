const displayBooks = (book) => {
  const books = JSON.parse(localStorage.getItem('books'));
  const bookContainer = document.querySelector('.books-container');
  const displaybook = book.map((item) => `
        <div id="book" data-title="${item.title}">
        <p>${item.title} by "${item.author}"</p>
        <button class="remove">Remove</button>
        </div>
        `).join('');
    // display books
  bookContainer.innerHTML = displaybook;

  bookContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
      // Find the parent book element and remove it
      const bookElement = event.target.closest('#book');
      const bookTitle = bookElement.dataset.title;

      bookElement.remove();

      // Remove the book from the 'books' array
      const bookIndex = books.findIndex((book) => book.title === bookTitle);
      if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
      }
      localStorage.setItem('books', JSON.stringify(books));
    }
  });
};

export default displayBooks;