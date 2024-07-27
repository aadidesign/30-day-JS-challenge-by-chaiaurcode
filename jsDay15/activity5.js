
// Task 7
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Task 8
const factorial = memoize(function(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
});
console.log(factorial(5));
console.log(factorial(6));
