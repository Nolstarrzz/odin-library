let myLibrary = [];

let bookArea = document.getElementById('book-area');


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

function resetBooks()
{
  bookArea.innerHTML = '';
}

function createBook(book)
{
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')

  bookCard.classList.add('book-card')
  buttonGroup.classList.add('book-card-btns-container')
  removeBtn.classList.add('book-card-btns')
  removeBtn.classList.add('remove-button')
  readBtn.classList.add('book-card-btns')

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = 'Remove'
  if(book.read)
  {
    readBtn.textContent = 'Read';
    readBtn.classList.add('read-button-true')
  }
  else
  {
    readBtn.textContent = 'Not Read';
    readBtn.classList.add('read-button-false')
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  buttonGroup.appendChild(readBtn)
  buttonGroup.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  bookArea.appendChild(bookCard)
}

function removeBook(title) {
  const index = myLibrary.findIndex(book => book.title === title);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}

const bookCardContainer = document.querySelector('.main-content');

bookCardContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove-button')) {
    const bookCard = event.target.closest('.book-card');
    if (bookCard) {
      // Get the title of the book associated with the clicked button
      const titleElement = bookCard.querySelector('p'); // Assuming the title is in a <p> element
      const title = titleElement.textContent;

      // Call removeBook to remove the book from the library
      removeBook(title);

      // Optionally, update the displayed books after removal
      loopBooks();
    }
  }
});

function loopBooks() {
  resetBooks()
  for (const book of myLibrary) {
    createBook(book);
  }
}


function cancelForm()
{
  let form = document.getElementById("popUpForm");
  form.style.display = 'none';
}

function startForm()
{
  let form = document.getElementById("popUpForm");
  form.style.display = 'flex';
}

function getValues() {
  let read = document.querySelector('input[name="read"]:checked');
  let form = document.getElementById("popUpForm");
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  
  if (!title || !author || !pages || read) {
    alert("Please fill out all required fields.");
    return;
  }

  console.log("Read:", read);

  addBookToLibrary(title, author, pages, read);
  loopBooks();
  form.style.display = 'none';
}

