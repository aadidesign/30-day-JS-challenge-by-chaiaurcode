function maxArray(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], maxArray(arr.slice(1)));
}
console.log(maxArray([1, 5, 3, 9, 2])); // 9
console.log(maxArray([7, 7, 7])); // 7