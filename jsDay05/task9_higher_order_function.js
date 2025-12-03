// 1. The HOF 
function higherOrderFunction(fn, num) {
    for (let i = 0; i < num; i++) {
        fn(); // Execute the passed function
    }
}

// 2. The Callback (The instructions we want to repeat)
const sayHello = () => console.log("Hello!");

// 3. Execution
// Notice we pass 'sayHello', NOT 'sayHello()'
higherOrderFunction(sayHello, 3);
