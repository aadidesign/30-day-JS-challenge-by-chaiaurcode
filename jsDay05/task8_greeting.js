function greet(name, age = 18) {
    return `Hello ${name}, you are ${age} years old.`;
}

// Case 1: All arguments provided
console.log(greet("Alice", 25)); 
// Output: "Hello Alice, you are 25 years old."

// Case 2: Second argument missing (Uses Default)
console.log(greet("Bob")); 
// Output: "Hello Bob, you are 18 years old."

// Case 3: Edge Case (First argument missing)
console.log(greet()); 
// Output: "Hello undefined, you are 18 years old."
