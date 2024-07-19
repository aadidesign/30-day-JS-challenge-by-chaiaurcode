// Task 3: Add a method to the book object that returns a string with the book's title and author
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    }
};
console.log(book.getTitleAndAuthor());
