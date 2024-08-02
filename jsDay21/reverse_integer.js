function reverseInteger(x) {
  let reversed = 0;
  let num = Math.abs(x);
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (reversed > 2 ** 31 - 1) return 0;
  return x < 0 ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
