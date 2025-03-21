// Fetch books from the API
function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
      displayErrorMessage();
    });
}

// Render book titles into the DOM
function renderBooks(books) {
  const booksContainer = document.getElementById('books-container');
  if (!booksContainer) {
    console.error('Error: books-container element is missing in the DOM');
    return;
  }
  
  booksContainer.innerHTML = ''; // Clear previous content

  books.forEach(book => {
    const bookTitleElement = document.createElement('p');
    bookTitleElement.textContent = book.name;
    booksContainer.appendChild(bookTitleElement);
  });
}

// Handle and display error message in the UI
function displayErrorMessage() {
  const booksContainer = document.getElementById('books-container');
  if (booksContainer) {
    booksContainer.innerHTML = '<p style="color:red;">Failed to load books. Please try again later.</p>';
  }
}

// Ensure DOM is loaded before fetching
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});
