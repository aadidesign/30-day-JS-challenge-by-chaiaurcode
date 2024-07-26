
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    try {
        if (input.trim() === "") {
            throw new ValidationError("Input cannot be empty");
        }
        console.log("Input is valid");
    } catch (error) {
        console.error("Caught an error: ", error.name, error.message);
    }
}

validateInput("");
