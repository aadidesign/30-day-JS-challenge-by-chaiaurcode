function multiply(a, b = 1) { // If 'b' is missing, it becomes 1
    return a * b;
}

// Scenario A: Both arguments provided
console.log(multiply(5, 2)); // Output: 10

// Scenario B: Second argument missing
console.log(multiply(5));    // Output: 5
// Logic: 5 * 1 = 5. (Without the default, this would be 5 * undefined = NaN)
