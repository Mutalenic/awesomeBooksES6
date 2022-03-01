export default class Book {
  books = [];

  constructor() {
    const fooBooks = localStorage.getItem('bookInfo');
    // console.log(fooBooks);
    if (fooBooks !== null && fooBooks !== undefined) {
      this.books = JSON.parse(fooBooks);
    }
  }

  addBook = (title, author) => {
    const bookObj = {
      title,
      author,
    };

    this.books.push(bookObj);

    this.books = this.books.filter((element, i) => {
      const updatedBook = element;
      updatedBook.id = i;
      return updatedBook;
    });

    localStorage.setItem('bookInfo', JSON.stringify(this.books));
    window.location.reload();
  };

  removeBook = (id) => {
    this.books = this.books.filter((element) => element.id !== parseInt(id, 10));

    this.books = this.books.filter((element, i) => {
      const updatedBook = element;
      updatedBook.id = i;
      return updatedBook;
    });

    localStorage.setItem('bookInfo', JSON.stringify(this.books));
    window.location.reload();
  };
}
