
// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
// person.js
export const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
};

// main.js
import { person } from './person.js';
person.greet(); // Hello, my name is John Doe
