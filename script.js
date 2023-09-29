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
  readBtn.classList.add('read-button')

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = 'Remove'
  console.log(book.read)
  if(book.read === 'read')
  {
    readBtn.textContent = 'Read';
    readBtn.classList.add('green-button')
  }
  else
  {
    readBtn.textContent = 'Not Read';
    readBtn.classList.add('red-button')
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

function changeReadButton(title, readBtn) {
  const index = myLibrary.findIndex(book => book.title === title);
  if (index !== -1) {
    const book = myLibrary[index]; // Get the book object
    
    // Check the class name of the button to determine its state
    if (readBtn.classList.contains('green-button')) {
      readBtn.classList.remove('green-button'); // Remove the 'green-button' class
      readBtn.classList.add('red-button');       // Add the 'red-button' class
      book.read = 'not read'; // Update the book object
    } else if (readBtn.classList.contains('red-button')) {
      readBtn.classList.remove('red-button');   // Remove the 'red-button' class
      readBtn.classList.add('green-button');    // Add the 'green-button' class
      book.read = 'read'; // Update the book object
    }
    loopBooks()
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
  if (event.target.classList.contains('read-button')) {
    const bookCard = event.target.closest('.book-card');
    if (bookCard) {
      // Get the title of the book associated with the clicked button
      const titleElement = bookCard.querySelector('p'); // Assuming the title is in a <p> element
      const title = titleElement.textContent;

      // Call changeReadButton with the actual button element
      const readBtn = event.target; // The clicked button
      changeReadButton(title, readBtn);
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

function getValues(event) {
  event.preventDefault();

  let read, form, title, author, pages;
  read = document.querySelector('input[name="readOption"]:checked');
  form = document.getElementById("popUpForm");
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  
  if (!title || !author || !pages || !read) {
    alert("Please fill out all required fields.");
    return;
  }

  let selectedOption = read.value;

  addBookToLibrary(title, author, pages, selectedOption);
  loopBooks();
  form.style.display = 'none';
}

