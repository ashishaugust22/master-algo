// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Brute force
var findDisappearedNumbers = function (nums) {
    nums.sort();

    let result = [];
    console.log(nums);
    for (let i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) === -1) {
            result.push(i);
        }
    }
    return result;

};