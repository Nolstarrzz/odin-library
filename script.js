let myLibrary = [];

let bookArea = document.getElementById('book-area');


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  console.log(read)
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

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = 'Remove'
  if(book.read === true)
  {
    readBtn.textContent = 'Read';
  }
  else
  {
    readBtn.textContent = 'Not Read';
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  buttonGroup.appendChild(readBtn)
  buttonGroup.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  bookArea.appendChild(bookCard)
}

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
  form.style.display = 'grid';
}

function getValues() {
  let read;
  let form = document.getElementById("popUpForm");
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read1 = document.getElementById("notRead").checked;
  let read2 = document.getElementById("read").checked;
  
  if (!title || !author || !pages || (!read1 && !read2)) {
    alert("Please fill out all required fields.");
    return;
  }

  console.log("Title:", title);
  console.log("Author:", author);
  console.log("Pages:", pages);
  console.log("Read1:", read1);
  console.log("Read2:", read2);

  if (read1) {
    read = read1;
    console.log("Read:", read);
  } else if (read2) {
    read = read2;
    console.log("Read:", read);
  }

  addBookToLibrary(title, author, pages, read);
  loopBooks();
}

