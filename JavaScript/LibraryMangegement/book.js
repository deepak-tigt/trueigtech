export class book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    borrow() {
        if(!this.isAvailable){
        throw new Error("book is already borrowed ")
        }
        this.isAvailable = false;
    }

    returnBook(){
        this.isAvailable = true;
    }
}

