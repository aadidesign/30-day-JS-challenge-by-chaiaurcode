// Feature Request 3: Object Iteration Script
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}
console.log(Object.keys(book));
console.log(Object.values(book));
