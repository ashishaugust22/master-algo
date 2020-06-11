// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {
    let heapLen = arr.length;

    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }

    for (let i = k - 1; i > 0; i--) {
        swap(arr, 0, heapLen - 1);
        heapLen--;
        heapify(arr, 0, heapLen);
    }
    return arr[0];
};

let swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

let heapify = function (arr, i, heapLen) {
    let parent = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heapLen && arr[left] > arr[parent]) {
        parent = left;
    }

    if (right < heapLen && arr[right] > arr[parent]) {
        parent = right;
    }

    if (i !== parent) {
        swap(arr, i, parent);
        heapify(arr, parent, heapLen);
    }
};;


// Trivial Test cases

// [2]
// 1

