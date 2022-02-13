// Given a sorted and rotated array, find if there is a pair with a given sum
// Given an array that is sorted and then rotated around an unknown point. Find if the array has a pair with a given sum ‘x’. It may be assumed that all elements in the array are distinct.
// Examples :

// Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
// Output: true
// There is a pair (6, 10) with sum 16

// Input: arr[] = {11, 15, 26, 38, 9, 10}, x = 35
// Output: true
// There is a pair (26, 9) with sum 35

// Input: arr[] = {11, 15, 26, 38, 9, 10}, x = 45
// Output: false
// There is no pair with sum 45.

function ifPairExist(arr, sum) {
    const pivotIndex = getPivotIndex(arr);

    if (pivotIndex > -1) {
        const leftArr = arr.slice(0, pivotIndex + 1);
        const rightArr = arr.slice(pivotIndex + 1, arr.length);
        return checkSum([...rightArr, ...leftArr], sum);
    }
    else {
        return checkSum(arr, sum);
    }
}

function checkSum(arr, sum) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
            else if ((arr[i] + arr[j] > sum)) {
                return false;
            }
        }
    }
    return false;
}

function getPivotIndex(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i + 1] < arr[i]) {
            return i;
        }
    }
    return -1;
}



let arr = [11, 15, 26, 38, 9, 10];
let sum = 45;

const isExist = ifPairExist(arr, sum);

console.log(isExist);