// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// TODO: Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (arr) {
    let left = new Array(arr.length);
    let right = new Array(arr.length);
    let ans = new Array(arr.length);

    left[0] = 1;
    right[right.length - 1] = 1;

    for (let i = 1; i < arr.length; i++) {
        left[i] = left[i - 1] * arr[i - 1];
        let j = arr.length - i - 1;
        right[j] = right[j + 1] * arr[j + 1];
    }

    for (let i = 0; i < arr.length; i++) {
        ans[i] = left[i] * right[i];
    }
    return ans;
};

