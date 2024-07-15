
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log("Largest:", a);
  } else if (b >= a && b >= c) {
    console.log("Largest:", b);
  } else {
    console.log("Largest:", c);
  }
}
findLargest(1, 5, 3);
findLargest(10, 7, 9);
