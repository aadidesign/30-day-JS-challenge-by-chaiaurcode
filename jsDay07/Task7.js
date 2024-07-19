// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getTitleAndYear() {
        return `${this.title} (${this.year})`;
    }
};
console.log(book.getTitleAndYear());
