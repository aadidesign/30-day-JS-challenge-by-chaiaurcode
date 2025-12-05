// 1. THE REQUEST
// We call fetch() with the URL (the API Endpoint).
// This is like typing a website address and hitting Enter.
// It returns a Promise that resolves when the server says "Hello".
fetch('https://jsonplaceholder.typicode.com/posts/1')

    // 2. THE FIRST PROMISE (The Response Object)
    // When the server connects, we get a 'response' object.
    // CRITICAL: This is just the "envelope" (headers, status code 200 OK).
    // The actual data (body) is still downloading.
    // We call .json() to read the body and parse it. This returns a NEW Promise.
    .then(response => response.json())

    // 3. THE SECOND PROMISE (The Actual Data)
    // Once .json() finishes parsing, we finally get the 'data'.
    // Now it is a real JavaScript object { id: 1, title: "..." }
    .then(data => console.log(data))

    // 4. THE SAFETY NET
    // If the internet is down or the URL is wrong, this catches the error.
    .catch(error => console.error('Error:', error));
