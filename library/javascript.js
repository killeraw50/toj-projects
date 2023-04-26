const library = {
    myLibrary: [],
    addBookToLibrary(title, author, read) {
        const book = {title, author, read};
        this.myLibrary.push(book);
        this.displayLibrary();
    },
    removeBook(i) {
        this.myLibrary.splice(i, 1);
        this.displayLibrary();
    },
    toggleRead(i) {
        this.myLibrary[i].read = !this.myLibrary[i].read;
        this.displayLibrary();
    },
    displayLibrary() {
        const displayBooks = document.getElementById("library");
        displayBooks.innerHTML = "";
        this.myLibrary.forEach((book, i) => {
            const bookElement = document.createElement("div");
            bookElement.textContent = `${book.title} by ${book.author}`;
  
            const readButton = document.createElement("button");
            readButton.textContent = book.read ? "Read" : "Not Read";
            readButton.classList.add(book.read ? "read" : "notRead");
            readButton.addEventListener("click" , () => this.toggleRead(i));
  
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove Book";
            removeButton.addEventListener("click", () => this.removeBook(i));
  
            bookElement.appendChild(readButton);
            bookElement.appendChild(removeButton);
            displayBooks.appendChild(bookElement);
        });
    }
};
  
const addButton = document.getElementById("add-book");
const popupForm = document.getElementById("popup-form");
const cancelButton = document.getElementById("cancel-button");
  
addButton.addEventListener("click", () => popupForm.classList.toggle("show"));
  
cancelButton.addEventListener("click", () => popupForm.classList.remove("show"));
  
popupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked;
    library.addBookToLibrary(title, author, read);
    popupForm.classList.remove("show");
});