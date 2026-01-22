import { addBook } from "./addBook.js";
import { findBook } from "./findBook.js";
import { book } from "./book.js";
import { borrowBook } from "./borrowBook.js";
import { library } from "./library.js";
import { returnBook } from "./returnBook.js";

let lib = new library();

// for addding books 
document.getElementById("adding").addEventListener("click",()=>{
    const addISBN = document.getElementById("addIsbn").value
    const addTitle = document.getElementById("addTitle").value
    const addAuthor = document.getElementById("addAuthor").value

    let book1 = new book(addTitle,addAuthor,addISBN)
    addBook(lib,book1)
    console.log("LIBRARY BOOKS:", lib.books);

})

// for geting book details with its isbn
document.getElementById("getBook").addEventListener("click",()=>{
    const searchISBN = document.getElementById("searchIsbn").value
    
    const book1 = findBook(lib,searchISBN)
    const bookdetails = document.getElementById("bookDetails")
    
     
  if (!book1) {
    bookdetails.innerText = "Book not found";
    return;
  }
  bookdetails.innerHTML = `
    <p>Title: ${book1.title}</p>
    <p>Author: ${book1.author}</p>
    <p>ISBN: ${book1.isbn}</p>
    <p>Status: ${book1.isAvailable ? "Available":"Borrowed"  }</p>
  `;

  console.log(book1)

})


// for borrowing the book 

document.getElementById("borrowing").addEventListener("click",()=>{
    const bookIsbn = document.getElementById("borrowIsbn").value
    const outputBorrow = document.getElementById("borrowOutput")


try {
        const output = borrowBook(lib,bookIsbn)
        console.log(output);
            outputBorrow.textContent = "book borrowed successfully !"
} catch (error) {
    outputBorrow.textContent = error.message;
}    

    

})
