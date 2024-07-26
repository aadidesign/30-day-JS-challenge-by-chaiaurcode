
// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
        const response = await fetch("https://invalid.url");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Caught an error: ", error.message);
    }
}

fetchData();
