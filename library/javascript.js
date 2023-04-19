let myLibrary = [];
let addButton = document.getElementById('add-book');
let popupForm = document.getElementById('popup-form');
let cancelButton = document.getElementById('cancel-button');

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('read').checked;
    let book = new Book(title, author, read);
    myLibrary.push(book);
    displayLibrary();
}

function displayLibrary() {
    let displayBooks = document.getElementById('library');
    displayBooks.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.textContent = book.title + " by " + book.author;
        displayBooks.appendChild(bookElement);
        let readButton = document.createElement('button');
        let isRead = book.read;
        readButton.textContent = isRead ? "Read" : "Not Read";
        readButton.classList.add(isRead ? "readTrue" : "readFalse");
        readButton.addEventListener('click' , () => {
            isRead = !isRead;
            readButton.textContent = isRead ? "Read" : "Not Read";
            readButton.classList.toggle("readTrue");
            readButton.classList.toggle("readFalse");
            myLibrary[i].read = isRead;
        })
        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            displayLibrary();
        })
        bookElement.appendChild(readButton);
        bookElement.appendChild(removeButton);
        displayBooks.appendChild(bookElement);
    }
}

addButton.addEventListener('click', () => {
    popupForm.classList.toggle('show');
});

cancelButton.addEventListener('click', () => {
    popupForm.classList.remove('show');
})

popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    popupForm.classList.remove('show');
});