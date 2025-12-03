let arr1 = [0,1, 2, 3, 4]
console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1[arr1.length-1]);

// map method to create a new array where each number is doubled and log the new array.
let doubledArr = arr1.map(num => num*2);
console.log(doubledArr);

// filter method to create a new array with only even numbers and log the new array.
let evenArr = arr1.filter(num => num % 2 === 0);
console.log(evenArr);

// reduce method to calculate the sum of all numbers in the array and log the result.
let sum = arr1.reduce((total, num) => total+num, 0);
console.log(sum);
