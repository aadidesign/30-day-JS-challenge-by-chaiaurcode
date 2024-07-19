// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    updateYear(newYear) {
        this.year = newYear;
    }
};
book.updateYear(2024);
console.log(book);
