import { findBook } from "./findBook.js"

export async function returnBook(library,isbn){
    
    await new Promise((resolve)=>setTimeout(resolve,1000))
    
    const book = await findBook(library,isbn);

    book.returnBook();
}