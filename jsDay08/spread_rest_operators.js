
// Activity 3: Spread and Rest Operators
// Task 5
const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5, 6];         //To merge Arrays
console.log(newArray);

// Task 6
// '...args' collects all individual numbers passed in and puts them into an array.
// If you call sum(1, 2, 3), args becomes [1, 2, 3]
function sum(...args) { 

    // .reduce() loops through the array to calculate a single value
    return args.reduce((acc, current) => {
        
        // 'acc' (Accumulator) is the running total.
        // 'current' is the number we are currently adding.
        return acc + current; 
        
    }, 0); // <--- This '0' is the starting value for 'acc'
}

console.log(sum(1, 2, 3, 4)); 
// Output: 10
// Logic: 0+1=1 -> 1+2=3 -> 3+3=6 -> 6+4=10
