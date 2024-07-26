
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function tryCatchFinally() {
    try {
        console.log("In the try block");
        throw new Error("An error occurred");
    } catch (error) {
        console.error("Caught an error: ", error.message);
    } finally {
        console.log("In the finally block");
    }
}

tryCatchFinally();
