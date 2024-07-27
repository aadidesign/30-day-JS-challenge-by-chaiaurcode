
// Task 1
function outerFunction() {
    const outerVar = 'I am outside!';
    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction;
}
const myFunction = outerFunction();
myFunction();

// Task 2
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount());
