// 46. Permutations
// https://leetcode.com/problems/permutations/
// Medium
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
var permute = function (nums) {
    if (!nums.length) return [[]];
    let ans = [];
    let set = new Set();
    recursive(nums, [], ans, set);
    return ans;
};
let recursive = function (digits, temp, ans, set) {
    if (temp.length === digits.length) {
        ans.push([...temp]);
        return;
    }
    for (let i of digits) {
        if (!set.has(i)) {
            temp.push(i);
            set.add(i);
            console.log(temp);
            recursive(digits, temp, ans, set);
            set.delete(i);
            temp.pop();
        }
    }
};

let swap = function (digits, i, j) {
    let temp = digits[i];
    digits[i] = digits[j];
    digits[j] = temp;
};