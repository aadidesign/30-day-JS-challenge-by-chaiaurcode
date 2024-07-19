// Task 6: Access and log the name of the library and the titles of all the books in the library
const library = {
    name: "City Library",
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
    ]
};
console.log(`Library: ${library.name}`);
library.books.forEach(book => {
    console.log(`Title: ${book.title}`);
});
