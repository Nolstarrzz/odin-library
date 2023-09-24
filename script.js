let myLibrary = [];
let form = document.getElementById("popUpForm");


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

function cancelForm()
{
  form.style.display = 'none';
}

function startForm()
{
  form.style.display = 'grid';
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("readOption");
  addBookToLibrary(title, author, pages, read)
  loopBooks();
}