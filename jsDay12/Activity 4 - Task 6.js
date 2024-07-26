
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function randomPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > 0.5) {
            resolve("Promise resolved");
        } else {
            reject(new Error("Promise rejected"));
        }
    });
}

randomPromise()
    .then(result => console.log(result))
    .catch(error => console.error("Caught an error: ", error.message));
