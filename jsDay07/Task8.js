// Task 8: Use a for...in loop to iterate over the properties of the book object
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}
