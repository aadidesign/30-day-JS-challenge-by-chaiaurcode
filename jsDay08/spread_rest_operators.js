
// Activity 3: Spread and Rest Operators
// Task 5
const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5, 6];
console.log(newArray);

// Task 6
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
