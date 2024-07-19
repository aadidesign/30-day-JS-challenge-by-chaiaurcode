// Feature Request 1: Book Object Script
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    },
    updateYear(newYear) {
        this.year = newYear;
    },
    getTitleAndYear() {
        return `${this.title} (${this.year})`;
    }
};
console.log(book);
console.log(book.getTitleAndAuthor());
book.updateYear(2024);
console.log(book);
console.log(book.getTitleAndYear());
