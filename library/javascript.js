let myLibrary = [];
let form = document.getElementById("add-book-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    addBooktoLibrary(title, author);
    display();
})

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBooktoLibrary(title, author) {
    let book = new Book(title, author);
    myLibrary.push(book);
}

function display() {
    let tbody = document.querySelector("#book-table tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let row = tbody.insertRow();
      let titleCell = row.insertCell();
      let authorCell = row.insertCell();
      titleCell.innerText = myLibrary[i].title;
      authorCell.innerText = myLibrary[i].author;
    }
  }