
// Task 7: Write a program to print a pattern using nested for loops
const n = 5;
for (let i = 1; i <= n; i++) {
    let pattern = '';
    for (let j = 0; j < i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}
