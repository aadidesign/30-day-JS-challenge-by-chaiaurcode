
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// main.js
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
