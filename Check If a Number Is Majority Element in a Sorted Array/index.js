// 1150. Check If a Number Is Majority Element in a Sorted Array

// Given an array nums sorted in non-decreasing order, and a number target, return True if and only if target is a majority element.

// A majority element is an element that appears more than N/2 times in an array of length N.



// Example 1:

// Input: nums = [2,4,5,5,5,5,5,6,6], target = 5
// Output: true
// Explanation: 
// The value 5 appears 5 times and the length of the array is 9.
// Thus, 5 is a majority element because 5 > 9/2 is true.
// Example 2:

// Input: nums = [10,100,101,101], target = 101
// Output: false
// Explanation: 
// The value 101 appears 2 times and the length of the array is 4.
// Thus, 101 is not a majority element because 2 > 4/2 is false.


// Note:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 10^9
// 1 <= target <= 10^9


// linear approch
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) count++;
        else if (count > 0) break;
    }
    return count > arr.length / 2 ? true : false;
};


// using binary search
// using binary search
/**
* @param {number[]} nums
* @param {number} target
* @return {boolean}
*/
var isMajorityElement = function (arr, x) {
    let l = 0;
    let r = arr.length - 1;
    let left = binarySearch(arr, l, r, x);
    if (left > -1) {
        if (arr[left + Math.floor(arr.length / 2)] === x) {
            return true;
        }
        else return false;
    } else {
        return false;
    }

};

let binarySearch = function (arr, l, r, x) {
    let lowest = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === x) {
            lowest = mid;
            r = mid - 1;
        } else if (x < arr[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return lowest;
};
