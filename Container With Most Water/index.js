// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {
    let i = 0;
    let j = arr.length - 1;
    let max = 0;
    while (i < j) {
        let newMax = Math.min(arr[i], arr[j]) * (j - i);
        if (max < newMax) {
            max = newMax;
        }
        if (arr[i] < arr[j]) {
            i++;
        } else if (arr[i] > arr[j]) {
            j--;
        } else {
            i++;
        }
    }
    return max;
};
