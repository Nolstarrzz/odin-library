let myLibrary = [];


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

function loopBooks() {
  for (const book of myLibrary) {
    console.log(book.title + " by " + book.author + ", " + book.pages + ", " + book.read);
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
    return; // Stop processing the form
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