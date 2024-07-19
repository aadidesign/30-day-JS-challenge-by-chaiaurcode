// Feature Request 2: Library Object Script
const library = {
    name: "City Library",
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
    ],
    getLibraryDetails() {
        console.log(`Library: ${this.name}`);
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
        });
    }
};
console.log(library);
library.getLibraryDetails();
