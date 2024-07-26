
// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handlePromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.error("Caught an error: ", error.message);
    }
}

handlePromise();
