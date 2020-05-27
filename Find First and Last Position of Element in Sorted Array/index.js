// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, x) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];

    if (!arr) return ans;
    else if (arr.length === 0) return ans;
    else if (arr.length === 1 && arr[0] === x) return [0, 0];
    else if (arr.length === 1 && arr[0] !== x) return ans;

    ans[0] = binarySearch(arr, l, r, x, true);

    if (ans[0] > -1) {
        ans[1] = binarySearch(arr, l, r, x, false);
    }

    return ans;
};


var binarySearch = function (arr, l, r, x, left) {
    let lowest = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === x) {
            lowest = mid;
            if (left) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else if (x < arr[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return lowest;
};
