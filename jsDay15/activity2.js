
// Task 3
function uniqueIdGenerator() {
    let lastId = 0;
    return function() {
        lastId++;
        return lastId;
    };
}
const generateId = uniqueIdGenerator();
console.log(generateId());
console.log(generateId());

// Task 4
function createGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}
const greetJohn = createGreeting('John');
greetJohn();
