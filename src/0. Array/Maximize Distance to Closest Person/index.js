// Maximize Distance to Closest Person
// Medium
// https://leetcode.com/problems/maximize-distance-to-closest-person/
// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

// There is at least one empty seat, and at least one person sitting.

// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

// Return that maximum distance to the closest person.

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let length = seats.length;
    let left = new Array(length);
    let right = new Array(length);
    left.fill(length);
    right.fill(length);
    let max = 0;

    for (let i = 0; i < length; i++) {
        if (seats[i] === 1) {
            left[i] = 0;
        } else if (i > 0) {
            left[i] = left[i - 1] + 1;
        }
    }

    for (let i = length - 1; i >= 0; i--) {
        if (seats[i] === 1) {
            right[i] = 0;
        } else if (i < length - 1) {
            right[i] = right[i + 1] + 1;
        }
    }
    console.log(left, right);

    for (let i = 0; i < length; i++) {
        if (seats[i] === 0) {
            max = Math.max(max, Math.min(left[i], right[i]));
        }
    }
    return max;
};

