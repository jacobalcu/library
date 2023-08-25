class Book {
  constructor(pages, name, author, isRead) {
    this.pages = pages;
    this.name = name;
    this.author = author;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (!this.isInLibrary(book)) {
      this.books.push(book);
    }
  }

  removeBook(book) {
    if (this.isInLibrary(book)) {
      let index = this.books.indexOf(book);
      this.books.splice(index, 1);
    }
  }

  getBook(book) {
    if (this.isInLibrary(book)) {
      return this.books[this.books.indexOf(book)];
    }
  }

  isInLibrary(newBook) {
    let res = this.books.some(
      (book) => book.name === newBook.name && book.author === newBook.author
    );
    return res;
  }
}
