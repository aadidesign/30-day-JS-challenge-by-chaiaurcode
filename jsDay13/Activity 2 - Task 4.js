
// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
// multiply.js
export default function multiply(a, b) {
    return a * b;
}

// main.js
import multiply from './multiply.js';
console.log(multiply(4, 2)); // 8
