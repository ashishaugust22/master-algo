// 46. Permutations
// https://leetcode.com/problems/permutations/
// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Using Recursion
var permute = function (nums) {
    if (!nums.length) return [[]];
    let ans = [];
    recursive(nums, 0, ans);
    return ans;
};
let recursive = function (digits, start, ans) {
    debugger;
    if (start === digits.length - 1) {
        ans.push(digits);
        return;
    }
    for (let i = start; i < digits.length; i++) {
        swap(digits, start, i);
        recursive([...digits], start + 1, ans);
        swap(digits, start, i);
    }
};

let swap = function (digits, i, j) {
    let temp = digits[i];
    digits[i] = digits[j];
    digits[j] = temp;
};
