// Find duplicates in O(n) time and O(1) extra space | Set 1
// Given an array of n elements which contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and using only constant memory space.
// Example:

// Input : n = 7 and array[] = {1, 2, 3, 1, 3, 6, 6}
// Output: 1, 3, 6

// Explanation: The numbers 1 , 3 and 6 appears more
// than once in the array.

// Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
// Output: 3

// Explanation: The number 3 appears more than once
// in the array.

function findDuplicate(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[Math.abs(arr[i])] > 0) {
            arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
        } else if (arr[Math.abs(arr[i])] === 0) {
            arr[Math.abs(arr[i])] = "0";
        } else if (arr[Math.abs(arr[i])] === "0") {
            console.log(Math.abs(arr[i]));
        }
        else
            console.log(Math.abs(arr[i]));
    }
}


findDuplicate([0, 4, 3, 0, 2, 7, 8, 2, 3, 1]);
