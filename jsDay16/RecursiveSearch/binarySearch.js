function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    return binarySearch(arr, target, mid + 1, end);
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1