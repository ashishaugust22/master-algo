// 81. Search in Rotated Sorted Array II
// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
// Follow up:

// This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
// Would this affect the run-time complexity? How and why?


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (arr, x) {
    if (!arr && !arr.length) return false;
    if (arr.length === 1 && arr[0] === x) return true;

    let startIndex = getPivot(arr);
    if (startIndex === 0) {
        let i = binarySearch(arr, startIndex, arr.length, x);
        return i > -1 ? true : false;
    } else if (x < arr[0]) {
        let i = binarySearch(arr, startIndex, arr.length, x);
        return i > -1 ? true : false;
    } else {
        let i = binarySearch(arr, 0, startIndex - 1, x);
        return i > -1 ? true : false;
    }
};


let getPivot = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return i + 1;
        }
    }
    return 0;
};

let binarySearch = function (arr, l, r, x) {
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === x) return mid;
        else if (x < arr[mid]) r = mid - 1;
        else l = mid + 1;
    }
    return -1;
};











// iterative approch
module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    search: function (A, B) {
        let start = 0;
        let end = A.length;
        while (end - start >= 0) {
            let mid = Math.floor(start + (end - start) / 2);
            if (A[mid] === B) {
                return mid;
            }
            if (A[start] <= A[mid]) {
                if (A[start] <= B && B < A[mid])
                    end = mid - 1;
                else
                    start = mid + 1;
            }
            // the upper half is sorted
            else {
                if (A[mid] < B && B <= A[end])
                    start = mid + 1;
                else
                    end = mid - 1;
            }
        }
        return -1;
    }
};
