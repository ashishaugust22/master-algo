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
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(arr, k) {
  let heapLength = arr.length;
  
  // heapify the arr
  for (let i = Math.floor(arr.length/2); i >=0; i--) {
      heapify(arr, i, heapLength);
  }
  
  for (let i = 0; i < k-1; i++) {
      swap(arr, 0, heapLength-1);
      heapLength--;
      heapify(arr, 0, heapLength);
  }
  return arr[0];
}

let heapify = function (arr, i, heapLength) {
  let parentIndex = i;
  let leftChildIndex = 2 * i + 1;
  let rightChildIndex = 2 * i + 2;
  
  if (leftChildIndex < heapLength && arr[leftChildIndex] > arr[parentIndex]) {
      parentIndex = leftChildIndex;
  }
  
  if (rightChildIndex < heapLength && arr[rightChildIndex] > arr[parentIndex]) {
      parentIndex = rightChildIndex;
  }
  
  if (i !== parentIndex) {
      swap(arr, i, parentIndex);
      heapify(arr, parentIndex, heapLength);
  }
}

let swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// Trivial Test cases

// [2]
// 1




// using quick select

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {
    if (arr.length === 1 && k === 1) return arr[0];

    return quickSort(arr, 0, arr.length - 1, k - 1);
};

let quickSort = function (arr, left, right, k) {
    let pivot = partition(arr, left, right);

    if (pivot === k) {
        return arr[pivot];
    } else if (k < pivot) {
        return quickSort(arr, left, pivot - 1, k);
    } else {
        return quickSort(arr, pivot + 1, right, k);
    }
};

let partition = function (arr, low, high) {
    let pivot = arr[low];
    let i = high;
    let j = high;

    while (j > low) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i--;
        }
        j--;
    }
    swap(arr, low, i);
    return i;
};


let swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
