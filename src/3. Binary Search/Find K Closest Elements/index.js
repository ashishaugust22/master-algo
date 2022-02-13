// 658. Find K Closest Elements
// https://leetcode.com/problems/find-k-closest-elements/
// Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.



// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]


// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 10^4
// Absolute value of elements in the array and x will not exceed 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let n = arr.length;
    if (x <= arr[0]) {
        return arr.slice(0, k);
    } else if (arr[n - 1] <= x) {
        return arr.slice(n - k, n);
    } else {
        let index = arr.indexOf(x);
        if (index < 0)
            index = -index - 1;
        let low = Math.max(0, index - k - 1);
        let high = Math.min(arr.length - 1, index + k - 1);

        while (high - low > k - 1) {
            if (low < 0 || (x - arr[low]) <= (arr[high] - x))
                high--;
            else if (high > arr.length - 1 || (x - arr[low]) > (arr[high] - x))
                low++;
            else
                console.log("unhandled case: " + low + " " + high);
        }
        return arr.slice(low, high + 1);
    }

};