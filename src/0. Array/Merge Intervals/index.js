// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    arr = sort(arr);
    i = 0;
    j = 1;

    while (j < arr.length) {
        if (isOverlapped(arr, i, j)) {
            arr[i][0] = Math.min(arr[i][0], arr[j][0]);
            arr[i][1] = Math.max(arr[i][1], arr[j][1]);
            arr.splice(j, 1);
        } else {
            i++;
            j++;
        }
    }
    return arr;
};

let isOverlapped = function (arr, i, j) {
    if (arr[i][0] >= arr[j][0] && arr[i][0] <= arr[j][1]) {
        return true;
    } else if (arr[i][1] >= arr[j][0] && arr[i][1] <= arr[j][1]) {
        return true;
    } else if (arr[j][0] >= arr[i][0] && arr[j][0] <= arr[i][1]) {
        return true;
    } else if (arr[j][1] >= arr[i][0] && arr[j][1] <= arr[i][1]) {
        return true;
    } else {
        return false;
    }
};

let sort = function (arr) {
    arr.sort(function (a, b) {
        return a[0] - b[0];
    });
    return arr;
};


// ===================================================================
// ===================================================================

// better code

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {

    intervals.sort(function(a,b){ return a[0]-b[0]});
    let merged = [intervals[0]];
    
    for (let i = 0; i < intervals.length; i++) {
        let prev = merged[merged.length-1];
        let curr = intervals[i];
        if( prev[1] >= curr[0]) {
            merged[merged.length-1] = [ Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1]) ]
        } else {
            merged.push(curr);
        }
    }
    return merged;
};







