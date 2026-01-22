
export  function findBook(library,isbn){

    // await new Promise ((resolve)=> setTimeout(resolve,1000));    
    const book = library.books.find((bk)=>bk.isbn===isbn);

    if(!book){
        throw new Error("book not found with this isbn !")
    }
    return book;
}