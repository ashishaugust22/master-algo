// 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/
// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (!nums.length) return 0;
    let ans = nums[0];
    let prevMax = nums[0];
    let prevMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let currentMax = Math.max(nums[i] * prevMax, nums[i] * prevMin, nums[i]);
        let currentMin = Math.min(nums[i] * prevMax, nums[i] * prevMin, nums[i]);
        if (ans < currentMax) {
            ans = currentMax;
        }
        prevMin = currentMin;
        prevMax = currentMax;
    }
    return ans;
};

