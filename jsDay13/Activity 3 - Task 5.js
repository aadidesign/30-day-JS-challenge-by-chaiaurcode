
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
// constants.js
export const PI = 3.14;
export function circumference(radius) {
    return 2 * PI * radius;
}
export function area(radius) {
    return PI * radius * radius;
}

// main.js
import * as math from './constants.js';
console.log(math.circumference(3)); // 18.84
console.log(math.area(3)); // 28.26
