
// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
const number = 5; // You can change this value to test with other numbers
let factorial = 1;
let i = 1;
do {
    factorial *= i;
    i++;
} while (i <= number);
console.log(`Factorial of ${number} is ${factorial}`);
