// 42. Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png
// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let leftArr = [];
    let rightArr = new Array(height.length).fill(-Infinity);
    let ans = 0;
    let currMax = -Infinity;
    for (let i = 0; i < height.length; i++) {
        leftArr.push(currMax);
        if (currMax < height[i]) {
            currMax = height[i];
        }
    }
    currMax = -Infinity;
    for (let i = height.length - 1; i >= 0; i--) {
        rightArr[i] = currMax;
        if (currMax < height[i]) {
            currMax = height[i];
        }
    }
    for (let i = 0; i < height.length; i++) {
        let minHeight = Math.min(leftArr[i], rightArr[i]);
        if (minHeight > height[i]) {
            ans += minHeight - height[i];
        }
    }
    return ans;
};

// Solved Again


//=================================================================
//=================================================================

// Better solution

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let leftMaxArray = [height[0]];
    let rightMaxArray = [height[height.length-1]];
    let trappedWater = 0;
    
    for (let i = 1; i < height.length; i++) {
        leftMaxArray.push(Math.max(leftMaxArray[i-1],height[i]));
    }
    
    for (let i = height.length-2; i >= 0; i--) {
        rightMaxArray.unshift(Math.max(rightMaxArray[0],height[i]));
    }
    
    for (let i = 0; i < height.length; i++) {
        trappedWater += Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i];
    }
    return trappedWater;
};