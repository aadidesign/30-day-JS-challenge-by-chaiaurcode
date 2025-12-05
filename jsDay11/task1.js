// A Promise is a JavaScript object that acts as a placeholder for data that isn't ready yet.
// It is a commitment that says: "I don't have the value right now, but I promise to give you a result (or an error) later."

// Technically, it is an Object with 3 distinct states. It cannot be in two states at once.
// Pending: The initial state. The operation has started but hasn't finished. (The 2-second wait in our code).
// Fulfilled (Resolved): The operation finished successfully. The promise now holds the value (e.g., 'Resolved after 2 seconds').
// Rejected: The operation failed. The promise now holds the error reason.

// NOTE:
// JavaScript is single-threaded (it can only do one thing at a time).
// If you tried to download a huge file without a Promise, your entire website would freeze until the download finished. You couldn't click buttons or scroll.
// A Promise allows JavaScript to say: "Okay, kick off that download in the background, and let me know when it's done. Meanwhile, I'll keep the website running."


// 1. CREATION: We create a "Promise" object.
// Think of this as the "buzzer" a restaurant gives you while you wait.
// It takes a function with a 'resolve' tool (and optional 'reject').
const promise1 = new Promise((resolve) => {

    // 2. THE DELAY (Simulating work):
    // setTimeout simulates a slow task, like fetching data from a server.
    // It waits for 2000 milliseconds (2 seconds).
    setTimeout(() => {
        
        // 3. THE COMPLETION:
        // After 2 seconds, we call 'resolve'.
        // This changes the Promise status from "Pending" to "Fulfilled".
        // The string inside (...) is the data we deliver.
        resolve('Resolved after 2 seconds'); 
        
    }, 2000);
});

// 4. CONSUMPTION:
// .then() is the event listener. It sits and waits.
// It ONLY runs when 'resolve' is called above.
// 'message' becomes the string "Resolved after 2 seconds".
promise1.then(message => console.log(message));
