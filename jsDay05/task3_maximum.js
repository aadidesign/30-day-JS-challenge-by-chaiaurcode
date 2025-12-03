const findMaximum = function (a, b) {
    const max = (a > b) ? a : b;
    console.log('Maximum is:', max);
}

let input1 = prompt("Enter the first number:");
let num1 = Number(input1);

let input2 = prompt("Enter the second number:");
let num2 = Number(input2);

findMaximum(num1, num2);
