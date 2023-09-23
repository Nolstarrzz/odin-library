let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return(title + " by " + author + ", " + pages + ", " + read);
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function loopBooks() {
  for (const book of myLibrary) {
    console.log(book.info());
  }
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "not read yet")
loopBooks();