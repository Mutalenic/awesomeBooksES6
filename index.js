import Book from './modules/book.js';
import { DateTime } from './modules/luxon/src/luxon.js';

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const Form = document.querySelector('form');
const listBtn = document.querySelectorAll('.listBtn');
const addActive = document.querySelectorAll('.section');

Form.addEventListener('submit', (e) => {
  const newBook = new Book(bookTitle.value, bookAuthor.value);
  newBook.addBook();
  bookAuthor.value = '';
  bookTitle.value = '';
  e.preventDefault();
});
Book.displayUI();

const removeButton = document.querySelectorAll('.removeBtn');
removeButton.forEach((item) => item.addEventListener('click', function () {
  const deleteBook = new Book(bookTitle.value, bookAuthor.value, this.id);
  deleteBook.removeBook();
}));

listBtn.forEach((btn, i) => {
  btn.onclick = () => {
    listBtn.forEach((oldBtn) => {
      oldBtn.classList.remove('active');
    });
    btn.classList.add('active');
    addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});

const displayTime = () => {
  document.getElementById('date').innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
  setInterval(displayTime, 1000);
};

displayTime();
