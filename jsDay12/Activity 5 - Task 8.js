
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://invalid.url")
    .then(response => response.json())
    .catch(error => console.error("Caught an error: ", error.message));
