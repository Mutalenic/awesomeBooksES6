const bookList = document.querySelector('.book-list');

const displayUI = (books) => {
  let bookDIV = '';

  books.forEach((item) => {
    bookDIV += `<div class="bookDIV">
    <p class='button-info'>"${item.title}" by "${item.author}"</p>
    <button type="button" class="removeBtn" id="${item.id}">Remove</button>
    </div>`;
  });
  bookList.innerHTML = bookDIV;
};

export default displayUI;
