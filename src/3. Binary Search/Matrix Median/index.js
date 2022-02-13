// Matrix Median
// Problem Description

// Given a matrix of integers A of size N x M in which each row is sorted.

// Find and return the overall median of the matrix A.

// NOTE: No extra memory is allowed.

// NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.



// Problem Constraints
// 1 <= N, M <= 10^5

// 1 <= N*M <= 10^6

// 1 <= A[i] <= 10^9

// N*M is odd



// Input Format
// The first and only argument given is the integer matrix A.



// Output Format
// Return the overall median of the matrix A.



// Example Input
// Input 1:

// A = [   [1, 3, 5],
//         [2, 6, 9],
//         [3, 6, 9]   ]
// Input 2:

// A = [   [5, 17, 100]    ]


// Example Output
// Output 1:

//  5
// Output 2:

//  17


// Example Explanation
// Explanation 1:


// A = [1, 2, 3, 3, 5, 6, 6, 9, 9]
// Median is 5. So, we return 5.
// Explanation 2:


// Median is 17.



module.exports = {
    //param A : array of array of integers
    //return an integer
    findMedian: function (A) {
        let [start, end] = this.findMinMax(A);
        let rows = A.length;
        let cols = A[0].length;
        let requiredNumber = Math.floor(((rows * cols) + 1) / 2);
        let result = -Infinity;
        while (end - start >= 0) {
            let mid = Math.floor(start + (end - start) / 2);
            let count = 0;
            for (let i = 0; i < A.length; i++) {
                for (let j = 0; j < A[0].length; j++) {
                    if (A[i][j] < mid) {
                        count++;
                    }
                }
            }
            if (count < requiredNumber) {
                result = Math.max(result, mid);
            }
            if (count < requiredNumber) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return result;
    },
    findMinMax: function (A) {
        let min = Infinity;
        let max = -Infinity;
        for (let i = 0; i < A.length; i++) {
            min = Math.min(min, A[i][0]);
            max = Math.max(max, A[i][A[0].length - 1]);
        }
        return [min, max];
    }
};
