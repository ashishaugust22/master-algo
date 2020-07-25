// 162. Find Peak Element

// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5 
// Explanation: Your function can return either index number 1 where the peak element is 2, 
//              or index number 5 where the peak element is 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {

    let first = 0;
    let last = arr.length - 1;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);

        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        } else if (arr[mid] < arr[mid + 1]) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
        return first;
    }
}; 