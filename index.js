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

const lib = new Library();
const book1 = new Book(400, "Jane", "Doe", false);
const book2 = new Book(300, "Jon", "Doe", false);
const book3 = new Book(200, "Jack", "Doe", false);
lib.addBook(book1);
lib.addBook(book2);
lib.addBook(book3);

const booksGrid = document.getElementById("book-grid");

const updateBooks = () => {
  removeBooks();
  for (let book of lib.books) {
    createBookCard(book);
  }
};

const removeBooks = () => {
  booksGrid.innerHTML = "";
};

const createBookCard = (book) => {
  const bookCard = document.createElement("div");
  const name = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");

  name.textContent = book.name;
  author.textContent = book.author;
  pages.textContent = book.pages;

  bookCard.appendChild(name);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);

  booksGrid.appendChild(bookCard);
};

updateBooks();
