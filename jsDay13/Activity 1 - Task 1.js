
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
// add.js
export function add(a, b) {
    return a + b;
}

// main.js
import { add } from './add.js';
console.log(add(2, 3)); // 5
