// Single Element in a Sorted Array
// Problem Description

// Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

// NOTE: Users are expected to solve this in O(log(N)) time.



// Problem Constraints
// 1 <= |A| <= 100000

// 1 <= A[i] <= 10^9



// Input Format
// The only argument given is the integer array A.



// Output Format
// Return the single element that appears only once.



// Example Input
// Input 1:

// A = [1, 1, 7]
// Input 2:

// A = [2, 3, 3]


// Example Output
// Output 1:

//  7
// Output 2:

//  2


// Example Explanation
// Explanation 1:

//  7 appears once
// Explanation 2:

//  2 appears once


module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        let start = 0;
        let end = A.length - 1;
        while (end - start >= 0) {
            let mid = Math.floor(start + (end - start) / 2);
            if ((mid === 0 || A[mid] !== A[mid - 1]) && (mid === A.length - 1 || A[mid] !== A[mid + 1])) {
                return A[mid];
            }
            if ((mid % 2 === 0 && A[mid] === A[mid - 1]) || (mid % 2 !== 0 && A[mid] === A[mid + 1])) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
};
