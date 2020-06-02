// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (arr) {
    if (!arr || !arr.length) return false;
    if (arr.length === 1) return false;

    let i = 0;
    while (i < arr.length - 1) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
        i++;
    }
    return false;
};
