import { findBook } from "./findBook.js";

export  function borrowBook(library,isbn){
    
    // await new Promise((resolve)=>setTimeout(resolve,1000));
    const bookdetails =  findBook(library,isbn);
    bookdetails.borrow();

    
}