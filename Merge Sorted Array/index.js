/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// TODO: do it again
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
};

let result = merge([1, 2, 3, 0, 0, 0], 6, [2, 5, 6], 3);
console.log(result);

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]