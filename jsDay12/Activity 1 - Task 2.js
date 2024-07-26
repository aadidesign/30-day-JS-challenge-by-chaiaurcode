
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Denominator cannot be zero");
        }
        return a / b;
    } catch (error) {
        console.error("Caught an error: ", error.message);
    }
}

divideNumbers(4, 0);
