
function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
