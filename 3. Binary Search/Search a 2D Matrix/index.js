// 74. Search a 2D Matrix

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    if (!arr || !arr.length) return false;
    return binarySearch(arr, l, r, target, true);
};

let binarySearch = function (arr, l, r, x, main) {
    if (main) {
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (!arr[mid]) {
                let left = binarySearch(arr, l, mid - 1, x, true);
                if (!left) {
                    return binarySearch(arr, mid + 1, r, x, true);
                }
                return left;
            }
            if (x >= arr[mid][0] && x <= arr[mid][arr[mid].length - 1]) {
                return binarySearch(arr[mid], 0, arr[mid].length - 1, x, false);
            } else if (x <= arr[mid][0]) {
                return binarySearch(arr, l, mid - 1, x, true);
            } else {
                return binarySearch(arr, mid + 1, r, x, true);
            }
        }
        return false;
    } else {
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] === x) {
                return true;
            } else if (x < arr[mid]) {
                return binarySearch(arr, l, mid - 1, x, false);
            } else {
                return binarySearch(arr, mid + 1, r, x, false);
            }
        }
        return false;
    }
};



// trivial test case 
// 1. []

// 2. [[]]


// better approch


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (arr, target) {
    if (!arr || !arr.length) return false;

    let m = arr.length;
    let n = arr[0].length;
    let l = 0;
    let r = (m * n) - 1;
    return binarySearch(arr, l, r, target, m, n);
};

let binarySearch = function (arr, l, r, x, m, n) {
    while (l <= r) {
        let pivotIndex = Math.floor((l + r) / 2);
        let properEl = arr[Math.floor(pivotIndex / n)][pivotIndex % n];
        if (x === properEl) {
            return true;
        } else if (x < properEl) {
            return binarySearch(arr, l, pivotIndex - 1, x, m, n);
        } else {
            return binarySearch(arr, pivotIndex + 1, r, x, m, n);
        }
    }
    return false;
};