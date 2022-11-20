// Store new book objects in array
let myLibrary = [];

// Book Class
class Book {
    constructor(title,author,read){
        this.title = title;
        this.author = author;
        this.read = read;
}
};

// declared button using Id and created event handlers that run functions on click
let button = document.getElementById('submit');
button.addEventListener("click",addBookToLibrary);
button.addEventListener("click",addRow);


// function takes input, saves the input in a new instance of book. Then pushes that object to myLibrary array
function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('read').value;
    
    const newBook = new Book(title, author, read);

    myLibrary.push(newBook); 
}


// seperate function to add row to table using same input
// table is selected using ID
// row variable is created from that using the insertRow method
// using(1) puts the row under the heading
// cell variables are created by using insertCell method
// innerHTML is used to add values to browser page
function addRow() {

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('read').value;

    const tableRow = document.getElementById('table');
    const row = tableRow.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
        cell1.innerHTML = title;
        cell2.innerHTML = author;
        // Cell 3 should create a button with value from read
        cell3.innerHTML = `<button type="button" class="btn btn-outline-dark readbtn" onclick="btnToggle(event)" >${read}</button>`;
        // cell 4 should create a delete button
        cell4.innerHTML = `<button type="button" class="btn btn-danger delete" onclick="delToggle(event)">Delete</button>`;

};

// Toggle read buton 
// Added

let readButton = document.querySelectorAll('.readbtn');
let deleteButton = document.querySelectorAll('.delete');

for(let i = 0; i < readButton.length; i++) {
    readButton[i].addEventListener("click",btnToggle);
    deleteButton[i].addEventListener("click",delToggle);
};

function btnToggle(event) {   
    if (event.target.innerHTML == "Read") {
        return (event.target.innerHTML = "Not Read");
      } else {
        return (event.target.innerHTML = "Read");
      }
};

// function for delete button
function delToggle(event) {   
    return (event.target.parentNode.parentNode.innerHTML = '');
};
