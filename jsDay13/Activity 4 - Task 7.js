
// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// main.js
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error fetching data:', error));
