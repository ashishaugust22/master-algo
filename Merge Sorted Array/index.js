// Merge Sorted Array


// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let current = (m + n) - 1;
    while (i > -1 && j > -1) {
        if (nums1[i] > nums2[j]) {
            nums1[current] = nums1[i];
            i--;
        } else {
            nums1[current] = nums2[j];
            j--;
        }
        current--;
    }
    if (i > -1) {
        while (i > -1) {
            nums1[current] = nums1[i];
            i--; current--;
        }
    }

    if (j > -1) {
        while (j > -1) {
            nums1[current] = nums2[j];
            j--; current--;
        }
    }
    return nums1;
};

let result = merge([1, 2, 3, 0, 0, 0], 6, [2, 5, 6], 3);
console.log(result);





// 2nd Approch

var merge = function (nums1, m, nums2, n) {
    m--;
    n--;
    let index = nums1.length - 1;
    debugger;
    while (index >= 0) {
        if (m < 0) {
            nums1[index] = nums2[n];
            n--;
        } else if (n < 0) {
            nums1[index] = nums1[m];
            m--;
        } else {
            if (nums1[m] > nums2[n]) {
                nums1[index] = nums1[m];
                m--;
            } else {
                nums1[index] = nums2[n];
                n--;
            }
        }
        index--;
    }
    console.log(nums1);
};

let result = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);


// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]