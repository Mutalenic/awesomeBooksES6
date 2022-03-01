import Book from './modules/book.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';
import displayUI from './modules/render.js';

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const Form = document.querySelector('form');
const listBtn = document.querySelectorAll('.listBtn');
const addActive = document.querySelectorAll('.section');

const bookData = new Book();

Form.addEventListener('submit', (e) => {
  // const newBook = new Book(, );
  bookData.addBook(
    bookTitle.value,
    bookAuthor.value,
    0,
  );
  // newBook.addBook();
  bookAuthor.value = '';
  bookTitle.value = '';
  e.preventDefault();
});

displayUI(bookData.books);

const removeButton = document.querySelectorAll('.removeBtn');
removeButton.forEach((item) => item.addEventListener('click', (e) => {
  bookData.removeBook(e.target.id);
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
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
  setInterval(displayTime, 1000);
};

displayTime();
